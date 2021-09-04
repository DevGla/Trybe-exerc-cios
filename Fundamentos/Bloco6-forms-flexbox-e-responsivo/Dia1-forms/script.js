
function CriarEstadoOption(){
    let estados = document.getElementById("input-estados");
    let siglasEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    for ( let index = 0; index < siglasEstados.length; index += 1){
    let criarOpcoes = document.createElement("option");
    estados.appendChild(criarOpcoes).innerText = siglasEstados[index];
    estados.appendChild(criarOpcoes).value = siglasEstados[index];
}
}
