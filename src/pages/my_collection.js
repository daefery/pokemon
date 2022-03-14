import {Segment, Modal, Image, Label, Grid, Header, Icon, Button} from 'semantic-ui-react'
import { useQuery } from "@apollo/client";
import {PokemonCard} from '../components'
import PokeLoader from '../components/loader';
import { useState } from 'react';
import { toast } from 'react-toastify';
import NoData from '../components/nodata';
import { LOAD_MY_POKEMON_LIST } from '../controllers/queries';

const MyCollectionPage = (props) =>{
    const [showModal, setShowModal] = useState(false)
    const [selectedId, setSelectedId] = useState(0)
    let parseList = JSON.parse(props.data)
    parseList.reverse()
    let ids = parseList.map(function(a){
        return a.id
    })

    const { loading, error, data } = useQuery(LOAD_MY_POKEMON_LIST, {
        variables:{
            ids: ids
        }
    });

    const triggerRemove = (id, e) =>{
        setShowModal(true)
        setSelectedId(id)
    }

    const removePokemon = () =>{
        props.removePokemon(selectedId).then(function(v) {
            toast.dismiss()
            if(v){
                toast.success('Pokemon released!')
                setShowModal(false)
            }else{
                toast.error('Failed to release the pokemon!')
            }
        })
    }

    const changeMenu = (v, e) =>{
        props.changeMenu("DETAIL", {id: v.id, nickname: v.nickname})
    }

    return(
        <Segment basic className="contentWrapper">
            {loading ? <PokeLoader/> : error ?
                <NoData/>
            :
            parseList.length > 0 ?
            <Grid columns={2}>
                {parseList.map((v, k)=>{
                    let detail = data.pokemonList.filter(x=>x.id === v.id)[0]
                    return(
                        <Grid.Column key={k} data-testid="pokemon-item">
                            <PokemonCard color={detail.pokemon_v2_pokemoncolor.name}
                            onClick={changeMenu.bind(null, v)}>
                                <Header as="h3" inverted>{v.nickname}</Header>
                                <Label size="mini">{detail.name}</Label>
                                <Image src={process.env.REACT_APP_IMAGE_URL+detail.id+'.png'} alt="pokemon"/>
                            </PokemonCard>
                            <Icon name='trash' link size='large' inverted className='releaseBtn' 
                            data-testid={"btn-release-"+(k+1)} onClick={triggerRemove.bind(null, v.id)}/>
                        </Grid.Column>
                    )
                })}
            </Grid>
            : <NoData/>
            }

            <Modal basic open={showModal} size='mini'>
                <Modal.Content>
                    <Header as="h2" inverted>Are you sure want to release the pokemon?</Header>
                </Modal.Content>
                <Modal.Actions>
                    <Button size='small' onClick={removePokemon} data-testid="btn-yes">Yes</Button>
                    <Button size='small' negative onClick={()=>setShowModal(false)} data-testid="btn-no">No</Button>
                </Modal.Actions>
            </Modal>
        </Segment>
    )
}

export default MyCollectionPage