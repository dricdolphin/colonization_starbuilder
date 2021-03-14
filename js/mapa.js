var data_externa = [
	[0, 0, 'Estrela', 'point { size: 1; fill-color: white; }', 'Estrela (0,0,0) \n Branca']
];
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	let dim_X = document.getElementById("dim_X").value;
	let dim_Y = document.getElementById("dim_Y").value;
	
	let data_array = [
		['', '', {role: 'annotation'}, {role: 'style'}, {role: 'tooltip'}]
	];

	data_externa.forEach(element => {
		data_array.push(element);
	});

	
	var data = google.visualization.arrayToDataTable(data_array);
	
	
	var options = {
		title: 'Posição das estrelas',
		titleTextStyle: { color: '#DDD' },
		hAxis: {minValue: 0, maxValue: dim_X, textStyle:{color: '#DDD'}, titleTextStyle:{color: '#DDD'}},
        vAxis: {direction: -1, minValue: 0, maxValue: dim_Y, textStyle:{color: '#DDD'}, titleTextStyle:{color: '#DDD'}},
        chartArea: {'width': '90%', 'height': '90%'},
		backgroundColor: '#000',
		explorer: { actions: ['dragToZoom', 'rightClickToReset'] }
    };

    var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
		chart.draw(data, options);
}