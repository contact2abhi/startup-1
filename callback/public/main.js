var urls = ['rest/getdays' , 'rest/getmonths', 'rest/getyears'];

$(document).ready(function(){
	var ctrl = $('#date');	
	getData(0);
});

function getData(index)
{
	console.log('called for index - ' + index);
	$.ajax({
		url: urls[index++],
		success: function(data){
			CreateCtrl(data);
			if(index < urls.length){
				getData(index);
			}
			else
			{
				var day = new Date().getDate();
				var month = new Date().getMonth() + 1;
				var year = new Date().getFullYear();
				var values = [];
				values.push(day);
				values.push(month);
				values.push(year);
				console.log(day + '/' + month + '/' + year);
				var ctrl = $('#date');
				var childrens = $(ctrl).find('select');
				values.map(function(item, i){
					console.log('index:' + i + ' item:' + item);
					$(childrens[i]).val(item);
				});
			}
		}
	});	
}

function CreateCtrl(data)
{
	var cd = $('<select />');
	data.map(function(item, i){
		$(cd).append($('<option />').text(item).val(item));
	});
	var ctrl = $('#date');
	ctrl.append(cd);
}