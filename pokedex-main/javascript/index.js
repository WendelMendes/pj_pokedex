/*
quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elemntos
1 - listagem
2- cartão do pokemon

precisamos criar duas variaveis no JS pra trabalhar com os elementos da tela

vamos precisar trabalhar com evento de click feito pelo usuario na listagem de pokemons

= remover a classe aberto só do cartão que esta aberto
- ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
- remover a classe ativa que marca o pokemon selecionado
- adicionar a classe ativo no item da lista selecionado
*/


// criando as duas variaveis
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');


listaSelecaoPokemons.forEach(pokemon => {
    // criando o evdento de click pelo usuario
    pokemon.addEventListener('click', () => {
        //= remover a classe aberto só do cartão que esta aberto

        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto');

        //ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value;

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);
        cartaoPokemonParaAbrir.classList.add('aberto');

        //remover a classe ativa que marca o pokemon selecionado

        const pokemonAtivoNaListagem = document.querySelector('.ativo');
        pokemonAtivoNaListagem.classList.remove('ativo');

        // adicionar a classe ativo no item da lista selecionado

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})