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
            prods.append([cat, Product.objects.filter(product_category=cat)])
        return prods


class QuickView(generic.DetailView):
    template_name = "myshop/quickview.html"
    context_object_name = "product"
    model = Product


def quickView(request,product_id):
    product = Product.objects.filter(id=product_id)[0]
    all_prods = Product.objects.all()
    sub_category_prods = Product.objects.filter(product_subcategory = product.product_subcategory)
    params = {'product':product,'all_prods':all_prods,"sub_category_prods":sub_category_prods}
    return render(request,'myshop/quickview.html',params)
