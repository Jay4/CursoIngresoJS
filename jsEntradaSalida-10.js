/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var nombre;
	var localidad;

    nombre=document.getElementById('elNombre').value
    localidad=document.getElementById('laLocalidad').value

    alert("usted es" + nombre + "y vive en la localidad de" + localidad);
}
