# Generated by Django 3.0.8 on 2020-07-28 14:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_auto_20200728_1719'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employeedetails',
            old_name='title',
            new_name='job_title',
        ),
        migrations.RenameField(
            model_name='employeeprofile',
            old_name='date_joined',
            new_name='date_employed',
        ),
        migrations.RemoveField(
            model_name='employeedetails',
            name='image',
        ),
        migrations.RemoveField(
            model_name='employeeprofile',
            name='is_manager',
        ),
        migrations.AddField(
            model_name='employeedetails',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='employeedetails',
            name='is_manager',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='employeedetails',
            name='email',
            field=models.EmailField(default='employee@test.com', max_length=255),
        ),
        migrations.AlterField(
            model_name='employeedetails',
            name='phone_no',
            field=models.CharField(blank=True, default='0700000000', max_length=10),
        ),
    ]