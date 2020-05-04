from django.urls import path
from . import views


urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('quickview/<int:product_id>',views.quickView,name='quickView'),
    path('checkout/',views.checkout,name='checkout'),
    path('orderplaced/',views.orderplaced,name='orderPlaced')
]