import './App.css';
import { Pokemon } from './PokeDex/Pokemon.model';
import { PokemonCard } from './PokeDex/PokemonCard/PokemonCard';

function App() {
  const pokemon: Pokemon = {
    id: 1,
    name: "bulbasaur",
    image: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png",
    types: ["grass", "potion"]
  }

  return (
    <div style={{ width: 300, padding: 20 }}>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
