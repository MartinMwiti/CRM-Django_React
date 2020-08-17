from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (employeeProfileListCreateView,
                    employeeProfileDetailView, employeeDetailsListCreateView, employeeDetailsDetailView)

urlpatterns = [

    #gets all user profiles and create a new profile
    path("all-profiles/", employeeProfileListCreateView.as_view(), name="all-profiles"),

    # retrieves profile details of the currently logged in user
    path("profile/<int:pk>/", employeeProfileDetailView.as_view(), name="profile"),

    # Employee Details
    path("employees_hr/", employeeDetailsListCreateView.as_view(),
         name="all-employees"),

    # Employee Details
    path("employees_hr/<int:pk>",
         employeeDetailsDetailView.as_view(), name="employee-detail"),
    
]
