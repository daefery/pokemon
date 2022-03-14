import { useState } from "react"
import { Button, Grid, Segment, Image, Header, Label } from "semantic-ui-react";
import { CenterWrapper } from "../components"
import { useQuery } from "@apollo/client";
import { PokemonCard } from "../components";
import PokeLoader from "../components/loader";
import NoData from "../components/nodata";
import { LOAD_POKEMON_LIST } from "../controllers/queries";

const PokemonListPage = (props) =>{
    const myPokemonList = JSON.parse(props.data)
    const [offset, setOffset] = useState(0)
    const { loading, error, data } = useQuery(LOAD_POKEMON_LIST, {
        variables:{
            offset: offset
        }
    });

    const loadMore = () =>{
        setOffset(offset+20)
    }

    if(loading){
        window.scrollTo(0, 0)
    }

    const changeMenu = (id, e) =>{
        props.changeMenu("DETAIL", {id: id})
    }

    return(
        <Segment basic className="contentWrapper">
            {loading ? <PokeLoader/> : error ? <NoData/> : data.pokemonList.length > 0 ?
            <>
            <Grid columns={2}>
                {data.pokemonList.map((v, k)=>{
                    let countOwned = myPokemonList.filter(x=>x.id === v.id).length
                    return <Grid.Column key={k} data-testid="pokemon-item">
                        <PokemonCard color={v.pokemon_v2_pokemoncolor.name}
                        onClick={changeMenu.bind(null, v.id)}>
                            <Header as="h3" inverted>{v.name}</Header>
                            <Label size="mini">{countOwned} owned</Label>
                            <Image src={process.env.REACT_APP_IMAGE_URL+v.id+'.png'} alt="pokemon"/>
                        </PokemonCard>
                    </Grid.Column>
                    }
                )}
            </Grid>
            <CenterWrapper>
                <Button primary onClick={loadMore} data-testid="btn-find-more">Find More Pokemon</Button>
            </CenterWrapper>
            </>
            : <NoData/>
            }
        </Segment>
    )
}

export default PokemonListPage