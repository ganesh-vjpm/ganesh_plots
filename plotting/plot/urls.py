from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('plot_table0/', views.plot_table0, name='plot_table0'),
    path('plot_table1/', views.plot_table1, name='plot_table1'),
    path('plot_table2/', views.plot_table2, name='plot_table2'),
    path('plot_table3/', views.plot_table3, name='plot_table3'),
    path('plot_table4/', views.plot_table4, name='plot_table4'),
    path('plot_table5/', views.plot_table5, name='plot_table5'),
    path('plot_table6/', views.plot_table6, name='plot_table6'),
    path('plot_table7/', views.plot_table7, name='plot_table7'),
    path('plot_table8/', views.plot_table8, name='plot_table8'),
    path('plot_table9/', views.plot_table9, name='plot_table9'),

]