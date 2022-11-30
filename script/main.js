function escrita(elemento) {
    const texto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    texto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 150 * i)
    }) 
}


const titulo = document.querySelector('h1')
escrita(titulo)