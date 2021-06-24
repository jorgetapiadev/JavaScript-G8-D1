// Ingreso de variables
const n1 = +prompt("Ingrese el primer número (mayor que 0): ");

const n2 = +prompt("Ingrese el segundo número (mayor que 0): ");

// cálculo de suma
const suma = n1 + n2;

// Cálculo de resta
const resta = n1 - n2;

// Cálculo de multiplicación
const multiplicacion = n1 * n2;

// Cálculo de división
const division = n1 / n2;

// valida los datos
// verificar que n1 cumpla el requisito >0
if (n1 <= 0 || n2 <= 0) {
  alert("Error ");
} else {
  // si los datos son válidos  ejecuta
  alert(
    "Suma: " +
      suma +
      " Resta: " +
      resta +
      " Multiplicacion: " +
      multiplicacion +
      " Division: " +
      division
  );
}
//Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit.

tempcelsius = +prompt("Ingrese la temperatura en celsius: ");

tempkelvin = tempcelsius + 273.15;

tempfahr = tempcelsius * (9 / 5) + 32;

alert(
  " Temperatura Kelvin :" +
    tempkelvin +
    "K" +
    " Temperatura Fahrenheit :" +
    tempfahr +
    "° F"
);

//Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el resultado debe ser 1 año, 1 semana y 1 día

const dias = +prompt("Número de días: ");

const years = Math.floor(dias / 365);
const dias_sobrantes = dias % 365;
const semanas = Math.floor(dias_sobrantes / 7);
const diasResultado = dias_sobrantes % 7;

alert(`
Años: ${years}
Semanas: ${semanas}
Dias: ${dias}
`);
