import { gql } from "@apollo/client";


export const LOAD_POKEMON_LIST = gql`
  query samplePokeAPIquery($offset: Int!) {
    pokemonList: pokemon_v2_pokemonspecies(where: {}, order_by: {capture_rate: desc}, limit: 20, offset: $offset) {
        name
        id
        pokemon_v2_pokemonhabitat {
        name
        }
        pokemon_v2_pokemoncolor {
        name
        }
    }
}`

export const LOAD_MY_POKEMON_LIST = gql`
query samplePokeAPIquery($ids: [Int]!) {
  pokemonList: pokemon_v2_pokemonspecies(where: {id: {_in: $ids}}, order_by: {id: asc}) {
      name
      id
      pokemon_v2_pokemonhabitat {
      name
      }
      pokemon_v2_pokemoncolor {
      name
      }
  }
}`

export const LOAD_POKEMON_DETAIL = gql`
query PokemonDetail($id: Int!) {
  details:pokemon_v2_pokemonspecies(where: {id: {_eq: $id}, pokemon_v2_pokemonspeciesflavortexts: {}}) {
    id
    name
    capture_rate
    pokemon_v2_evolutionchain{
      pokemon_v2_pokemonspecies{
        id
        name
      }
    }
    pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}, order_by: {id: asc}) {
      flavor_text
    }
    pokemon_v2_pokemoncolor {
      name
    }
    pokemon_v2_pokemonhabitat {
      name
    }
    pokemon_v2_pokemonegggroups {
      pokemon_v2_egggroup {
        name
      }
    }
    pokemon_v2_pokemons {
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
      }
      pokemon_v2_pokemonmoves(where: {pokemon_id: {_eq: $id}}, distinct_on: move_id) {
        pokemon_id        
        pokemon_v2_move {
          pokemon_v2_movenames(where:{language_id: {_eq: 9}}){
            name
          }
          name
          accuracy
          power
          pp
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
          pokemon_v2_abilityeffecttexts(where: {language_id: {_eq: 9}}){
            effect
          }
        }
      }
    }
  }
}
`