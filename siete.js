/*Maria F 15
  Jose  M 33
  Fer   F 25
  sexo validacion por f o m , edad validacion: no puede ser menos a cero ni mayor a 100*/


function mostrar()
{
    var nombre;
    var sexo;
    var edad;
    var contador=0
    var mujeres;
    var varones;
    var mayores;
    var menores;

    while(contador<3)
    {
        nombre=prompt("ingrese nombre");
        sexo=prompt("ingrese sexo");
        while(sexo!="f" && !="m")
        {
        	sexo=prompt("error, ingrese un sexo");
        }
    
        edad=prompt("ingrese la edad");
        edad=parseint(edad);
        while(isNaN(edad)||edad>100||edad<0)
        {
            edad=prompt("edad inválida");
            edad=parseint(edad);
        }

        contador++;

        if()
    }
        







    document.write;




    	
    







}
