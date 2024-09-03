export const ContenedorPokemons = ({pokemon}) => {

    return(
        <div className="card position-absolute top-50 start-50 translate-middle" style={{width: '18rem'}}>
            {pokemon && (
                <>
                    <img className="card-img-top" src={pokemon.sprites.other.home.front_default} alt={pokemon.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Id: {pokemon.id}</li>
                        <li className="list-group-item">Tipo: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</li>
                        <li className="list-group-item">Altura: {pokemon.height / 10} m</li>
                        <li className="list-group-item">Peso: {pokemon.weight / 10} kg</li>
                        <li className="list-group-item">Habilidad: {pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</li>
                    </ul>
                </>
            )}
        </div>
    )
}