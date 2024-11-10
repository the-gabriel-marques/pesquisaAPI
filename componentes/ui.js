import criarCard from './card.js'

export function mostrarCard(container, dados) {
    dados.results.forEach(item=> {
        const card = criarCard(item);
        container.appendChild(card);
    });
}

/* Aqui é importada a função mostraCard() utilizando dois parâmetros o container e o dados

    Ele lê os resultados de dados e faz o forEach deles
    
    Criando assim uma variável chamada card que utiliza da funcção criarCard para criar um card para cada item utilizado no forEach
    
    após isso, esse novo card é adicionado ao container*/