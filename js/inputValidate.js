window.onload = function () {
    var appPortafolio = {}; 
    appPortafolio.administrador = function () {

        return {
            validar: function(){
            var name = document.getElementById("nombre-contacteme").value;
            console.log(name);
                if ( name  == "" ) {
                    document.getElementById("resultado").innerHTML = "Contenido incorrecto";
                    console.log(name);
                }
            },           
        }

        try{
   document.getElementById("button-send").onclick= function(){
        appPortfolio.administrador.validar();
    }  
}
    }(); 
    appPortafolio.administrador.active();
}