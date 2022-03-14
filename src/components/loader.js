import {Dimmer, Image} from 'semantic-ui-react'
const PokeLoader = () =>{
    return(
        <Dimmer active inverted data-testid="loader">
            <Image src={require('../assets/images/loader.png').default} centered size="small" className="pokeLoader" alt="loader"/>
        </Dimmer>
    )
}

export default PokeLoader