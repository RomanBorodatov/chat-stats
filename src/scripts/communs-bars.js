fetch('all_m_data_adm_msgs001.json')
	.then(function(resp) { return resp.json(); })
	.then(function(result) {
		ctx = document.getElementById('sixthChart');
		data = Object.values(result[0]);
		labels = Object.keys(data[0]).reverse();
		backgroundColors = [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)',
        	'rgba(255, 159, 64, 0.2)'
        ];
		borderColors = [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
		];
		counter = 0;

		datasets = result.map( function(dataset) {
			a = Object.values(Object.values(dataset)[0]).reverse();
			backgroundColor = backgroundColors[counter];
			borderColor = borderColors[counter];
			counter++;
			return {
				label: Object.keys(dataset)[0],
				data: a,
				borderWidth: 2,
				backgroundColor: backgroundColor,
				borderColor: borderColor,
			}
		});
		console.log(counter)

		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: datasets, 
			},
			options: {
				responsive: true,
			}
		});

	}); 

fetch('all_m_data_adm_replies001.json')
	.then(function(resp) { return resp.json(); })
	.then(function(result) {
		ctx = document.getElementById('seventhChart');
		data = Object.values(result[0]);
		labels = Object.keys(data[0]).reverse();
		backgroundColors = [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(153, 102, 255, 0.2)',
        	'rgba(255, 159, 64, 0.2)'
        ];
		borderColors = [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
		];
		counter = 0;

		datasets = result.map( function(dataset) {
			a = Object.values(Object.values(dataset)[0]).reverse();
			backgroundColor = backgroundColors[counter];
			borderColor = borderColors[counter];
			counter++;
			return {
				label: Object.keys(dataset)[0],
				data: a,
				borderWidth: 2,
				backgroundColor: backgroundColor,
				borderColor: borderColor,
			}
		});
		console.log(counter)

		new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: datasets, 
			},
			options: {
				responsive: true,
			}
		});

	}); 