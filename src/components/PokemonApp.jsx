import { usePokemon } from '../hooks/usePokemon'
import { BuscarPokemon } from './BuscarPokemon'
import { ContenedorPokemons } from './ContenedorPokemons'

export const PokemonApp = () => {

    const {handleGetPokemon, pokemons} = usePokemon()

    return (
        <>
            <BuscarPokemon handleGetPokemon={handleGetPokemon}/>
            <ContenedorPokemons pokemons={pokemons}/>

        </>
    )
}