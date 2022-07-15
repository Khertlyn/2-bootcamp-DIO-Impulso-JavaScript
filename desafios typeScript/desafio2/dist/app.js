"use strict";
var profissao;
(function (profissao) {
    profissao[profissao["Atriz"] = 0] = "Atriz";
    profissao[profissao["Padeiro"] = 1] = "Padeiro";
})(profissao || (profissao = {}));
const pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: profissao.Atriz
};
const pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: profissao.Padeiro
};
const pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
};
const pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
};
console.log(`desafio 2 `, pessoa1.profissao + pessoa2.nome);
