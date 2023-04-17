// Consigna

// Realizar un programa en js que reciba 3 frases por prompt, luego las filtrara por su largo y las guardara en un array segun las siguientes condiciones:

// Si la frase tiene menos de 20 caracteres, ira al array fraseCorta.
// Si la frase tiene mas de 20 caracteres, ira al array fraseLarga.
// Si la frase tiene mas de una oracion, ira al array fraseCompuesta.
// Todas las frases deben empezar por mayuscula y el resto esta en minusculas. Excepto si es una frase compuesta, debe estar toda en mayusculas.
// Mostrar el resultado de los 3 arrays por consola y ademas indicar cuando se filtra la frase en que array se guardara y porque.
// Adjuntar link al repo.

// const frase = prompt('Por favor ingrese una frase...')
const frase = "YENDO AL PARQUE. ASF";

const frase1 = prompt("Ingrese la frase N°1");
const frase2 = prompt("Ingrese la frase N°2");
const frase3 = prompt("Ingrese la frase N°3");

const arrayFrases = [frase1, frase2, frase3];

let fraseCorta = [];
let fraseLarga = [];
let fraseCompuesta = [];

for (let frase of arrayFrases) {
	const arrayOraciones = frase.split(". ");

	// Checkeo si es una frase compuesta
	if (arrayOraciones.length > 1) {
		console.log(`La frase ingresada "${frase}" ingresada es una compuesta`);
		// Verifico que todos los caracteres esten en mayusculas
		if (frase.toUpperCase() !== frase) {
			console.log(
				"Todos los caracteres de una frase compuesta deben ser en mayusculas"
			);
		}
		fraseCompuesta.push(frase);
	} else {
		// Control de capitalizacion de la primera letra
		if (frase[0].toUpperCase() !== frase[0]) {
			console.log(`La primera letra de ${frase} debe estar en mayusculas.`);
		}
		// Control del resto de caracteres en minusculas
		for (let i = 1; i < frase.length; i++) {
			if (frase[i].toLowerCase() !== frase[i]) {
				console.log(
					`El resto de letras de la frase "${frase}" deben estar en minusculas`
				);
				break;
			}
		}

		if (frase.length <= 20) {
			console.log(`La frase ingresada: "${frase}" es una frase corta`);
			fraseCorta.push(frase);
		} else {
			console.log(`La frase ingresada: "${frase}" es una frase larga`);
			fraseLarga.push(frase);
		}
	}
}
console.log(`El array de frases cortas es: [ ${fraseCorta} ].`);
console.log(`El de frases largas: [ ${fraseLarga} ].`);
console.log(`El de frase compuestas es:  [ ${fraseCompuesta} ]`);
