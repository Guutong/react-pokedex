import './App.css';
import { pokemonList } from './PokeDex/Pokemon.data';
import { PokemonDetail } from './PokeDex/PokemonDetail/PokemonDetail';
import { PokemonList } from './PokeDex/PokemonList/PokemonList';

function App() {
  return (
    <div className="poke-body">
      <div className="poke-body-left-column">
        <PokemonList pokemonList={pokemonList} />
      </div>
      <div className="poke-body-right-column">
        <PokemonDetail pokemon={pokemonList[1]} />
      </div>
    </div>
  );
}

export default App;
