from django.db import models
import json


# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=200)
    product_desc = models.CharField(max_length=5000)
    product_category = models.CharField(max_length=200)
    product_subcategory = models.CharField(max_length=200)
    product_pub_date = models.DateTimeField()
    product_image = models.ImageField(upload_to='myshop/product_img')
    product_cost = models.IntegerField()

    def __str__(self):
        return self.product_name


class Order(models.Model):
    order_products = models.CharField(max_length=5000)
    order_cost = models.CharField(max_length=8, default="")
    order_date = models.DateTimeField(auto_now=True)
    customer_name = models.CharField(max_length = 50,default="")
    customer_phone = models.CharField(max_length=20,default="")
    customer_email = models.CharField(max_length=40,default="")
    customer_address = models.CharField(max_length=4000, default="")
    customer_country = models.CharField(max_length=20, default="")
    customer_state = models.CharField(max_length=20, default="")
    customer_zip = models.CharField(max_length=20, default="")
    customer_payment = models.CharField(max_length=20, default="")

    def __str__(self):
        return f"order_{self.id}"

class Contact(models.Model):
    issue_date = models.DateTimeField(auto_now=True)
    customer_name = models.CharField(max_length = 50,default="")
    customer_phone = models.CharField(max_length=13,default="")
    customer_email = models.CharField(max_length=40,default="")
    customer_orderid =  models.CharField(max_length=40,default="")
    customer_issue =  models.CharField(max_length=5000,default="")

    def __str__(self):
        return f"issue_{self.id}"
