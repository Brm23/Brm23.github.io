$(document).ready(function(){
		$.ajax({
				type: "GET",
				url: 'js/trabajos.json',
				dataType: "json",
		   		success:function(data){
					mostrarTrabajos(data.trabajos);
					console.log(data);
							
				},
				error:function(jqXHR, textStatus, errorThrown) {
					console.log("Text Status:" + textStatus + "\nError:" +errorThrown);
				}
		});

		function mostrarTrabajos(lista){
			var content = "";
			for (var i = 0; i < lista.length; i++){
				content += '<div class="work-items">' +
			'<a class="works-link" target="_blank" href="' + lista[i].enlace + '">' +
			'<img class="work-img" src='+ lista[i].img + '>' + '</a>' +
			'<h4 class="titles-works">' + lista[i].nombre + '</h4>' +
			'<p class="category-works">' + lista[i].category + '</p>' +
			'<p class="description-works">' + lista[i].description + '</p>' +
			'</div>'
			}
			document.getElementById("works-container").innerHTML = content;
		}	
});

