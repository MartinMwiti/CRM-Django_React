# Generated by Django 3.0.8 on 2020-07-28 15:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0012_auto_20200728_1837'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employeedetails',
            name='date_employed',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
