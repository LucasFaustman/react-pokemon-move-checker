
export default function Pokemon({pokemon, error}) {
    const pokemonMoves = pokemon.moves.map(move => {
        return <p className="move" key={pokemon.moves.indexOf(move)}>{move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}</p>
       })

       const pokemonAbilities = pokemon.abilities.map(ability => {
            return <p key={pokemon.abilities.indexOf(ability)}>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1) }</p>

       })
    return (
        
        <div className="card">
            {pokemon.name && <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>}
            {pokemon.image && <img alt={`${pokemon.name}`} src={pokemon.image}/>}
            {pokemonAbilities.length !== 0 && <h3>Abilities:</h3>}
            {pokemonAbilities}
            {pokemonMoves.length !== 0 && <h3>All Moves:</h3>}
            <div className='moves'>
            {pokemonMoves && pokemonMoves}
            </div>
            {error && <p className='error'>{error}</p>}
      </div>
    )
}