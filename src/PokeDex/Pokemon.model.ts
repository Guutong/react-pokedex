export interface Pokemon {
    id: number;
    name: string;
    image: string;
    types: string[];
    weight: number;
    height: number;
    abilities: string[];
    stats: PokemonStat[]
    weak: string[]
    strong: string[]
}

export interface PokemonStat { 
    name: string; 
    value: number;
}