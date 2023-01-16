import './PokemonList.css'
import { Pokemon } from "../Pokemon.model";
import { PokemonCard } from "../PokemonCard/PokemonCard";

type Props = {
  pokemonList: Pokemon[];
};

export function PokemonList({ pokemonList }: Props) {
  return (
    <div className="poke-list">
      {pokemonList.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </div>
  );
}
