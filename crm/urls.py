from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Djoser url
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),

    #path to our account's app endpoints
    path("api/accounts/", include("accounts.urls")),
    # Customers+Address+Invoice
    path('api/clients/', include('clients.urls')),
    # Products
    path('api/products/', include('product.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # urls for my media to be able to access via urls

# handling react
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
