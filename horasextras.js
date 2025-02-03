// horasextras.js
function fnHorasExtras(salario, horastrabalhadas, cargahoraria) {
    // Verifica se todos os valores são números
    if (isNaN(salario) || isNaN(horastrabalhadas) || isNaN(cargahoraria)) {
        return "Todos os valores devem ser numéricos";
    }

    // Verifica se a carga horária é um número inteiro
    if (cargahoraria % 1!== 0) {
        return "A carga horária deve ser um número inteiro";
    }

    // Verifica se algum dos valores é negativo
    if (salario < 0 || horastrabalhadas < 0 || cargahoraria < 0) {
        return "todos os valores devem ser positivos";
    }

    // Calcula as horas extras
    let horasextras = 0;
    if (horastrabalhadas > cargahoraria) {
        horasextras = (horastrabalhadas - cargahoraria) * salario;
    }

    return horasextras;
}

module.exports = fnHorasExtras;