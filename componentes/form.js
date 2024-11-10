export function criarFormulario(onSubmit) {
    const form = document.createElement('form');

    const nomeInput = document.createElement('input');
    nomeInput.type = 'text';
    nomeInput.placeholder = 'Nome';
    nomeInput.id = 'nome';

    const statusInput = document.createElement('input');
    statusInput.type = 'text';
    statusInput.placeholder = 'Status (alive, dead, unknown)';
    statusInput.id = 'status';

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Buscar';

    form.appendChild(nomeInput);
    form.appendChild(statusInput);
    form.appendChild(submitButton);

    // Adiciona um evento de clique para capturar o envio do formulário
    submitButton.addEventListener('click', () => {
        const nome = nomeInput.value;
        const status = statusInput.value;
        onSubmit({ nome, status });
    });

    return form;
}
