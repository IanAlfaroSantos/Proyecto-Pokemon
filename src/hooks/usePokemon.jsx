import { useState } from 'react'
import { reqPokemon } from '../services/pokemon'

export const usePokemon = () => {

    const [pokemon, setPokemon] = useState(null)

    const handleGetPokemon = (e, namePokemon) => {
        //evita la recarga completa del navegador
        e.preventDefault()

        reqPokemon(namePokemon).then((dataPokemon) => {
            setPokemon(dataPokemon)   
        }).catch(err => {
            console.error(err)
            setPokemon(null)
        })
    }

    //retorno hook
    return{
        handleGetPokemon,
        pokemon
    }
}