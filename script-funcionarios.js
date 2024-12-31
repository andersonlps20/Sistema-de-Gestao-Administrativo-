let funcionarios = [];
let matriculaAtual = 1; // Início das matrículas automáticas

// Função para abrir o modal de cadastro
function novoCadastro() {
    document.getElementById("modal-cadastro").style.display = "flex";
    gerarMatricula();
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("modal-cadastro").style.display = "none";
}

// Função para gerar matrícula automática
function gerarMatricula() {
    document.getElementById("matricula").value = matriculaAtual;
}

// Função para adicionar um novo funcionário
function adicionarFuncionario() {
    const matricula = document.getElementById("matricula").value;
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const endereco = document.getElementById("endereco").value;
    const cep = document.getElementById("cep").value;
    const dataContratacao = document.getElementById("dataContratacao").value;
    const salario = document.getElementById("salario").value;
    const beneficios = document.getElementById("beneficios").value;

    if (nome && dataNascimento && endereco && cep && dataContratacao && salario && beneficios) {
        funcionarios.push({
            matricula,
            nome,
            dataNascimento,
            endereco,
            cep,
            dataContratacao,
            salario,
            beneficios
        });
        matriculaAtual++; // Incrementa a matrícula automaticamente
        atualizarTabela();
        fecharModal();
        limparCampos();
    } else {
        alert("Preencha todos os campos.");

    }
}




// Função para limpar os campos do modal
function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("dataNascimento").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("dataContratacao").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("beneficios").value = "";
}

// Função para atualizar a tabela de funcionários
function atualizarTabela() {
    const tbody = document.querySelector("#tabela-funcionarios tbody");
    tbody.innerHTML = "";

    funcionarios.forEach(funcionario => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${funcionario.matricula}</td>
            <td>${funcionario.nome}</td>
            <td>${funcionario.dataNascimento}</td>
            <td>${funcionario.endereco}</td>
            <td>${funcionario.cep}</td>
            <td>${funcionario.dataContratacao}</td>
            <td>R$ ${parseFloat(funcionario.salario).toFixed(2)}</td>
            <td>${funcionario.beneficios}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Função para excluir um funcionário (último cadastrado)
function excluirFuncionario() {
    if (funcionarios.length > 0) {
        funcionarios.pop();
        atualizarTabela();
    } else {
        alert("Não há funcionários para excluir.");
    }
}

// Função para consultar um funcionário (filtrar por nome)
function consultarFuncionario() {
    const nome = prompt("Digite o nome do funcionário que deseja consultar:");
    
    if (nome) {
        const resultado = funcionarios.filter(f => f.nome.toLowerCase().includes(nome.toLowerCase()));
        
        if (resultado.length > 0) {
            const tbody = document.querySelector("#tabela-funcionarios tbody");
            tbody.innerHTML = "";

            resultado.forEach(funcionario => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${funcionario.matricula}</td>
                    <td>${funcionario.nome}</td>
                    <td>${funcionario.dataNascimento}</td>
                    <td>${funcionario.endereco}</td>
                    <td>${funcionario.cep}</td>
                    <td>${funcionario.dataContratacao}</td>
                    <td>R$ ${parseFloat(funcionario.salario).toFixed(2)}</td>
                    <td>${funcionario.beneficios}</td>
                `;
                tbody.appendChild(tr);
            });
        } else {
            alert("Funcionário não encontrado.");
        }
    } else {
        alert("Nome não informado.");
    }
}

// Função para buscar CEP (simples, usando uma API pública)
function buscarCEP() {
    const cep = document.getElementById("cep").value;

    // Se o CEP for válido
    if (cep.length === 8) {
        // Simulação de busca (substitua por uma API de CEP se necessário)
        alert("Buscando CEP...");
    } else {
        alert("CEP inválido. Verifique o número.");
    }
}


// Download Excel
document.getElementById('downloadExcel').addEventListener('click', function () {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Nome,Enderço,Salário\n";
    products.forEach(product => {
        csvContent += `${product.name},${product.quantity},${product.price}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "relatorio_estoque.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
