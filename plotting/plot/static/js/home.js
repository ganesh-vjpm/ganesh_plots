// (function(){

//             var select_plot_type = document.getElementById('plot_type_'+ plot_index).value;

//             var chart_container_id = 'chart'+ plot_index;

//             var chartDom = document.getElementById(chart_container_id);
//             var plots = echarts.init(chartDom);
            
//             var plot_title = "{{ plot_value.plot_title }}";
//             var x_name     = "{{ plot_value.x_name }}";
//             var y_name     = "{{ plot_value.y_name }}";
//             var x_data     = {{ plot_value.x_data|safe }};
//             var y_data     = {{ plot_value.y_data|safe }};

//             var option = {

//                 title: {
//                     text: plot_title,
//                 },

//                 tooltip:{
//                     trigger: 'axis',
//                     axisPointer: {type: 'cross'}
//                 },

//                 xAxis: {
//                     type:'category',
//                     data: x_data,
//                     name: x_name
//                 },

//                 yAxis: {
//                     type: 'value',
//                     name: y_name
//                 },

//                 legend: {
//                     top: '0%',
//                     right:'0%',
//                     orient: 'vertical',
//                     textStyle:{
//                         fontSize: 8,
//                     },
//                   },

//                 series: [{
//                     data: y_data,
//                     type: select_plot_type,
//                     name: 'scale'
//                 }]

//             };

//             if (select_plot_type === 'pie') {
                
//                 option.series[0].type   = 'pie';
//                 option.series[0].radius = '55%';

//                 option.series[0].data = x_data.map(function (item, index) {

//                     return { value: y_data[index], name: item };

//                 });

//                 option.tooltip.trigger = 'item';
//                 option.tooltip.formatter = '{b}: {c} ({d}%)';
            
//                 option.series[0].label = {
//                     show: true,
//                     formatter: '{b}: {d}%'
//                 };
            
//             }

//             else {
//                 option.tooltip.trigger = 'axis';
//                 option.tooltip.formatter = function (params) {
                   
//                     var tool_tip_content = params[0].name + '<br/>';
//                     params.forEach(function (param) {
//                         tool_tip_content += param.seriesName + ': ' + param.value + '<br/>';
//                     });
//                     return tool_tip_content;
//                 };
//             }

//             plots.setOption(option)

// })();
   




// function table_in_newtab(plotIndex) {
//     $.ajax({
//         type: "GET",
//         url: "/plot_table" + plotIndex + "/",

//         success: function(response) {
//             if (response.status === "ok" && response.data && response.data.length > 0) {
//                 var table_plot = "<table><thead><tr>";

//                 var columns = Object.keys(response.data[0]);

//                 columns.forEach(function(column) {
//                     table_plot += "<th>" + column + "</th>";
//                 });

//                 table_plot += "</tr></thead><tbody>";

//                 response.data.forEach(function(row) {
//                     table_plot += "<tr>";
//                     columns.forEach(function(column) {
//                         table_plot += "<td>" + row[column] + "</td>";
//                     });
//                     table_plot += "</tr>";
//                 });

//                 table_plot += "</tbody></table>";

//                 openTableInNewTab(table_plot);
//             } else {
//                 alert("No data available.");
//             }
//         },
//         error: function() {
//             alert("AJAX request failed. Please try again later.");
//         }
//     });
// }

// function openTableInNewTab(table_plot) {
//     const newTab = window.open();
//     newTab.document.write(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <link rel="stylesheet" href="{% static 'css/home.css' %}">
//             <title>Plot table</title>
//         </head>
//         <body>
//             <h1> Plot Table </h1>
//             ${table_plot}
//         </body>
//         </html>
//     `);
//     newTab.document.close();
// }

// function update_plot_type(plot_index) {
//     {% for plot_key, plot_value in content.plot_data.items %}
//     if ({{ forloop.counter0 }} === plot_index) {
//         (function() {
//             var select_plot_type = document.getElementById('plot_type_' + plot_index).value;
//             var chart_container_id = 'chart' + plot_index;
//             var chartDom = document.getElementById(chart_container_id);
//             var plots = echarts.init(chartDom);

//             var plot_title = "{{ plot_value.plot_title }}";
//             var x_name = "{{ plot_value.x_name }}";
//             var y_name = "{{ plot_value.y_name }}";
//             var x_data = {{ plot_value.x_data|safe }};
//             var y_data = {{ plot_value.y_data|safe }};

//             var option = {
//                 title: {
//                     text: plot_title,
//                 },
//                 tooltip: {
//                     trigger: 'axis',
//                     axisPointer: { type: 'cross' }
//                 },
//                 xAxis: {
//                     type: 'category',
//                     data: x_data,
//                     name: x_name
//                 },
//                 yAxis: {
//                     type: 'value',
//                     name: y_name
//                 },
//                 legend: {
//                     top: '0%',
//                     right: '0%',
//                     orient: 'vertical',
//                     textStyle: {
//                         fontSize: 8,
//                     },
//                 },
//                 series: [{
//                     data: y_data,
//                     type: select_plot_type,
//                     name: 'scale'
//                 }]
//             };

//             if (select_plot_type === 'pie') {
//                 option.series[0].type = 'pie';
//                 option.series[0].radius = '55%';

//                 option.series[0].data = x_data.map(function(item, index) {
//                     return { value: y_data[index], name: item };
//                 });

//                 option.tooltip.trigger = 'item';
//                 option.tooltip.formatter = '{b}: {c} ({d}%)';

//                 option.series[0].label = {
//                     show: true,
//                     formatter: '{b}: {d}%'
//                 };
//             }

//             plots.setOption(option);

//         })();
//     }
//     {% endfor %}
// }

// window.onload = function() {
//     {% for plot_key, plot_value in content.plot_data.items %}
//         update_plot_type({{ forloop.counter0 }});
//     {% endfor %}
// }


// home.js
// $(document).ready(function() {
//     // Your function definitions like table_in_newtab go here
//     function table_in_newtab(plotIndex) {
//         $.ajax({
//             type: "GET",
//             url: "/plot_table" + plotIndex + "/",

//             success: function(response) {
//                 if (response.status === "ok" && response.data && response.data.length > 0) {
//                     var table_plot = "<table><thead><tr>";

//                     var columns = Object.keys(response.data[0]);

//                     columns.forEach(function(column) {
//                         table_plot += "<th>" + column + "</th>";
//                     });

//                     table_plot += "</tr></thead><tbody>";

//                     response.data.forEach(function(row) {
//                         table_plot += "<tr>";

//                         columns.forEach(function(column) {
//                             table_plot += "<td>" + row[column] + "</td>";
//                         });

//                         table_plot += "</tr>";
//                     });

//                     table_plot += "</tbody></table>";

//                     openTableInNewTab(table_plot);
//                 } else {
//                     alert("No data available.");
//                 }
//             },
//             error: function() {
//                 alert("AJAX request failed. Please try again later.");
//             }
//         });
//     }

//     function openTableInNewTab(table_plot) {
//         const newTab = window.open();
//         newTab.document.write(`
//             <!DOCTYPE html>
//             <html lang="en">
//             <head>
//                 <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                 <link rel="stylesheet" href="${static_url}">
//                 <title>Plot table </title>
//             </head>
//             <body>
//                 <h1> Plot Table </h1>
//                 ${table_plot}
//             </body>
//             </html>
//         `);
//         newTab.document.close();
//     }
// });


$(document).ready(function() {

    // Define the update_plot_type function globally
    window.update_plot_type = function(plot_index) {
        {% for plot_key, plot_value in content.plot_data.items %}
        if ({{ forloop.counter0}} === plot_index) {
            (function() {
                var select_plot_type = document.getElementById('plot_type_' + plot_index).value;
                var chart_container_id = 'chart' + plot_index;
                var chartDom = document.getElementById(chart_container_id);
                var plots = echarts.init(chartDom);

                var plot_title = "{{ plot_value.plot_title }}";
                var x_name = "{{ plot_value.x_name }}";
                var y_name = "{{ plot_value.y_name }}";
                var x_data = {{ plot_value.x_data|safe }};
                var y_data = {{ plot_value.y_data|safe }};

                var option = {
                    title: {
                        text: plot_title,
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { type: 'cross' }
                    },
                    xAxis: {
                        type: 'category',
                        data: x_data,
                        name: x_name
                    },
                    yAxis: {
                        type: 'value',
                        name: y_name
                    },
                    legend: {
                        top: '0%',
                        right: '0%',
                        orient: 'vertical',
                        textStyle: {
                            fontSize: 8,
                        },
                    },
                    series: [{
                        data: y_data,
                        type: select_plot_type,
                        name: 'scale'
                    }]
                };

                if (select_plot_type === 'pie') {
                    option.series[0].type = 'pie';
                    option.series[0].radius = '55%';

                    option.series[0].data = x_data.map(function(item, index) {
                        return { value: y_data[index], name: item };
                    });

                    option.tooltip.trigger = 'item';
                    option.tooltip.formatter = '{b}: {c} ({d}%)';

                    option.series[0].label = {
                        show: true,
                        formatter: '{b}: {d}%'
                    };
                }

                plots.setOption(option);
            })();
        }
        {% endfor %}
    };

    window.onload = function() {
        {% for plot_key, plot_value in content.plot_data.items %}
            update_plot_type({{ forloop.counter0 }});
        {% endfor %}
    };

});
