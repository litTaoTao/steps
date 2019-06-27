function setOption(jsonDate) {
	jsonDate.selector ? jsonDate.selector : '';
	jsonDate.type ? jsonDate.type : 'line';
	var myChart = echarts.init(document.getElementById(jsonDate.selector));
	let xy = {
		xAxis: {
			data: []
		},
		yAxis: {
			type: 'value'
		}
	};
	let Option = {
		legend: {},
		series: [{
			//name: '销量',
			type: jsonDate.type,
			data: []
		}]
	};
	if(jsonDate.type==='line'){
		Option=Object.assign(Option,xy)
	}
	// 显示标题，图例和空的坐标轴
	myChart.setOption(Option);
	if (jsonDate.callback) {
		jsonDate.callback(myChart)
	}
}
