function livro (nome,ano,autor) {
    const nomeM = nome.toUppercase();
    const tempo = 2025 - ano;
    const frase = nome + ' por ' + autor;
    const objeto = {
        nome: nomeM,
        ano:  tempo,
        autor: frase,
    };
    return objeto ;
    

}


