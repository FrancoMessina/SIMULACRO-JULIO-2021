/*
Franco Messina, Div H
Ejercicio 3
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la 
población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar()
{
	let nombre;
	let edad;
	let genero;
	let vacuna;
	let temperatura;
	let seguir;
	let mayorTemperatura;
	let vacunaMayorTemperatura;
	let nombreMayorTemperatura;
	let banderaMayorTemperatura;
	let contadorFemSputnik;
	let contadorNB;
	let contadorAstraTemperatura;
	let contadorPromedioEdadH;
	let totalEdades;
	let promedioEdadHombres;
	
	totalEdades = 0;
	contadorPromedioEdadH = 0;
	contadorAstraTemperatura = 0;
	contadorNB = 0;
	contadorFemSputnik = 0;
	banderaMayorTemperatura = true;
	seguir = true;
	while(seguir == true)
	{
		nombre = prompt("Ingresa tu nombre");
		while(!(isNaN(nombre)))
		{
			nombre = prompt("Error.Ingresa tu nombre correcto");
		}
		edad = prompt("Ingresa tu edad");
		edad = parseInt(edad);
		while(edad < 0 || isNaN(edad))
		{
			edad = prompt("Error.Ingresa tu edad correcto");
			edad = parseInt(edad);
		}
		genero = prompt("Ingresa tu genero");
		while(genero != "F" && genero != "M" && genero != "NB")
		{
			genero = prompt("Error. Ingresa tu genero, F/M/NB");
		}
		vacuna = prompt("Ingresa la vacuna ");
		while(vacuna !="SputnikV" && vacuna != "AstraZeneca" && vacuna != "Otra")
		{
			vacuna = prompt("Error. Ingresa la vacuna SputnikV, AstraZeneca u Escribi Otra ");
		}
		temperatura = parseInt(temperatura);
		while(temperatura < 0 || isNaN(temperatura))
		{
			temperatura = prompt("Error.Ingresa tu temperatura correcta");
			temperatura = parseInt(temperatura);
		}


		// a) El nombre y vacuna de la persona con mayor temperatura.
		if(mayorTemperatura > temperatura || banderaMayorTemperatura == true)
		{
			nombreMayorTemperatura = nombre;
			vacunaMayorTemperatura = vacuna;
			banderaMayorTemperatura = false;
		}
		// b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
		if(genero == "F" && vacuna == "SputnikV")
		{
			contadorFemSputnik++;
			

		}
		else// c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
		{
			if(genero == "NB" )
			{
				if(vacuna == "AstraZeneca" || vacuna == "Otra")
				{
					contadorNB++;
				}
			}
		} 
		// d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
		if(vacuna == "AstraZeneca" && temperatura > 38)
		{
			contadorAstraTemperatura++;
		}
		
		// e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
		if(genero == "M" && vacuna == "SputnikV" && temperatura < 38) 
		{
			totalEdades = totalEdades + edad;
			contadorPromedioEdadH++
		}


		seguir = confirm("Quieres ingresar datos de otra persona?")
	}

	// a) El nombre y vacuna de la persona con mayor temperatura.
	alert(`El nombre y la vacuna de la persona con mayor temperatura es: ${nombreMayorTemperatura} y la vacuna es: ${vacunaMayorTemperatura} `);
	// b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
	alert(`Las personas de género Fem que recibieron la vacuna SputnikV son: ${contadorFemSputnik}`);
	// c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
	alert("La cantidad de personas de gé´nero No Binario que recibieron astra u otra  son: " + contadorNB);
	// d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
	alert("Las personas que se aplicaron la vacuna astraZeneca y presentaron temp mayor a 38 son :" +contadorAstraTemperatura++ );
	// e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
	promedioEdadHombres = totalEdades / contadorPromedioEdadH;
	alert("El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre es: " + promedioEdadHombres );


}
