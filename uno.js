/*Franco,Messina Div H
Ejercicio Parcial 1 
Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{
	let contador; //Vuelta por producto
   let producto;//Producto comprado
   let precio;//Precio por producto ingresado
   let unidades;//Unidades solicitadas 
   let marca; //Marca del producto
   let capacidad;//Capacidad del producto
   let minimoSSD; //Minimo de los SSD
   let banderaMinimoSSD;//Bandera para ingresa al minimo de SSD
   let precioFinal;//Precio final precio * unidad
   let marcaMinimo;//Marca del minimo
   let unidadesMinimo;//Unidades del minimo 
   let mayorPrecioHDD;//Mayor precio de HDD
   let mayorCapacidad;// capacidad de alacenamiento de HDD del precio maximo
   let mayorCantidad;// cantidad de unidades del precio maximo
   let banderaMaximoHDD;//Bandera maximo HDD
   let contadorHDD;//Contador de unidades de HDD

   banderaMaximoHDD = true;
   banderaMinimoSSD = true;
   contadorHDD = 0;
   contador = 0;
   while (contador < 5)
   {
      producto = prompt("Quieres comprar un HDD, SSD, O SSDM2");
      while(producto != "HDD" && producto != "SSD" && producto != "SSDM2")
      {
         producto = prompt("Error. Solo podes ingresar letras. Quieres comprar un HDD, SSD, O SSDM2");  
      }
      precio = prompt("Ingresa el precio del producto");
      precio = parseFloat(precio);
      while(isNaN(precio) || precio <5000 || precio > 18000)
      {
         precio = prompt("Error. Tienes que ingresar el precio del producto en número."); 
         precio = parseFloat(precio); 
      }
      unidades = prompt("Ingresa las unidades del producto");
      unidades = parseInt(unidades);
      while(isNaN(unidades) || unidades <0|| unidades > 50)
      {
         unidades = prompt("Error. Solo puede comprar hasta 50 unidades"); 
         unidades = parseInt(unidades); 
      }
      marca = prompt("Ingresa la marca del producto");
      while(marca != "Seagate" && marca != "Western Digital" && marca !=  "Kingston")
      {
         marca = prompt("Error.Ingresar marca validas “Seagate”, “Western Digital”, “Kingston”");  
      }
      capacidad = prompt("Ingresar la capacidad de gb o tb");
      while (capacidad != "250Gb" && capacidad != "500Gb" && capacidad != "1Tb" && capacidad !="2Tb")
      {
         capacidad = prompt("Error. Ingresar la capacidad correcta de gb o tb");
      }
      // a) Del más barato de los SSD, la cantidad de unidades y marca.
      precioFinal = unidades * precio;
      
      if (producto == "SSD")
      {
         if(precioFinal < minimoSSD || banderaMinimoSSD == true)
         {
            minimoSSD = precioFinal;
            marcaMinimo = marca;
            unidadesMinimo = unidades;
            banderaMinimoSSD = false;
         }
      }
      else
      {
         //    b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
         //    disponibles. 
         if(producto == "HDD")
         {
            if(precioFinal > mayorPrecioHDD || banderaMaximoHDD == true)
            {
               mayorPrecioHDD = precioFinal;
               mayorCapacidad = capacidad;
               mayorCantidad = unidades;
               banderaMaximoHDD = false;
            }
            // c) Cuántas unidades de HDD hay en total.*/
            contadorHDD = contadorHDD + unidades;
         }
      }
      
      contador++;
   }
   alert(`El más barato de los SSD es de la marca: ${marcaMinimo} y contiene ${unidadesMinimo} unidades.`);
   alert(`El tipo de HDD con mayor precio contiene de capacidad de almacenamiento: ${mayorCapacidad} y ${mayorCantidad} de unidades disponibles`);
   alert(`De unidades HDD hay en total ${contadorHDD}`)
}
