let contador = 0;

const intervalo = setInterval(() => {
  console.log("Contador:", contador);
  contador++;

  if (contador > 5) clearInterval(intervalo);
}, 1000);
