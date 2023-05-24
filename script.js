const btnCalcular = document.getElementById("calcular");
const inputProxFolga = document.getElementById("proximaFolga");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {
  // Obtém a data da primeira folga inserida pelo usuário
  const primeiraFolga = inputProxFolga.value;

  // Converte a string inserida pelo usuário em um objeto de data
  const dataFolga = new Date(primeiraFolga);

  // Cria um objeto para armazenar as datas de folga
  const datasFolga = {};

  // Adiciona a primeira data de folga
  const mes = dataFolga.toLocaleString('default', { month: 'long' });
  datasFolga[mes] = [new Date(primeiraFolga)];

  // Adiciona as demais datas de folga
  while (dataFolga.getFullYear() == new Date(primeiraFolga).getFullYear()) {
    dataFolga.setDate(dataFolga.getDate() + 6);
    const mes = dataFolga.toLocaleString('default', { month: 'long' });
    if (datasFolga[mes]) {
      datasFolga[mes].push(new Date(dataFolga));
    } else {
      datasFolga[mes] = [new Date(dataFolga)];
    }
  }

  // Exibe todas as datas de folga por mês em uma tabela
  let tabela = '<table><thead><tr><th>Mês</th><th>Datas de Folga</th></tr></thead><tbody>';
  for (const [mes, datas] of Object.entries(datasFolga)) {
    tabela += `<tr><td>${mes}</td><td>${datas.map(data => data.toLocaleDateString('pt-BR')).join(", ")}</td></tr>`;

  }
  tabela += '</tbody></table>';

  resultado.innerHTML = tabela;
});
