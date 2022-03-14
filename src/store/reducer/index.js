import { combineReducers } from 'redux'

const updateMyPokemonList = (state = "[]", action) =>{
    switch (action.type) {
        case 'POKEMON_UPDATE':
                return state = action.payload
        default:
            return state
    }
}

const updateMenuState = (state = "HOME", action) =>{
    switch (action.type) {
        case 'MENU_UPDATE':
                return state = action.payload
        default:
            return state
    }
}

const updateTheme = (state = "light", action) =>{
    switch (action.type) {
        case 'THEME_UPDATE':
                return state = action.payload
        default:
            return state
    }
}

const updateCurrentPokemon = (state = "{}", action) =>{
    switch (action.type) {
        case 'CURRENT_POKEMON_UPDATE':
                return state = action.payload
        default:
            return state
    }
}

// combine all reducers into one group state
const pokemonReducer = combineReducers({
    currentMenu: updateMenuState,
    activeTheme: updateTheme,
    myPokemonList: updateMyPokemonList,
    currentPokemon: updateCurrentPokemon
})

export default pokemonReducer