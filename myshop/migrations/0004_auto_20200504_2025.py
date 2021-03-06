# Generated by Django 3.0.4 on 2020-05-04 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myshop', '0003_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='customer_address',
            field=models.CharField(default='', max_length=4000),
        ),
        migrations.AddField(
            model_name='order',
            name='customer_email',
            field=models.CharField(default='', max_length=40),
        ),
        migrations.AddField(
            model_name='order',
            name='customer_name',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='order',
            name='customer_phone',
            field=models.CharField(default='', max_length=13),
        ),
    ]
