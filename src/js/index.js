 /* quando clicar no pokemon da listagem, tem que esconder o cartao que está aberto, e mostrar o cartão selecionado na listagem 

 para isso vamos trabalhar com dois elementos
 1 - listagem
 2 - cartão do pokemon

 precisamos criar duas vareáveis no JS pra trabalhar com os elementos da tela

 vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokemons

 - remover a classe aberto só do cartão que está aberto
 - ao clicar em um pokemon da listagem pegamos o ID desse pokemon pra saber qual cartão mostrar
 - remover a classe ativa que marca o pokemon selecionado (cor rosa da listagem)
 - adicionar a clsse ativa no item da lista selecionado
 */

//  precisamos criar duas variáveis no JS pra trabalhar com elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    // vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokemons
    pokemon.addEventListener('click',() => {
        // - remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // - ao clicar em um pokemon da listagem pegamos o ID desse pokemon pra saber qual cartão mostrar
       const idPokemonSelecionado = pokemon.attributes.id.value
       
       const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        /*
       Existiria uma segunda opção para abrir um cartao, 
       posso criar uma const idDoCartaoPokemonParaAbrir para facilitar na const cartaoPokemonParaAbrir, ficaria assim:

       const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
       const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')
       */

        // - remover a classe ativa que marca o pokemon selecionado (cor rosa da listagem)

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // - adicionar a clsse ativa no item da lista selecionado

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})

