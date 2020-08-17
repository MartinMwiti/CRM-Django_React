from rest_framework import serializers
from .models import Purchaser, paymentInvoice, purchaserShippingDetail


class purchaserSerializer(serializers.ModelSerializer):
    phone = serializers.StringRelatedField(read_only=True)
    email = serializers.StringRelatedField(read_only=True)
    image = serializers.StringRelatedField(read_only=True)
    data_added = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Purchaser
        fields = ('id', 'name', 'phone', 'email', 'image', 'data_added')


class purchaserShippingDetailSerializer(serializers.ModelSerializer):
    # owner = serializers.StringRelatedField(source='owner.name', read_only=True)
    class Meta:
        model = purchaserShippingDetail
        fields = '__all__'


class paymentInvoiceSerializer(serializers.ModelSerializer):
    invoiceOwner = purchaserSerializer(many=False)
    invoiceOwner = serializers.CharField(source='invoiceOwner.name')

    class Meta:
        model = paymentInvoice
        fields = '__all__'
        
    # Override Create func
    def create(self, validated_data):
        name = validated_data.pop("invoiceOwner")

        purchaser = Purchaser.objects.filter(**name).first() # get 1st object assuming it exists in db.
        if purchaser is None: # if the object does not exist in Purchaser db, create one
            purchaser = Purchaser.objects.create(**name)

        validated_data.update({"invoiceOwner": purchaser}) # invoiceOwner will be assigned/take the object of Purchaser.

        return paymentInvoice.objects.create(**validated_data)

    
    # UNPACK DICTIONARY
    # **VALUES




# DOES NOT CHECK IF PURCHASER INSTANCE EXISTS
    # def create(self, validated_data):
    #     # pop only takes one value in this instance the passed 'invoiceOwner' value e.g Martin
    #     purchaser_data = validated_data.pop("invoiceOwner")

    #     purchaser = Purchaser.objects.create(**purchaser_data)
    #     validated_data.update({"invoiceOwner": purchaser}) # update-dictionary way of adding value

    #     return paymentInvoice.objects.create(**validated_data)








# EXTRAS
    # def get_shipping_detail(self, instance):
    #     return instance.shipping_detail.customer.name


# # Alternative
# class InvoiceSerializer(serializers.ModelSerializer):
#     shipping_address_owner = serializers.CharField(
#         source='shipping_detail_owner.customer')

#     class Meta:
#         model = Invoice
#         fields = '__all__'
