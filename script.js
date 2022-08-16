document.querySelector('#clique-aqui').onclick = () => {
    const nome = document.querySelector('#campo-nome').value;    
    if(nome) {
        alert(`Hello world, ${nome}!`);
    }
};

document.querySelector('#limpar').onclick = () => {
    document.querySelector('#campo-nome').value = '';
};