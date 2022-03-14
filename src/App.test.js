import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react'
import {MockedProvider} from '@apollo/react-testing'
import { wait } from '@testing-library/user-event/dist/utils';
import PokemonListPage from './pages/pokemon_list';
import { LOAD_MY_POKEMON_LIST, LOAD_POKEMON_DETAIL, LOAD_POKEMON_LIST } from './controllers/queries';
import renderer from 'react-test-renderer';
import MyCollectionPage from './pages/my_collection';
import PokemonDetailPage from './pages/pokemon_detail';

afterEach(cleanup) 

const MAP_ID = {
  BTN_EXPLORE: 'btn-find-more',
  LOADER: 'loader',
  POKEMON_ITEM: 'pokemon-item'
}

const myPokemonListSample = [
  {id: 1, nickname: 'test1'},
  {id: 2, nickname: 'test2'},
]

const pokemonListMock = [
  {
    request: {
      query: LOAD_POKEMON_LIST,
      variables: {
        offset: 0,
      },
    },
    result: {
      data: {
        pokemonList: [
          {
            "name": "magikarp",
            "id": 129,
            "pokemon_v2_pokemonhabitat": {
              "name": "waters-edge"
            },
            "pokemon_v2_pokemoncolor": {
              "name": "red"
            }
          },
          {
            "name": "spinarak",
            "id": 167,
            "pokemon_v2_pokemonhabitat": {
              "name": "forest"
            },
            "pokemon_v2_pokemoncolor": {
              "name": "green"
            }
          }
        ]
      },
    },
  },
];

const myPokemonListMock = [
  {
    request: {
      query: LOAD_MY_POKEMON_LIST,
      variables: {
        ids: [2,1],
      },
    },
    result: {
      data: {
        pokemonList: [
          {
            "name": "bulbasaur",
            "id": 1,
            "pokemon_v2_pokemonhabitat": {
              "name": "grassland"
            },
            "pokemon_v2_pokemoncolor": {
              "name": "green"
            }
          },
          {
            "name": "ivysaur",
            "id": 2,
            "pokemon_v2_pokemonhabitat": {
              "name": "grassland"
            },
            "pokemon_v2_pokemoncolor": {
              "name": "green"
            }
          }
        ]
      },
    },
  },
];

const detailPokemonMock = [
  {
    request: {
      query: LOAD_POKEMON_DETAIL,
      variables: {
        id: 1,
      },
    },
    result: {
      data: {
        "details": [
          {
            "id": 1,
            "name": "bulbasaur",
            "capture_rate": 45,
            "pokemon_v2_evolutionchain": {
              "pokemon_v2_pokemonspecies": [
                {
                  "id": 1,
                  "name": "bulbasaur"
                },
                {
                  "id": 2,
                  "name": "ivysaur"
                },
                {
                  "id": 3,
                  "name": "venusaur"
                }
              ]
            },
            "pokemon_v2_pokemonspeciesflavortexts": [
              {
                "flavor_text": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON."
              },
              {
                "flavor_text": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON."
              },
              {
                "flavor_text": "It can go for days\nwithout eating a\nsingle morsel.\fIn the bulb on\nits back, it\nstores energy."
              },
              {
                "flavor_text": "The seed on its\nback is filled\nwith nutrients.\fThe seed grows\nsteadily larger as\nits body grows."
              },
              {
                "flavor_text": "It carries a seed\non its back right\nfrom birth. As it\fgrows older, the\nseed also grows\nlarger."
              },
              {
                "flavor_text": "While it is young,\nit uses the\nnutrients that are\fstored in the\nseeds on its back\nin order to grow."
              },
              {
                "flavor_text": "BULBASAUR can be seen napping in\nbright sunlight.\nThere is a seed on its back.\fBy soaking up the sun’s rays, the seed\ngrows progressively larger."
              },
              {
                "flavor_text": "BULBASAUR can be seen napping in\nbright sunlight.\nThere is a seed on its back.\fBy soaking up the sun’s rays, the seed\ngrows progressively larger."
              },
              {
                "flavor_text": "BULBASAUR can be seen napping in bright\nsunlight. There is a seed on its back.\nBy soaking up the sun’s rays, the seed\ngrows progressively larger."
              },
              {
                "flavor_text": "There is a plant seed on its back right\nfrom the day this POKéMON is born.\nThe seed slowly grows larger."
              },
              {
                "flavor_text": "A strange seed was planted on its back at\nbirth. The plant sprouts and grows with\nthis POKéMON."
              },
              {
                "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back."
              },
              {
                "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back."
              },
              {
                "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back."
              },
              {
                "flavor_text": "The seed on its back is filled\nwith nutrients. The seed grows\nsteadily larger as its body grows."
              },
              {
                "flavor_text": "It carries a seed on its back right\nfrom birth. As it grows older, the\nseed also grows larger."
              },
              {
                "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back."
              },
              {
                "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back."
              },
              {
                "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back."
              },
              {
                "flavor_text": "For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back."
              },
              {
                "flavor_text": "A strange seed was planted on its back at birth.\nThe plant sprouts and grows with this Pokémon."
              },
              {
                "flavor_text": "For some time after its birth, it grows by gaining\nnourishment from the seed on its back."
              },
              {
                "flavor_text": "Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger."
              },
              {
                "flavor_text": "Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger."
              },
              {
                "flavor_text": "It can go for days without eating a single morsel.\nIn the bulb on its back, it stores energy."
              },
              {
                "flavor_text": "It can go for days without eating a single morsel.\nIn the bulb on its back, it stores energy."
              },
              {
                "flavor_text": "There is a plant seed on its back right from the\nday this Pokémon is born. The seed slowly\ngrows larger."
              },
              {
                "flavor_text": "While it is young, it uses the nutrients that are\nstored in the seed on its back in order to grow."
              }
            ],
            "pokemon_v2_pokemoncolor": {
              "name": "green"
            },
            "pokemon_v2_pokemonhabitat": {
              "name": "grassland"
            },
            "pokemon_v2_pokemonegggroups": [
              {
                "pokemon_v2_egggroup": {
                  "name": "monster"
                }
              },
              {
                "pokemon_v2_egggroup": {
                  "name": "plant"
                }
              }
            ],
            "pokemon_v2_pokemons": [
              {
                "height": 7,
                "weight": 69,
                "pokemon_v2_pokemontypes": [
                  {
                    "pokemon_v2_type": {
                      "name": "grass"
                    }
                  },
                  {
                    "pokemon_v2_type": {
                      "name": "poison"
                    }
                  }
                ],
                "pokemon_v2_pokemonstats": [
                  {
                    "base_stat": 45
                  },
                  {
                    "base_stat": 49
                  },
                  {
                    "base_stat": 49
                  },
                  {
                    "base_stat": 65
                  },
                  {
                    "base_stat": 65
                  },
                  {
                    "base_stat": 45
                  }
                ],
                "pokemon_v2_pokemonmoves": [
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Razor Wind"
                        }
                      ],
                      "name": "razor-wind",
                      "accuracy": 100,
                      "power": 80,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Swords Dance"
                        }
                      ],
                      "name": "swords-dance",
                      "accuracy": null,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Cut"
                        }
                      ],
                      "name": "cut",
                      "accuracy": 95,
                      "power": 50,
                      "pp": 30
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Bind"
                        }
                      ],
                      "name": "bind",
                      "accuracy": 85,
                      "power": 15,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Vine Whip"
                        }
                      ],
                      "name": "vine-whip",
                      "accuracy": 100,
                      "power": 45,
                      "pp": 25
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Headbutt"
                        }
                      ],
                      "name": "headbutt",
                      "accuracy": 100,
                      "power": 70,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Tackle"
                        }
                      ],
                      "name": "tackle",
                      "accuracy": 100,
                      "power": 40,
                      "pp": 35
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Body Slam"
                        }
                      ],
                      "name": "body-slam",
                      "accuracy": 100,
                      "power": 85,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Take Down"
                        }
                      ],
                      "name": "take-down",
                      "accuracy": 85,
                      "power": 90,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Double-Edge"
                        }
                      ],
                      "name": "double-edge",
                      "accuracy": 100,
                      "power": 120,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Growl"
                        }
                      ],
                      "name": "growl",
                      "accuracy": 100,
                      "power": null,
                      "pp": 40
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Strength"
                        }
                      ],
                      "name": "strength",
                      "accuracy": 100,
                      "power": 80,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Mega Drain"
                        }
                      ],
                      "name": "mega-drain",
                      "accuracy": 100,
                      "power": 40,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Leech Seed"
                        }
                      ],
                      "name": "leech-seed",
                      "accuracy": 90,
                      "power": null,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Growth"
                        }
                      ],
                      "name": "growth",
                      "accuracy": null,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Razor Leaf"
                        }
                      ],
                      "name": "razor-leaf",
                      "accuracy": 95,
                      "power": 55,
                      "pp": 25
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Solar Beam"
                        }
                      ],
                      "name": "solar-beam",
                      "accuracy": 100,
                      "power": 120,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Poison Powder"
                        }
                      ],
                      "name": "poison-powder",
                      "accuracy": 75,
                      "power": null,
                      "pp": 35
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Sleep Powder"
                        }
                      ],
                      "name": "sleep-powder",
                      "accuracy": 75,
                      "power": null,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Petal Dance"
                        }
                      ],
                      "name": "petal-dance",
                      "accuracy": 100,
                      "power": 120,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "String Shot"
                        }
                      ],
                      "name": "string-shot",
                      "accuracy": 95,
                      "power": null,
                      "pp": 40
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Toxic"
                        }
                      ],
                      "name": "toxic",
                      "accuracy": 90,
                      "power": null,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Rage"
                        }
                      ],
                      "name": "rage",
                      "accuracy": 100,
                      "power": 20,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Mimic"
                        }
                      ],
                      "name": "mimic",
                      "accuracy": null,
                      "power": null,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Double Team"
                        }
                      ],
                      "name": "double-team",
                      "accuracy": null,
                      "power": null,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Defense Curl"
                        }
                      ],
                      "name": "defense-curl",
                      "accuracy": null,
                      "power": null,
                      "pp": 40
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Light Screen"
                        }
                      ],
                      "name": "light-screen",
                      "accuracy": null,
                      "power": null,
                      "pp": 30
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Reflect"
                        }
                      ],
                      "name": "reflect",
                      "accuracy": null,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Bide"
                        }
                      ],
                      "name": "bide",
                      "accuracy": null,
                      "power": null,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Sludge"
                        }
                      ],
                      "name": "sludge",
                      "accuracy": 100,
                      "power": 65,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Skull Bash"
                        }
                      ],
                      "name": "skull-bash",
                      "accuracy": 100,
                      "power": 130,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Amnesia"
                        }
                      ],
                      "name": "amnesia",
                      "accuracy": null,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Flash"
                        }
                      ],
                      "name": "flash",
                      "accuracy": 100,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Rest"
                        }
                      ],
                      "name": "rest",
                      "accuracy": null,
                      "power": null,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Substitute"
                        }
                      ],
                      "name": "substitute",
                      "accuracy": null,
                      "power": null,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Snore"
                        }
                      ],
                      "name": "snore",
                      "accuracy": 100,
                      "power": 50,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Curse"
                        }
                      ],
                      "name": "curse",
                      "accuracy": null,
                      "power": null,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Protect"
                        }
                      ],
                      "name": "protect",
                      "accuracy": null,
                      "power": null,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Sludge Bomb"
                        }
                      ],
                      "name": "sludge-bomb",
                      "accuracy": 100,
                      "power": 90,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Mud-Slap"
                        }
                      ],
                      "name": "mud-slap",
                      "accuracy": 100,
                      "power": 20,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Outrage"
                        }
                      ],
                      "name": "outrage",
                      "accuracy": 100,
                      "power": 120,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Giga Drain"
                        }
                      ],
                      "name": "giga-drain",
                      "accuracy": 100,
                      "power": 75,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Endure"
                        }
                      ],
                      "name": "endure",
                      "accuracy": null,
                      "power": null,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Charm"
                        }
                      ],
                      "name": "charm",
                      "accuracy": 100,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "False Swipe"
                        }
                      ],
                      "name": "false-swipe",
                      "accuracy": 100,
                      "power": 40,
                      "pp": 40
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Swagger"
                        }
                      ],
                      "name": "swagger",
                      "accuracy": 85,
                      "power": null,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Fury Cutter"
                        }
                      ],
                      "name": "fury-cutter",
                      "accuracy": 95,
                      "power": 40,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Attract"
                        }
                      ],
                      "name": "attract",
                      "accuracy": 100,
                      "power": null,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Sleep Talk"
                        }
                      ],
                      "name": "sleep-talk",
                      "accuracy": null,
                      "power": null,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Return"
                        }
                      ],
                      "name": "return",
                      "accuracy": 100,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Frustration"
                        }
                      ],
                      "name": "frustration",
                      "accuracy": 100,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Safeguard"
                        }
                      ],
                      "name": "safeguard",
                      "accuracy": null,
                      "power": null,
                      "pp": 25
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Sweet Scent"
                        }
                      ],
                      "name": "sweet-scent",
                      "accuracy": 100,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Synthesis"
                        }
                      ],
                      "name": "synthesis",
                      "accuracy": null,
                      "power": null,
                      "pp": 5
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Hidden Power"
                        }
                      ],
                      "name": "hidden-power",
                      "accuracy": 100,
                      "power": 60,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Sunny Day"
                        }
                      ],
                      "name": "sunny-day",
                      "accuracy": null,
                      "power": null,
                      "pp": 5
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Rock Smash"
                        }
                      ],
                      "name": "rock-smash",
                      "accuracy": 100,
                      "power": 40,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Facade"
                        }
                      ],
                      "name": "facade",
                      "accuracy": 100,
                      "power": 70,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Nature Power"
                        }
                      ],
                      "name": "nature-power",
                      "accuracy": null,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Helping Hand"
                        }
                      ],
                      "name": "helping-hand",
                      "accuracy": null,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Ingrain"
                        }
                      ],
                      "name": "ingrain",
                      "accuracy": null,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Knock Off"
                        }
                      ],
                      "name": "knock-off",
                      "accuracy": 100,
                      "power": 65,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Secret Power"
                        }
                      ],
                      "name": "secret-power",
                      "accuracy": 100,
                      "power": 70,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Weather Ball"
                        }
                      ],
                      "name": "weather-ball",
                      "accuracy": 100,
                      "power": 50,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Grass Whistle"
                        }
                      ],
                      "name": "grass-whistle",
                      "accuracy": 55,
                      "power": null,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Bullet Seed"
                        }
                      ],
                      "name": "bullet-seed",
                      "accuracy": 100,
                      "power": 25,
                      "pp": 30
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Magical Leaf"
                        }
                      ],
                      "name": "magical-leaf",
                      "accuracy": null,
                      "power": 60,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Natural Gift"
                        }
                      ],
                      "name": "natural-gift",
                      "accuracy": 100,
                      "power": null,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Worry Seed"
                        }
                      ],
                      "name": "worry-seed",
                      "accuracy": 100,
                      "power": null,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Seed Bomb"
                        }
                      ],
                      "name": "seed-bomb",
                      "accuracy": 100,
                      "power": 80,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Energy Ball"
                        }
                      ],
                      "name": "energy-ball",
                      "accuracy": 100,
                      "power": 90,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Leaf Storm"
                        }
                      ],
                      "name": "leaf-storm",
                      "accuracy": 90,
                      "power": 130,
                      "pp": 5
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Power Whip"
                        }
                      ],
                      "name": "power-whip",
                      "accuracy": 85,
                      "power": 120,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Captivate"
                        }
                      ],
                      "name": "captivate",
                      "accuracy": 100,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Grass Knot"
                        }
                      ],
                      "name": "grass-knot",
                      "accuracy": 100,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Venoshock"
                        }
                      ],
                      "name": "venoshock",
                      "accuracy": 100,
                      "power": 65,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Round"
                        }
                      ],
                      "name": "round",
                      "accuracy": 100,
                      "power": 60,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Echoed Voice"
                        }
                      ],
                      "name": "echoed-voice",
                      "accuracy": 100,
                      "power": 40,
                      "pp": 15
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Grass Pledge"
                        }
                      ],
                      "name": "grass-pledge",
                      "accuracy": 100,
                      "power": 80,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Work Up"
                        }
                      ],
                      "name": "work-up",
                      "accuracy": null,
                      "power": null,
                      "pp": 30
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Grassy Terrain"
                        }
                      ],
                      "name": "grassy-terrain",
                      "accuracy": null,
                      "power": null,
                      "pp": 10
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Confide"
                        }
                      ],
                      "name": "confide",
                      "accuracy": null,
                      "power": null,
                      "pp": 20
                    }
                  },
                  {
                    "pokemon_id": 1,
                    "pokemon_v2_move": {
                      "pokemon_v2_movenames": [
                        {
                          "name": "Grassy Glide"
                        }
                      ],
                      "name": "grassy-glide",
                      "accuracy": 100,
                      "power": 70,
                      "pp": 20
                    }
                  }
                ],
                "pokemon_v2_pokemonabilities": [
                  {
                    "pokemon_v2_ability": {
                      "name": "overgrow",
                      "pokemon_v2_abilityeffecttexts": [
                        {
                          "effect": "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage."
                        }
                      ]
                    }
                  },
                  {
                    "pokemon_v2_ability": {
                      "name": "chlorophyll",
                      "pokemon_v2_abilityeffecttexts": [
                        {
                          "effect": "This Pokémon's Speed is doubled during strong sunlight.\n\nThis bonus does not count as a stat modifier."
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
    },
  },
];

test('[Pokemon List Page] Should display loading indicator', () => {
  window.scrollTo = jest.fn()
  const {getByTestId} = render(
    <MockedProvider mocks={pokemonListMock} addTypename={false}>
      <PokemonListPage data={JSON.stringify(myPokemonListSample)}/>
    </MockedProvider>,
  )

  const el = getByTestId(MAP_ID.LOADER)
  expect(el).toBeDefined()
})

it('[Pokemon List Page] Renders without error', () => {
  window.scrollTo = jest.fn()
  renderer.create(
      <MockedProvider mocks={pokemonListMock} addTypename={false}>
        <PokemonListPage data={JSON.stringify(myPokemonListSample)}/>
      </MockedProvider>,
  )
})

it('[Pokemon List Page] Should render pokemon list', async () => {
  window.scrollTo = jest.fn()
  const mockFn1 = jest.fn().mockImplementation(() => true);
  const component = renderer.create(<MockedProvider mocks={pokemonListMock} addTypename={false}>
      <PokemonListPage data={JSON.stringify(myPokemonListSample)} changeMenu={mockFn1}/>
    </MockedProvider>,
  );

  await wait(1000)
  let tree = component.toJSON().children
  let p = tree[0].children.filter(x=>x.props['data-testid'] === MAP_ID.POKEMON_ITEM).length
  expect(p).toEqual(2)
});

test('[My Pokemon List Page] Should display loading indicator', () => {
  window.scrollTo = jest.fn()
  const {getByTestId} = render(
    <MockedProvider mocks={myPokemonListMock} addTypename={false}>
      <MyCollectionPage data={JSON.stringify(myPokemonListSample)}/>
    </MockedProvider>,
  )

  const el = getByTestId(MAP_ID.LOADER)
  expect(el).toBeDefined()
})

it('[My Pokemon List Page] Renders without error', () => {
  window.scrollTo = jest.fn()
  renderer.create(
      <MockedProvider mocks={myPokemonListMock} addTypename={false}>
          <MyCollectionPage data={JSON.stringify(myPokemonListSample)}/>
      </MockedProvider>,
  )
})

it('[My Pokemon List Page] Should render pokemon list', async () => {
  window.scrollTo = jest.fn()
  const mockFn1 = jest.fn().mockImplementation(() => true);
  const component = renderer.create(<MockedProvider mocks={myPokemonListMock} addTypename={false}>
    <MyCollectionPage data={JSON.stringify(myPokemonListSample)} changeMenu={mockFn1}/>
  </MockedProvider>,
  );

  await wait(1000)
  let tree = component.toJSON().children
  let p = tree[0].children.filter(x=>x.props['data-testid'] === MAP_ID.POKEMON_ITEM).length
  expect(p).toEqual(2)
});

test('[Pokemon Detail Page] Should display loading indicator', () => {
  window.scrollTo = jest.fn()
  let sample = {id: 1}
  const {getByTestId} = render(
    <MockedProvider mocks={detailPokemonMock} addTypename={false}>
      <PokemonDetailPage current={JSON.stringify(sample)}/>
    </MockedProvider>,
  )

  const el = getByTestId(MAP_ID.LOADER)
  expect(el).toBeDefined()
})

it('[Pokemon Detail Page] Renders without error', () => {
  window.scrollTo = jest.fn()
  let sample = {id: 1}
  renderer.create(
    <MockedProvider mocks={detailPokemonMock} addTypename={false}>
      <PokemonDetailPage current={JSON.stringify(sample)}/>
    </MockedProvider>,
  )
})

it('[Pokemon Detail Page] Should render pokemon detail page', async () => {
  window.scrollTo = jest.fn()
  let sample = {id: 1}
  const component = renderer.create(
    <MockedProvider mocks={detailPokemonMock} addTypename={false}>
      <PokemonDetailPage current={JSON.stringify(sample)}/>
    </MockedProvider>,
  );

  await wait(1000)
  let tree = component.root.findByProps({'data-testid': 'detail-info'})
  expect(tree).toBeDefined()
});

it('[Pokemon Detail Page] Should render pokemon detail page', async () => {
  window.scrollTo = jest.fn()
  let sample = {id: 1}
  const component = renderer.create(
    <MockedProvider mocks={detailPokemonMock} addTypename={false}>
      <PokemonDetailPage current={JSON.stringify(sample)}/>
    </MockedProvider>,
  );

  await wait(1000)
  let tree = component.root.findByProps({'data-testid': 'detail-info'})
  expect(tree).toBeDefined()
});

