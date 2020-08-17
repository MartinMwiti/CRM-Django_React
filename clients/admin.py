from django.contrib import admin
from .models import Purchaser, purchaserShippingDetail, paymentInvoice


class PurchaserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'email', 'image', 'data_added')
    list_display_links = ('id', 'name', 'email')
    search_fields = ('name', 'email')
    list_per_page = 25


admin.site.register(Purchaser, PurchaserAdmin)


class purchaserShippingDetailAdmin(admin.ModelAdmin):
    list_display = ('id', 'frequent_customer', 'owner', 'address', 'zip_code', 
                    'description', 'county', 'location', 'country')
    list_display_links = ('owner', 'location', 'county')
    search_fields = ('owner', 'county')
    list_per_page = 25


admin.site.register(purchaserShippingDetail, purchaserShippingDetailAdmin)


class paymentInvoiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'invoiceNo', 'invoiceOwner', 'product', 'mode', 'date',
                    'quantity', 'status', 'payment_made')
    list_display_links = ('mode', 'invoiceNo', 'invoiceOwner', 'product', 'status')
    search_fields = ('mode', 'invoiceOwner')
    list_per_page = 25


admin.site.register(paymentInvoice, paymentInvoiceAdmin)
