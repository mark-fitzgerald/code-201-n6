var ImageOption = function (source, name) {
	this.source = source;
	this.label = name;
	this.y = Math.floor(Math.random() * 10);
}

var images = [];
images.push(new ImageOption("bag.jpg", "Bag"));
images.push(new ImageOption("banana.jpg", "Banana"));
images.push(new ImageOption("boots.jpg", "Boots"));
images.push(new ImageOption("chair.jpg", "Chair"));
images.push(new ImageOption("dragon.jpg", "Dragon"));
images.push(new ImageOption("sweep.jpg", "Sweeper"));

window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{
		animationEnabled: true,
		theme: "theme1",
		//exportEnabled: true,
		title:{
			text: "Vote Tracking Results"
		},
		data: [
			{
				type: "column", //change type to bar, line, area, pie, etc
				dataPoints: images
			}
		]
	});

	chart.render();
}
