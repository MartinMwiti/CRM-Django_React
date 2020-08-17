# I'll also use a post_save signal to automatically create the user profile for new users that register to the platform.
from .models import employeeProfile, CustomUser
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save, sender=CustomUser)
def create_profile(sender, instance, created, **kwargs):
    if created:
        employeeProfile.objects.create(user=instance)


