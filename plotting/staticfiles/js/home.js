(function(){

            var select_plot_type = document.getElementById('plot_type_'+ plot_index).value;

            var chart_container_id = 'chart'+ plot_index;

            var chartDom = document.getElementById(chart_container_id);
            var plots = echarts.init(chartDom);
            
            var plot_title = "{{ plot_value.plot_title }}";
            var x_name     = "{{ plot_value.x_name }}";
            var y_name     = "{{ plot_value.y_name }}";
            var x_data     = {{ plot_value.x_data|safe }};
            var y_data     = {{ plot_value.y_data|safe }};

            var option = {

                title: {
                    text: plot_title,
                },

                tooltip:{
                    trigger: 'axis',
                    axisPointer: {type: 'cross'}
                },

                xAxis: {
                    type:'category',
                    data: x_data,
                    name: x_name
                },

                yAxis: {
                    type: 'value',
                    name: y_name
                },

                legend: {
                    top: '0%',
                    right:'0%',
                    orient: 'vertical',
                    textStyle:{
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
                
                option.series[0].type   = 'pie';
                option.series[0].radius = '55%';

                option.series[0].data = x_data.map(function (item, index) {

                    return { value: y_data[index], name: item };

                });

                option.tooltip.trigger = 'item';
                option.tooltip.formatter = '{b}: {c} ({d}%)';
            
                option.series[0].label = {
                    show: true,
                    formatter: '{b}: {d}%'
                };
            
            }

            else {
                option.tooltip.trigger = 'axis';
                option.tooltip.formatter = function (params) {
                   
                    var tool_tip_content = params[0].name + '<br/>';
                    params.forEach(function (param) {
                        tool_tip_content += param.seriesName + ': ' + param.value + '<br/>';
                    });
                    return tool_tip_content;
                };
            }

            plots.setOption(option)

})();
   