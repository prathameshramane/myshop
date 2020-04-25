from django.db import models

# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=200)
    product_desc = models.CharField(max_length=5000)
    product_category = models.CharField(max_length=200)
    product_subcategory = models.CharField(max_length=200)
    product_pub_date = models.DateTimeField()
    product_image = models.ImageField(upload_to= 'myshop/product_img')
    product_cost = models.IntegerField()

    def __str__(self):
        return self.product_name