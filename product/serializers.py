from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'available', 'description', 'image', 'category',
                  'qty_amount', 'price')
