from django.urls import path
from . import views


urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('quickview/<int:product_id>',views.quickView,name='quickView'),
]