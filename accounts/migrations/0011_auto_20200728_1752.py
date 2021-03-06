# Generated by Django 3.0.8 on 2020-07-28 14:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_auto_20200728_1749'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employeedetails',
            name='email',
            field=models.EmailField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='employeedetails',
            name='phone_no',
            field=models.CharField(blank=True, max_length=10, unique=True),
        ),
        migrations.AlterField(
            model_name='employeeprofile',
            name='phone_no',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]
