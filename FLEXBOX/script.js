
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year;

const unidades = [
    { cia:"1ªcia", anuncio:"sede", nome:"Sede" },
    { cia:"1ªcia", anuncio:"sede", nome:"PEMAD" },
    { cia:"1ªcia", anuncio:"leopoldina", nome:"Leopoldina" },
    { cia:"1ªcia", anuncio:"leopoldina", nome:"Além Paraíba"},
    { cia:"1ªcia", anuncio:"leopoldina", nome:"Cataguases" },
    { cia:"1ªcia", anuncio:"sede", nome:"PASul" },
    { cia:"2ªcia", anuncio: "uba", nome:"Ubá" },
    { cia:"2ªcia", anuncio: "muriae", nome:"Muriaé" },
    { cia:"2ªcia", anuncio: "vicosa", nome:"Viçosa" },
    { cia:"2ªcia", anuncio:"sede", nome:"3ª Cia PV" },
    { cia:"2ªcia", anuncio: "uba", nome:"Astolfo dutra" },
];

let minhaTabela = document.querySelector('#table-flex-body');
let quantidadeDeUnidades = unidades.reverse().length;

while(quantidadeDeUnidades){
    const indice = quantidadeDeUnidades - 1;
     minhaTabela.insertAdjacentHTML('beforeend',`
<div class ="table-flex-total">
    <div class ="table-flex-total">${unidades[indice].cia}</div>
    <div class ="table-flex-total">${unidades[indice].nome}</div>
    <div class ="table-flex-total"></div>
    <div class ="table-flex-total"></div>
</div>
`);
quantidadeDeUnidades --;
}

const periodoCiad = [ 
    {tempo:"1º Tempo"}, 
    {tempo:"2º Tempo"}, 
    {tempo:"3º Tempo"},
];

let minhaTabelaCiad= document.querySelector('#corpoDaTabelaCiad');
let quantidadeDePeriodos = periodoCiad.reverse().length;

while(quantidadeDePeriodos){
    const indice = quantidadeDePeriodos - 1;
     minhaTabelaCiad.insertAdjacentHTML('beforeend',`
<tr>
    <td>${periodoCiad[indice].tempo}</td>
    <td></td>
</tr>
`);
quantidadeDePeriodos --;
}
unidades.forEach(function(item, index){console.log(item, index)})

