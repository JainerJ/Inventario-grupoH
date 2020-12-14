function buscar_articulo (){
    var nombre_articulo = document.getElementById("nombre_articulo");
    var comprobador = 0;
    for(x in nombre_articulo.value){
        if (nombre_articulo.value[x] != " "){ 
            comprobador++;
        }
    }
    if(nombre_articulo.value!="" && comprobador >=1){
        location.href = "contenido.html";
    }
    else{
        window.alert("Debe ingresar un valor");
    }  
}

function regresar_inicio(){
    location.href = "index.html";
}

function ir_registro(){
    location.href = "registro.html"
}
