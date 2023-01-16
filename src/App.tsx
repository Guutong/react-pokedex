import './App.css';
import { pokemonList } from './PokeDex/Pokemon.data';
import { PokemonList } from './PokeDex/PokemonList/PokemonList';

function App() {
  return (
    <div>
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}

export default App;
