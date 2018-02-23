fetch('messages.json')
	.then((resp) => resp.json())
	.then(function(result) {
		let messagesInfo = result;
		for (let key in messagesInfo) {
			let source = messagesInfo[key];
			for (let key in source) {
				let final = source[key];
				let a = key;
				for (let key in final) {

					function isInteger(num) {
  						return (num ^ 0) === num;
					}

					if (typeof final[key] == 'number' && !isInteger(final[key])){
						final[key] = `${final[key].toFixed(3)}%`;
					}
					document.getElementById(`${a}_${key}`).innerHTML = final[key];
				}
			}
		}
	})

fetch('users_amount.json')
	.then(function(resp) { return resp.json(); })
	.then(function(result) {
		usersAmount = result.amount_of_users;
		for(let key in usersAmount) {
			document.getElementById(`users_amount_${key}`).innerHTML = usersAmount[key];
		}

		usersGrowth = result.growth_of_users;
		for(let key in usersGrowth) {
			document.getElementById(`growth_of_users_${key}`).innerHTML = usersGrowth[key];
		}

		usersGrowthPercents = result.growth_of_users_percents;
		for(let key in usersGrowthPercents) {
			if (typeof usersGrowthPercents[key] == 'number'){
				if (usersGrowthPercents[key] > 0) {
					document.getElementById(`growth_of_users_percents_${key}`).classList.add('text-green')
				}
				usersGrowthPercents[key] = `${usersGrowthPercents[key].toFixed(3)}%`
			}
			document.getElementById(`growth_of_users_percents_${key}`).innerHTML = usersGrowthPercents[key];
		}
	})

fetch('count_msgs_30_days.json')
	.then(function(resp) { return resp.json(); })
	.then(function(result) {
		days = Object.keys(result);
		data = Object.values(result);
		ctx = document.getElementById('firstChart');
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: days,
				datasets: [{
					label: '# of messages',
					data: data,
					backgroundColor: 'rgba(54, 162, 235, 0.2)',
					borderColor: 'rgba(54, 162, 235, 1)',
					borderWidth: 1,
				}], 
			},
			options: {
				responsive: true,
			}
		})
	})
