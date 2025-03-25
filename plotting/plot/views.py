import pandas as pd

from django.shortcuts import render
from .models import Area_plot,Bar_plot, Box_plot, Histogram_plot, Heatmap_plot, Line_plot,  Pie_plot, Radar_plot, Scatter_plot, StackedBar_plot

# Create your views here.

def db_table0():

    data0 = StackedBar_plot.objects.all()

    quater     =  [ obj.quater      for obj in data0 ]
    electronics = [ obj.electronics for obj in data0 ]
    furniture   = [ obj.furniture   for obj in data0 ]
    clothing    = [ obj.clothing    for obj in data0 ]
    total       = [ obj.total       for obj in data0 ]

    table0 = pd.DataFrame({'Quarter': quater, 'Electronics': electronics, 'Furniture': furniture, 'Clothing': clothing, 'Total': total}).to_html(classes='table', index=False)

    x_axis = quater
    y_axis = total
    table_title, x_lables, y_lables = 'Quarterly Sales by Category', 'Quarter', 'Sales'

    return x_axis, y_axis, table_title, table0, x_lables, y_lables


def db_table1():
    data1 = Line_plot.objects.all()
    month = [ obj.month for obj in data1 ]
    sales = [ obj.sales for obj in data1 ]

    table1 = pd.DataFrame({'Month': month, 'Sales': sales}).to_html(classes='table', index=False)

    x_axis, y_axis= month, sales
    table_title, x_lables, y_lables = 'Monthly Sales', 'Month', 'Sales'

    return x_axis, y_axis, table_title, table1, x_lables, y_lables


def db_table2():

    data2 = Bar_plot.objects.all()

    department = [ obj.department for obj in data2 ]
    revenues   = [ obj.revenue    for obj in data2 ]

    table2 = pd.DataFrame({'Department': department, 'Revenues': revenues}).to_html(classes='table', index=False)

    x_axis, y_axis = department,revenues
    table_title, x_lables, y_lables = 'Department Revenues', 'Department', 'Revenue'

    return x_axis, y_axis, table_title, table2, x_lables, y_lables


def db_table3():

    data3 = Radar_plot.objects.all()

    aspect = [ obj.aspect for obj in data3 ]
    score  = [ obj.score  for obj in data3 ]

    table3 = pd.DataFrame({'Aspect': aspect, 'Score': score}).to_html(classes='table', index=False)

    x_axis = aspect
    y_axis = score
    table_title, x_lables, y_lables = 'Aspect Scores', 'Aspect', 'Score'

    return x_axis, y_axis, table_title, table3, x_lables, y_lables


def db_table4():

    data4 = Scatter_plot.objects.all()

    hours_studied = [ obj.hoursstudied for obj in data4 ]
    exam_scores   = [ obj.examscore    for obj in data4 ]

    table4 = pd.DataFrame({'Hours': hours_studied, 'Exam score': exam_scores}).to_html(classes='table', index=False)

    x_axis = hours_studied
    y_axis = exam_scores
    table_title, x_lables, y_lables = 'Study Hours and Exam Score', 'Hours studied', 'Exam Score'

    return x_axis, y_axis, table_title, table4, x_lables, y_lables


def db_table5():

    data5 = Area_plot.objects.all()

    month        = [ obj.month       for obj in data5 ]
    new_customer = [ obj.newcustomer for obj in data5 ]
    old_customer = [ obj.oldcustomer for obj in data5 ]

    table5 = pd.DataFrame({'Month': month, 'New customers': new_customer, 'Old customers': old_customer}).to_html(classes='table', index=False)

    x_axis = month
    y_axis = new_customer 
    table_title, x_lables, y_lables = 'New and Old Customers per Month', 'Month', 'Customers'

    return x_axis, y_axis, table_title, table5, x_lables, y_lables


def db_table6():
    data6 = Pie_plot.objects.all()

    companies = [ obj.company     for obj in data6 ]
    sales     = [ obj.marketshare for obj in data6 ]

    table6 = pd.DataFrame({'Company': companies, 'Sales': sales}).to_html(classes='table', index=False)

    x_axis = companies
    y_axis = sales
    table_title, x_lables, y_lables = 'Company Sales', 'Company', 'Sales'

    return x_axis, y_axis, table_title, table6, x_lables, y_lables


def db_table7():
    data7 = Heatmap_plot.objects.all()

    region = [ obj.region   for obj in data7 ]
    jan    = [ obj.january  for obj in data7 ]
    feb    = [ obj.february for obj in data7 ]
    mar    = [ obj.march    for obj in data7 ]
    apl    = [ obj.april    for obj in data7 ]
    may    = [ obj.may      for obj in data7 ]

    table7 = pd.DataFrame({'Region': region, 'Jan': jan, 'Feb': feb, 'Mar': mar, 'Apr': apl, 'May': may}).to_html(classes='table', index=False)

    x_axis = region
    y_axis = jan 
    table_title, x_lables, y_lables = 'Regional Sales Over Months', 'Region', 'Sales'

    return x_axis, y_axis, table_title, table7, x_lables, y_lables


def db_table8():
    data8 = Box_plot.objects.all()

    department = [ obj.department for obj in data8 ]
    mean       = [ obj.mean       for obj in data8 ]
    median     = [ obj.median     for obj in data8 ]
    maxi       = [ obj.max        for obj in data8 ]
    q1         = [ obj.q1         for obj in data8 ]
    q2         = [ obj.q2         for obj in data8 ]

    table8 = pd.DataFrame({'Department': department, 'Mean': mean, 'Q1': q1, 'Median': median, 'Q2': q2, 'Maximum': maxi}).to_html(classes='table', index=False)

    x_axis = department
    y_axis = mean
    table_title, x_lables, y_lables = 'Department Statistics', 'Department', 'Statistics'

    return x_axis, y_axis, table_title, table8, x_lables, y_lables


def db_table9():

    data9 = Histogram_plot.objects.all()

    age_groups = [ obj.agegroup  for obj in data9 ]
    customers  = [ obj.customers for obj in data9 ]

    table9 = pd.DataFrame({'Age groups': age_groups, 'Customers': customers}).to_html(classes='table', index=False)

    x_axis = age_groups
    y_axis = customers
    table_title, x_lables, y_lables = 'Customer Age Groups', 'Age Groups', 'Customers'

    return x_axis, y_axis, table_title, table9, x_lables, y_lables


def home(request):

    x0_axis, y0_axis, table0_title, table0_data, x0_lables, y0_lables=db_table0()
    x1_axis, y1_axis, table1_title, table1_data, x1_lables, y1_lables=db_table1()
    x2_axis, y2_axis, table2_title, table2_data, x2_lables, y2_lables=db_table2()
    x3_axis, y3_axis, table3_title, table3_data, x3_lables, y3_lables=db_table3()
    x4_axis, y4_axis, table4_title, table4_data, x4_lables, y4_lables=db_table4()
    x5_axis, y5_axis, table5_title, table5_data, x5_lables, y5_lables=db_table5()
    x6_axis, y6_axis, table6_title, table6_data, x6_lables, y6_lables=db_table6()
    x7_axis, y7_axis, table7_title, table7_data, x7_lables, y7_lables=db_table7()
    x8_axis, y8_axis, table8_title, table8_data, x8_lables, y8_lables=db_table8()
    x9_axis, y9_axis, table9_title, table9_data, x9_lables, y9_lables=db_table9()

    chart_data={

        'Table1': {'title':table0_title,'data':table0_data},
        'Table2': {'title':table1_title,'data':table1_data},
        'Table3': {'title':table2_title,'data':table2_data},
        'Table4': {'title':table3_title,'data':table3_data},
        'Table5': {'title':table4_title,'data':table4_data},
        'Table6': {'title':table5_title,'data':table5_data},
        'Table7': {'title':table6_title,'data':table6_data},
        'Table8': {'title':table7_title,'data':table7_data},
        'Table9': {'title':table8_title,'data':table8_data},
        'Table10':{'title':table9_title,'data':table9_data},
    }

    plot_data={
        'plot1': {'x_data':x0_axis,'y_data':y0_axis,'x_name':x0_lables,'y_name':y0_lables,'plot_title':table0_title},
        'plot2': {'x_data':x1_axis,'y_data':y1_axis,'x_name':x1_lables,'y_name':y1_lables,'plot_title':table1_title},
        'plot3': {'x_data':x2_axis,'y_data':y2_axis,'x_name':x2_lables,'y_name':y2_lables,'plot_title':table2_title},
        'plot4': {'x_data':x3_axis,'y_data':y3_axis,'x_name':x3_lables,'y_name':y3_lables,'plot_title':table3_title},
        'plot5': {'x_data':x4_axis,'y_data':y4_axis,'x_name':x4_lables,'y_name':y4_lables,'plot_title':table4_title},
        'plot6': {'x_data':x5_axis,'y_data':y5_axis,'x_name':x5_lables,'y_name':y5_lables,'plot_title':table5_title},
        'plot7': {'x_data':x6_axis,'y_data':y6_axis,'x_name':x6_lables,'y_name':y6_lables,'plot_title':table6_title},
        'plot8': {'x_data':x7_axis,'y_data':y7_axis,'x_name':x7_lables,'y_name':y7_lables,'plot_title':table7_title},
        'plot9': {'x_data':x8_axis,'y_data':y8_axis,'x_name':x8_lables,'y_name':y8_lables,'plot_title':table8_title},
        'plot10':{'x_data':x9_axis,'y_data':y9_axis,'x_name':x9_lables,'y_name':y9_lables,'plot_title':table9_title}
    }

    content={
        'chart_data':chart_data,
        'plot_data':plot_data
    }

    return render(request,'home.html',{'content':content})