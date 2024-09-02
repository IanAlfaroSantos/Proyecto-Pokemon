const api_key = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'

export const reqPokemon = async() => {
    try {
        const resp = await fetch({api_key})
        const { data } = await resp.json()
        const pokemons = data.map((pokemon)=> ({
            url: pokemon.images.fixed_width.url
        }))

        return pokemons
    } catch (err) {
        console.error(err)
    }
}