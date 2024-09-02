export const usePokemon = () => {

    const handleGetPokemon = (e) => {
        e.preventDefault()
    }

    //retorno hook
    return{
        handleGetPokemon,
        pokemons
    }
}