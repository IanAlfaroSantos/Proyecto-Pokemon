export const reqPokemon = async(namePokemon) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
        const data = await resp.json()

        return data
    } catch (err) {
        console.error(err)
    }
}