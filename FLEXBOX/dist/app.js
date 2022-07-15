"use strict";
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
//var dateOk = day + "/" + month + "/" + year;
//document.getElementById(".current_date").innerHTML =  day + "/" + month + "/" + year ;
const unidades = [
    { cia: "1ªcia", anuncio: "sede", nome: "Sede" },
    { cia: "1ªcia", anuncio: "sede", nome: "PEMAD" },
    { cia: "1ªcia", anuncio: "leopoldina", nome: "Leopoldina" },
    { cia: "1ªcia", anuncio: "leopoldina", nome: "Além Paraíba" },
    { cia: "1ªcia", anuncio: "leopoldina", nome: "Cataguases" },
    { cia: "1ªcia", anuncio: "sede", nome: "PASul" },
    { cia: "2ªcia", anuncio: "uba", nome: "Ubá" },
    { cia: "2ªcia", anuncio: "muriae", nome: "Muriaé" },
    { cia: "2ªcia", anuncio: "vicosa", nome: "Viçosa" },
    { cia: "2ªcia", anuncio: "sede", nome: "3ª Cia PV" },
    { cia: "2ªcia", anuncio: "uba", nome: "Astolfo dutra" },
];
let dataAtual = document.querySelector('#current_date');
let minhaTabela = document.querySelector('#table-flex-body');
let quantidadeDeUnidades = unidades.reverse().length;
dataAtual === null || dataAtual === void 0 ? void 0 : dataAtual.insertAdjacentHTML('beforeend', `${day} + "/" + ${month} + "/" + ${year}`);
while (quantidadeDeUnidades) {
    const indice = quantidadeDeUnidades - 1;
    minhaTabela === null || minhaTabela === void 0 ? void 0 : minhaTabela.insertAdjacentHTML('beforeend', `
<div class ="table-flex-body">
    <div class ="table-flex-body table-dotted table-20">${unidades[indice].cia}</div>
    <div class ="table-flex-body table-dotted table-30">${unidades[indice].nome}</div>
    <div class ="table-flex-body table-dotted table-30"></div>
    <div class ="table-flex-body table-dotted table-20"></div>
</div>
`);
    quantidadeDeUnidades--;
}
const periodoCiad = [
    { tempo: "1º Tempo" },
    { tempo: "2º Tempo" },
    { tempo: "3º Tempo" },
];
let minhaTabelaCiad = document.querySelector('#corpoDaTabelaCiad');
let quantidadeDePeriodos = periodoCiad.reverse().length;
while (quantidadeDePeriodos) {
    const indice = quantidadeDePeriodos - 1;
    minhaTabelaCiad === null || minhaTabelaCiad === void 0 ? void 0 : minhaTabelaCiad.insertAdjacentHTML('beforeend', `
<div class ="table-flex-body ">
    <div class ="table-flex-body table-dotted table-50">${periodoCiad[indice].tempo}</div>
    <div class ="table-flex-body table-dotted table-50"></div>
</div>
`);
    quantidadeDePeriodos--;
}
unidades.forEach(function (item, index) { console.log(item, index); });
