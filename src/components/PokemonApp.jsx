import { usePokemon } from '../hooks/usePokemon'
import { BuscarPokemon } from './BuscarPokemon'
import { ContenedorPokemons } from './ContenedorPokemons'

//functional component
export const PokemonApp = () => {

    const {handleGetPokemon, pokemon} = usePokemon()

    return (
        //fragment
        <>
        {/*props = una propiedad que viaja entre componentes*/}
            <BuscarPokemon handleGetPokemon={handleGetPokemon}/>
            <ContenedorPokemons pokemon={pokemon}/>

        </>
    )
}