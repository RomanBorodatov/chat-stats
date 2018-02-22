fetch('/messages.json')
	.then((resp) => resp.json())
	.then(function(result) {
		console.log(result)
		data = JSON.parse(result)
		console.log(data)
	})