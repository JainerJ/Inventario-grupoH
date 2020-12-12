function buscar_articulo (){
    var nombre_articulo = document.getElementById("nombre_articulo");
    var comprobador = 0;
    for(x in nombre_articulo.value){
        if (nombre_articulo.value[x] != " "){ 
            comprobador++;
        }
    }
    if(nombre_articulo.value!="" && comprobador >=1){
        document.getElementById("demo").innerHTML = "Estas buscando: " + nombre_articulo.value;
        location.href = "contenido.html";
    }
    else{
        window.alert("Debe ingresar un valor");
    }  
}

function regresar_inicio(){
    location.href = "index.html";
}
