import { useState } from "react"

export const BuscarPokemon = ({handleGetPokemon}) => {

    const [namePokemon, setNamePokemon] = useState('')

    return (
        <>
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                <form className="d-flex" onSubmit={(e)=>{ handleGetPokemon(e, namePokemon) }}>
                    <input type="text" className="bg-primary text-center form-control ms-4 me-2" onChange={(e)=>{setNamePokemon(e.target.value)}} planceholder="Ingresa el nombre o id del pokemon"></input>
                    <input type="submit" value="Buscar" className="btn btn-outline-danger text-center"></input>
                </form>
            </div>
        </>
    )
}
