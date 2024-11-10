export async function buscarDados(nome = '', status = '') {
    const url = `https://rickandmortyapi.com/api/character/?name=${nome}&status=${status}`;
    console.log(url); // Adicione esta linha para ver a URL no console
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Sem rede');
    }
    return response.json();
}



/* Aqui é criada a função assíncrona buscarDados() 

    Dentro dela é criada a variável response que usa um await para dar um fetch na API do rick and morty
    
    Depois é fornecida a URL da API
    
    E então se a função rsponse for diferente (!) de ok
    
    Ela cria um erro
    
    Casa ela seja executada com sucesso ela é retornada utilizando um json (que permite quue o programa constinue sendo executado, por meio de uma Promise, enquanto os textos da API são convertidos em objetos*/