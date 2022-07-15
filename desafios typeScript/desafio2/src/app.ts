
enum profissao {
    Atriz,
    Padeiro
}
type pessoa = {
    nome: string,
    idade: number,
    profissao: profissao
}

const pessoa1 : pessoa = {
    nome : "maria",
    idade : 29,
    profissao : profissao.Atriz
    };
const pessoa2 : pessoa = {
    nome : "roberto",
    idade : 19,
    profissao : profissao.Padeiro
    };
const pessoa3 : pessoa = {
    nome : "laura",
    idade : 32,
    profissao : profissao.Atriz
    };
const pessoa4 : pessoa = {
    nome : "carlos",
    idade : 19,
    profissao : profissao.Padeiro
    };

console.log(`desafio 2 `,pessoa1.profissao + pessoa2.nome)
