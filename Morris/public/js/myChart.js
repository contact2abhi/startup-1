var MyMorris = function()
{
	this.Chart = {};
	this.element = '';
	this.data = [];
	this.labels = [];
	this.xKey = '';
	this.yKeys = [];
}

MyMorris.prototype.init = function()
{
	var ctrl = this;
	this.Chart = Morris.Area({
	  element: this.element,
	  data: ctrl.data,
	  xkey: ctrl.xKey,
	  ykeys: ctrl.yKeys,
	  labels: this.labels
	});
}

MyMorris.prototype.reset = function()
{
	var ctrl = this;
	this.Chart = Morris.Area({
	  element: this.element,
	  data: ctrl.data,
	  xkey: ctrl.xKey,
	  ykeys: ctrl.yKeys,
	  labels: this.labels
	});
}

MyMorris.prototype.setData = function(data){
	this.data = data;
	this.Chart.setData(data);
}
