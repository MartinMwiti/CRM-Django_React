from django.urls import path
from .views import ProductListCreateView, ProductRetrieveUpdateDestroyView

urlpatterns = [
    path('', ProductListCreateView.as_view()),
    path('<pk>', ProductRetrieveUpdateDestroyView.as_view()),
]
