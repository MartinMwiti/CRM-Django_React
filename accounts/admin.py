from django.contrib import admin

from .models import CustomUser, employeeProfile, employeeDetails

admin.site.register(CustomUser)


class employeeProfileAdmin(admin.ModelAdmin):
    list_display = ('id', 'image', 'user', 'phone_no', 'description',
                    'location', 'department',  'job_title', 'date_employed')
    list_display_links = ('user', 'phone_no', 'department')
    search_fields = ('user', 'phone_no', 'department')
    list_per_page = 25


admin.site.register(employeeProfile, employeeProfileAdmin)

class employeeDetailsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone_no', 'email', 'department', 'description',
                    'job_title',  'salary', 'date_employed', 'is_manager')
    list_display_links = ('name',  'email', 'phone_no', 'department')
    search_fields = ('name', 'email', 'department', 'phone_no')
    list_per_page = 25

admin.site.register(employeeDetails, employeeDetailsAdmin)



