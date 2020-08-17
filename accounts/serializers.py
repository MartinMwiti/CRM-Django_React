from rest_framework import serializers
from .models import employeeProfile, employeeDetails
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

# Custom user serializer
class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')


# Employee profile serializer
class employeeProfileSerializer(serializers.ModelSerializer):
    # the employeeProfile model was linked to the custom user model in django. I'll indicate this field(user) as read_only. This means that the field will be included in the APIs output but won't be included during Create or Update operations on the endpoint.
    user = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = employeeProfile
        fields = '__all__'



# Employee Details (HR)
class employeeDetailsSerializer(serializers.ModelSerializer):
    # solving the id to name issue
    # name = serializers.SerializerMethodField()
    class Meta:
        model = employeeDetails
        fields = '__all__'

    # def get_name(self, instance):
    #     return instance.name.name
    






# ref: https://lewiskori.com/blog/user-registration-and-authorization-on-a-django-api-with-djoser-and-json-web-tokens/
