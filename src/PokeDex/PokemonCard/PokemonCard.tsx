import { Pokemon } from "../Pokemon.model";
import './PokemonCard.css'

type Props = {
  pokemon: Pokemon
}

export function PokemonCard({ pokemon }: Props) {
  return (
    <div className="card" data-id={pokemon.id} data-name={pokemon.name} data-type={pokemon.types[0]}>
      <div className="card-image">
        <img src={pokemon.image} alt="" />
      </div>
      <div className="card-particle"></div>
      <div className="card-detail">
        <h4 className="card-name">{pokemon.name}</h4>
        <ul className="card-types">
            {pokemon.types.map((type) => <li key={type}>{type}</li>)}
        </ul>
      </div>
      <div className="card-number">#{String(pokemon.id).padStart(3, '0')}</div>
    </div>
  );
}
