import { buscarDados } from './api.js';
import { mostrarCard } from './ui.js';
import { criarFormulario } from './form.js';

async function carregarDados({ nome, status }) {
    try {
        const dadosExternos = await buscarDados(nome, status);
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = ''; // Limpa os resultados anteriores
        mostrarCard(appContainer, dadosExternos);

        // Aplica o desfoque à camada de fundo
        document.querySelector('.background-layer').style.filter = 'blur(8px)';
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

function init() {
    const appContainer = document.getElementById('app');

    // Cria e adiciona o formulário à página
    const form = criarFormulario(carregarDados);
    document.body.insertBefore(form, appContainer);

    // Remove o desfoque da camada de fundo ao carregar a página
    document.querySelector('.background-layer').style.filter = 'none';
}

init();



/* Aqui são importadas as funções buscarDados e mostrarCard 

    Logos após isso é criada a função assíncrona init()
    
    Ela cria duas variáveis, dadosExternos que diz respeito a um await (faz com que uma função assíncrona seja pausda para esperar o retorno da Promise) para a função bsucarDados
    
    E também a variável appContainer que pega a div app da Index
    
    Após isso a função mostrarCard é usada com as duas variáveis como parâmetro
    
    Depois o catche é utilizado para caso haja algume rro para encontrar os dados
    
    Por fim a função é executada*/