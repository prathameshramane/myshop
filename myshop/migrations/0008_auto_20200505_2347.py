# Generated by Django 3.0.4 on 2020-05-05 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myshop', '0007_order_order_cost'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='customer_phone',
            field=models.CharField(default='', max_length=20),
        ),
    ]