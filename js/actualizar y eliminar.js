
function confirmActualizar(){
    var id = document.getElementById("id");
    var nombre = document.getElementById("nombre");
    var cantidad = document.getElementById("cantidad");
    var precio = document.getElementById("precio");
    var descripcion = document.getElementById("descripcion");

    if(id.value != "" && cantidad.value != "" && precio.value != "" && descripcion.value != "" && nombre.value !=""){
        confirm("Confirme que desea actualizar")
        alert("Se ha actualizado")
        console.log(nombre.value);
    }
    else{
        window.alert("Debe llenar todos los campos");
    }  

}
function confirmEliminar(){

        confirm("Confirme que desea eliminar")
        alert("Se ha eliminado")
}
