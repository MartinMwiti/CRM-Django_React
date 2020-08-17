from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import permissions
from rest_framework import mixins
from rest_framework import generics
from django.shortcuts import get_object_or_404

from .models import Purchaser, purchaserShippingDetail, paymentInvoice
from .serializers import purchaserSerializer, purchaserShippingDetailSerializer, paymentInvoiceSerializer



class PurchaserListCreateView(ListCreateAPIView):
    """
    ListCreateAPIView executes both 'GET' and 'POST' requests. i.e listing a queryset or creating a model instance.
    """
    serializer_class = purchaserSerializer
    queryset = Purchaser.objects.all()
    permission_classes = (permissions.AllowAny, )


class PurchaserRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    """
    RetrieveUpdateDestroyAPIView executes 'GET', 'PUT', 'PATCH', & 'DELETE' requests. 
    """
    serializer_class = purchaserSerializer
    queryset = Purchaser.objects.all()
    


# Shipping
class purchaserShippingDetailsListCreateView(ListCreateAPIView):
    """
    ListCreateAPIView executes both 'GET' and 'POST' requests. i.e listing a queryset or creating a model instance.
    """
    serializer_class = purchaserShippingDetailSerializer
    queryset = purchaserShippingDetail.objects.all()
    


class purchaserShippingDetailRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    """
    RetrieveUpdateDestroyAPIView executes 'GET', 'PUT', 'PATCH', & 'DELETE' requests. 
    """
    serializer_class = purchaserShippingDetailSerializer
    queryset = purchaserShippingDetail.objects.all()
    


# Invoice
class paymentInvoiceListCreateView(ListCreateAPIView):
    """
    ListCreateAPIView executes both 'GET' and 'POST' requests. i.e listing a queryset or creating a model instance.
    """
    serializer_class = paymentInvoiceSerializer
    queryset = paymentInvoice.objects.all().order_by('-date')
    

    # # Filter by products model filed
    # queryset = paymentInvoice.objects.order_by(
    #     '-date').filter(product__qty_amount="5L")

    # permission_classes = [permissions.IsAdminUser]


class paymentInvoiceRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    """
    RetrieveUpdateDestroyAPIView executes 'GET', 'PUT', 'PATCH', & 'DELETE' requests. 
    """
    serializer_class = paymentInvoiceSerializer
    queryset = paymentInvoice.objects.all()
    