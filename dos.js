/*
Franco, Messina Div H
Ejercicio 2 Parcial
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, 
hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
  let alimento;//Alimentos ingresado por el usuario
  let cantidadBolsas;//Cantidad de bolsas
  let precioBolsa;//Precio por bolsas
  let seguir; //Si el usuario quiere seguir comprando
  let bolsasYerba;//Bolsas de yerba
  let precioYerba;//Precio por unidad de yerba
  let totalYerba;//Total de yerba = precio * bolsas
  let bolsasAzucar;
  let precioAzucar;
  let totalAzucar;
  let bolsasCafe;
  let precioCafe;
  let totalCafe;
  let cantidadTotal;//Sumar todas las cantidades de bolsas
  let importeSinDescuento;//
  let importeConDescuento;
  let descuento;//Descuento obtenido
  let precioFinalConDescuento;
  let maximoCantidadBolsas;
  let tipoMaximo;//El tipo maximo de cantidad de bolsas
  let minimoPrecio;//EL precio minimo
  let banderaMinimo;//Bandera para ingresar a minimo
  let tipoMinimo;//El tipo de minimo;
  banderaMinimo = true;
  maximoCantidadBolsas = 0;
  precioFinalConDescuento = 0;
  descuento = 0;
  importeConDescuento = 0;
  importeSinDescuento = 0;
  cantidadTotal = 0;
  bolsasYerba = 0;
  precioYerba = 0;
  totalYerba = 0;
  bolsasAzucar = 0;
  precioazbolsasAzucar = 0;
  totalazbolsasAzucar = 0;
  bolsasCafe = 0;
  precioazbolsasCafe = 0;
  totalazbolsasCafe = 0;
  seguir = true;

  while(seguir == true)
  {
    // Tipo: (validar "Yerba", "Azúcar", "Café").
    alimento = prompt("Ingresa el alimento que deseas de: Yerba, Azúcar, Café");
    while(alimento != "Yerba" && alimento != "Azúcar" && alimento != "Café")
    {
      alimento = prompt("Error...Ingresa el alimento que deseas de: Yerba, Azúcar, Café");
    }
    cantidadBolsas = prompt("Ingresa la cantidad de bolsas");
    cantidadBolsas = parseInt(cantidadBolsas);
    while(cantidadBolsas > 0)
    {
      cantidadBolsas = prompt("Error...Solo puede ingresar un numero mayor a 0");
      cantidadBolsas = parseInt(cantidadBolsas);
    }
    precioBolsa = prompt("Ingresa la el precio por bolsa");
    precioBolsa = parseInt(precioBolsa);
    while(precioBolsa > 0)
    {
      precioBolsa = prompt("Error...Solo puede ingresar un numero mayor a 0");
      precioBolsa = parseInt(precioBolsa);
    }
    
    switch(alimento)
    {
      case "Yerba":
        bolsasYerba = bolsasYerba + cantidadBolsas;//Contador de bolsas
        precioYerba = precioBolsa * cantidadBolsas;//Multiplicar precio por unidad
        totalYerba = totalYerba + precioYerba; //Acumulador del total 
        // c)	Informar el tipo con más cantidad de bolsas.
        if(bolsasYerba>maximoCantidadBolsas)//Con este if averiguo el  maximod e cantidad de bolsas
        {
          maximoCantidadBolsas = bolsasYerba;
          tipoMaximo= alimento;

        }// d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
        if(totalYerba < minimoPrecio|| banderaMinimo == true)//Con este if averiguo el minimo de la compra más barata
        {
          minimoPrecio = totalYerba;
          tipoMinimo= alimento;
          banderaMinimo = false;
        }
      break;
      case "Azúcar":
        bolsasAzucar = bolsasAzucar + cantidadBolsas;//Contador de bolsas
        precioAzucar = precioBolsa * cantidadBolsas;//Multiplicar precio por unidad
        totalAzucar = totalAzucar + precioAzucar; //Acumulador del total 
        if(bolsasAzucar>maximoCantidadBolsas)//Con este if averiguo el  maximod e cantidad de bolsas
        {
          maximoCantidadBolsas = bolsasAzucar;
          tipoMinimo = alimento;
          banderaMinimo = false;
        }
        // d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
        if(totalAzucar < minimoPrecio|| banderaMinimo == true)//Con este if averiguo el minimo de la compra más barata
        {
          minimoPrecio = totalAzucar;
          tipoMinimo= alimento;
          banderaMinimo = false;
        }

      break;
      default:
        bolsasCafe = bolsasCafe + cantidadBolsas;
        precioCafe = precioBolsa * cantidadBolsas;
        totalCafe = totalCafe + precioCafe;
        if(bolsasCafe>maximoCantidadBolsas)//Con este if averiguo el  maximod e cantidad de bolsas
        {
          maximoCantidadBolsas = bolsasCafe;
          tipoMaximo = alimento;
        }
        // d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
        if(totalCafe < minimoPrecio|| banderaMinimo == true)//Con este if averiguo el minimo de la compra más barata
        {
          minimoPrecio = totalCafe;
          tipoMinimo= alimento;
          banderaMinimo = false;
        }
    
      break;
    }

    seguir = confirm("Queres seguir comprando?");
  }
  // Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
  // Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
  cantidadTotal = bolsasYerba + bolsasCafe + bolsasAzucar; //Cantidad total de bolsas
  if(cantidadTotal > 10)
  {
    descuento = 15;
  }
  else
  {
    if(cantidadTotal > 5)
    {
      descuento = 10;
    }
    else
    {
      descuento = 0;
    }
  }
  // a)	El importe total a pagar bruto, sin descuento.
  importeSinDescuento = totalCafe + totalYerba + totalAzucar;
  alert("El precio final sin descuento es: " + importeSinDescuento);
  // b)	El importe total a pagar con descuento (solo si corresponde)
  if(descuento == 0)//Si el descuento es 0 quiere decir que no contiene descuento por lo tanto es el imp sin desc.
  {
    alert("No contiene descuento por lo tanto el importe total es: " + importeSinDescuento);
  }
  else
  {
    //Si el descuento es distinto de  0 ya sabemos que lo obtuvo por lo tanto
    importeConDescuento = importeSinDescuento * descuento / 100;//Averiguo el descuento
    precioFinalConDescuento = importeSinDescuento - importeConDescuento;//Resto el importe sin descuento con el descuento 
    alert("El importe con descuento es: " + precioFinalConDescuento);//Y obtengo el precio final
  }
  // c)	Informar el tipo con más cantidad de bolsas.
  alert("El producto con más cantidad de bolsas es: " + tipoMaximo + " y contiene " + maximoCantidadBolsas + " bolsas en total");

  // d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
  alert("El tipo de compra más barato es: " + tipoMinimo + " y sale $ " + minimoPrecio);
}
