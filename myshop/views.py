from django.shortcuts import render
from django.http import HttpResponse
from django.views import generic
from .models import Product, Order, Contact
import json


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


def quickView(request, product_id):
    product = Product.objects.filter(id=product_id)[0]
    all_prods = Product.objects.all()
    sub_category_prods = Product.objects.filter(product_subcategory=product.product_subcategory)
    params = {'product': product, 'all_prods': all_prods, "sub_category_prods": sub_category_prods}
    return render(request, 'myshop/quickview.html', params)


def checkout(request):
    if request.method == 'GET':
        cart = json.loads(request.GET.get('json'))
        prods = []
        for key in cart:
            new = [Product.objects.filter(id=key[4:]), cart[key]]
            prods.append(new)
        total = 0
        quantity = 0
        for prod in prods:
            total += prod[0][0].product_cost * prod[1]
            quantity += 1
        params = {'products': prods, 'total': total, 'quantity': quantity}
    else:
        params = {}
    return render(request, 'myshop/checkout.html', params)


def orderplaced(request):
    if (request.method == 'POST'):
        order = request.POST.get('order')
        order_cost= request.POST.get('total_cost')
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        address = request.POST.get('address')
        country = request.POST.get('country')
        state = request.POST.get('state')
        zip = request.POST.get('zip')
        payment = request.POST.get('paymentMethod')
        print(order,order_cost,name,email,phone,address,country,state,zip,payment)
        Order(order_products =order,customer_name=name, customer_phone=phone, customer_email=email, customer_address=address,
            customer_country=country,customer_state=state,customer_zip=zip,customer_payment=payment,order_cost=order_cost).save()
    return render(request, 'myshop/order_placed.html')


def contact(request):
    return render(request, 'myshop/contact_page.html')


def about(request):
    return render(request, 'myshop/about.html')


def contactsubmit(request):
    if (request.method == 'POST'):
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        id = request.POST.get('id')
        query = request.POST.get('query')
        Contact(customer_name=name, customer_phone=phone, customer_email=email, customer_issue=query,
                               customer_orderid=id).save()
    return render(request, 'myshop/contact_submit.html')
