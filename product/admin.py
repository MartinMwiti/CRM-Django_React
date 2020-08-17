from django.contrib import admin
from .models import Product


admin.site.register(Product)

# class ProductAddressAdmin(admin.ModelAdmin):
#     list_display = ('name', 'available', 'description', 'image', 'category',
#                     'qty_amount', 'price')
#     list_display_links = ('name', 'qty_amount')
#     search_fields = ('name', 'qty_amount', 'price')
#     list_per_page = 25


# admin.site.register(Product, ProductAddressAdmin)
