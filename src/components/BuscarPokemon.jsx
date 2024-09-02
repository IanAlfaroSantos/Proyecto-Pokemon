export const BuscarPokemon = ({handleGetPokemon}) => {

    return (
        <>
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                <form className="d-flex" onSubmit={(e)=>{ handleGetPokemon(e) }}>
                    <input type="text" className="bg-primary text-center form-control ms-4 me-2" onChange={ (e) }></input>
                    <input type="submit" value="Buscar" className="btn btn-outline-danger text-center"></input>
                </form>
            </div>
        </>
    )
}
