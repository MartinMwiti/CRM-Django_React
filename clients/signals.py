from .models import Purchaser, paymentInvoice
from django.db.models.signals import post_save
from django.dispatch import receiver

# DISCLAIMER: CREATING THIS SIGNAL WILL CAUSE A DUPLICATE IN PAYMENTINVOICE WHENEVER I CREATE AN INSTANCE USING PAYMENTINVOICE. (1st will take the default values as caused by the signal, the 2nd will use the POST request validated_data)

# @receiver(post_save, sender=Purchaser)
# def create_profile(sender, instance, created, **kwargs):
#     if created:
#         paymentInvoice.objects.create(invoiceOwner=instance)
