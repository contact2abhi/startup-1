$(document).ready(function(){
	console.log('ready');
	var chart = new MyMorris();
	chart.data =  [
	    { y: '2006', a: 100, b: 90 },
	    { y: '2007', a: 75,  b: 65 },
	    { y: '2008', a: 50,  b: 40 },
	    { y: '2009', a: 75,  b: 65 },
	    { y: '2010', a: 50,  b: 40 },
	    { y: '2011', a: 75,  b: 65 },
	    { y: '2012', a: 100, b: 90 }
	  ];
	chart.element = 'line-example';
	chart.xKey = 'y';
	chart.yKeys = ['a', 'b'];
	chart.labels = ['Series A', 'Series B'];
	chart.init();	
	var add = true;
	setInterval(function(){
		var data = chart.data;
		var sData = data[data.length - 1];		
		console.log(data);
		var cData = {
			y: parseInt(sData.y) + 1 + '',
			a: add ? parseInt(sData.a) + 10 : parseInt(sData.a) - 10,
			b: add ? parseInt(sData.b) + 10 : parseInt(sData.b) - 10
		};
		add = !add;
		data.push(cData);
		data = data.slice(1,data.length);
		chart.setData(data);
	},1000);
	
});