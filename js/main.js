$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: 'js/trabajos.json',
		dataType: "json",
   		success:function(data){
			mostrarTrabajos(data.works);
			console.log(data);
					
		},
		error:function(jqXHR, textStatus, errorThrown) {
			console.log("Text Status:" + textStatus + "\nError:" +errorThrown);
		}
	});

	function mostrarTrabajos(lista){
		var showWorks = "";
		for (var i = 0; i < lista.length; i++){
			
		}
		document.getElementById("").innerHTML = showWorks;
	}	


});

