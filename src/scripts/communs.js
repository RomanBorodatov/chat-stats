fetch('all_messages_from_communities.json')
	.then(function(resp) { return resp.json(); })
	.then(function(result) {
		ctx = document.getElementById('fourthChart');
		data = Object.values(result);
		labels = Object.keys(data[0]).reverse();
		datasets = [];
		backgroundColors = [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
        	'rgba(255, 159, 64, 0.2)'
        ];
		borderColors = [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
		];
		counter = 0;

		for (key in result) {
			datasets.push({
				label: key,
				data: Object.values(result[key]).reverse(),
				backgroundColor: backgroundColors[counter],
				borderColor: borderColors[counter],
				borderWidth: 1,
			});
			counter++;
		};

		new Chart(ctx, {
			type: 'line',
			data: {
				labels: labels,
				datasets: datasets, 
			},
			options: {
				responsive: true,
			}
		});
	});