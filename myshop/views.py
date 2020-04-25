from django.shortcuts import render
from django.http import HttpResponse
from django.views import generic
from .models import Product


# Create your views here.

class IndexView(generic.ListView):
    template_name = 'myshop/index.html'
    context_object_name = 'products'

    def get_queryset(self):
        category = {prod.product_category for prod in Product.objects.all()}
        prods = []
        for cat in category:
            prods.append([cat, Product.objects.filter(product_category= cat)])
        return prods
