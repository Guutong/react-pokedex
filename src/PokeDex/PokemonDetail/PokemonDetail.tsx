import "./PokemonDetail.css";
import { Pokemon } from "../Pokemon.model";

type Props = {
  pokemon: Pokemon;
};

export function PokemonDetail({ pokemon }: Props) {
  return (
    <div className="poke-detail">
      <div className="poke-detail-header" data-type="grass">
        <div className="poke-detail-header-number">
          #{String(pokemon.id).padStart(3, "0")}
        </div>
        <div className="poke-detail-header-image">
          <img src={pokemon.image} alt="" />
        </div>
        <h3 className="poke-detail-header-name">{pokemon.name}</h3>
        <ul className="poke-detail-header-types">
          {pokemon.types.map((type) => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </div>
      <div className="poke-detail-content">
        <div className="poke-detail-content-resume">
          <div className="poke-detail-content-resume-item poke-detail-content-resume-item--weight">
            <h4 className="value">{pokemon.weight / 10} Kg</h4>
            <p className="description">Weight</p>
          </div>
          <div className="poke-detail-content-resume-item poke-detail-content-resume-item--height">
            <h4 className="value">{pokemon.height / 10} Mts</h4>
            <p className="description">Height</p>
          </div>
          <div className="poke-detail-content-resume-item poke-detail-content-resume-item--abilities">
            <h4 className="value">{pokemon.abilities.join(", ")}</h4>
            <p className="description">Abilitie</p>
          </div>
        </div>
        <div className="poke-detail-content-stats">
          <h3 className="poke-detail-content-stats-title">Base Stats</h3>
          {pokemon.stats.map((stat) => (
            <div key={stat.name} className="poke-detail-content-stats-progressbar">
              <p className="poke-detail-content-stats-progressbar-label">
                {stat.name}
              </p>
              <div className="poke-detail-content-stats-progressbar-progress">
                <div
                  className={`poke-detail-content-stats-progressbar-progress-bar poke-detail-content-stats-progressbar-progress-bar-${stat.name}`}
                  style={{ width: (stat.value * 100) / 250 + "%" }}
                >
                  <span>{stat.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="poke-detail-content-sw-container">
          <div className="poke-detail-content-sw-container-weakness">
            <h4>Weak Against</h4>
            <ul>
              {pokemon.weak.map((type) => (
                <li data-type={type} key={type}>
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="poke-detail-content-sw-container-strong">
            <h4>Strong Against</h4>
            <ul>
              {pokemon.strong.map((type) => (
                <li data-type={type} key={type}>
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
