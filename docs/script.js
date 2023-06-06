const textArea = document.querySelector(".input-padron");
const mensaje = document.querySelector(".text-encriptado");

function btnEncriptar(){

	const textoEncriptado = encriptar(textArea.value)
	mensaje.value = textoEncriptado
	textArea.value = "";
	mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){

	const textoEncriptado = desencriptar(textArea.value)
	mensaje.value = textoEncriptado
	textArea.value = "";
	
}


const mapaEncriptacion = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
};

function encriptar(stringEncriptado) {
  const letras = stringEncriptado.toLowerCase().split("");
  const resultado = letras.map(letra => {
    return mapaEncriptacion[letra] || letra;
  });
  return resultado.join("");
}

function desencriptar(stringDesencriptado) {
	
	let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];

	stringDesencriptado = stringDesencriptado.toLowerCase()

	for (let i = 0; i < matrizCodigo.length; i++) {
	if (stringDesencriptado.includes(matrizCodigo[i][1])){

		stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

	}

	}
	return stringDesencriptado;

}

function btnCopiar() {
  const mensaje = document.querySelector(".text-encriptado");
  mensaje.select();
  document.execCommand("copy");
}