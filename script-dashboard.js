document.addEventListener('DOMContentLoaded', function () {
    // Função para alternar entre seções
    window.showSection = function (sectionId) {
        document.querySelectorAll('.section').forEach(function (section) {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    };

    // Gráfico de Contas a Pagar
    var ctx1 = document.getElementById('graficoContasPagar').getContext('2d');
    var graficoContasPagar = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
            datasets: [{
                label: 'Contas a Pagar (R$)',
                data: [1200, 1500, 800, 1800, 1700],
                backgroundColor: 'blue',
                borderColor: 'red',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Folha Salarial
    var ctx2 = document.getElementById('graficoFolhaSalarial').getContext('2d');
    var graficoFolhaSalarial = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Salários', 'Benefícios', 'Impostos'],
            datasets: [{
                label: 'Folha Salarial (R$)',
                data: [5000, 1500, 1200],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Gráfico de Lançamento de Recurso
    var ctx3 = document.getElementById('graficoLancamentoRecurso').getContext('2d');
    var graficoLancamentoRecurso = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
            datasets: [{
                label: 'Lançamento de Recurso (R$)',
                data: [2000, 2500, 1800, 2200, 2400],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
