export const ContenedorPokemons = ({pokemons}) => {

    return(
        <>
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                <h4 type="text" className="bg-warning text-center ms-1 mt-4"></h4>
            </div>
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                {pokemons.map(({url})=>{
                    return (
                        <img className="rounded-pill mt-3 my-3 me-3 img-fluid maxWidth-100% height-auto" src={url} alt="image"/>
                    )
                })}
            </div>
        </>
    )
}