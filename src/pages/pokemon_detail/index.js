import { Segment, Image, Header, Label, Tab, Icon, Modal, Message, Form } from "semantic-ui-react"
import { Banner, CatchButton } from "../../components"
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { EvolutionTab, AboutTab, BaseStatsTab, MovesTab } from "./components";
import { MyPokemon } from "../../controllers/models";
import { toast } from 'react-toastify';
import PokeLoader from "../../components/loader";
import NoData from "../../components/nodata";
import { LOAD_POKEMON_DETAIL } from "../../controllers/queries";

const PokemonDetailPage = (props) =>{
  const currentPokemon = JSON.parse(props.current)
  const { loading, error, data } = useQuery(LOAD_POKEMON_DETAIL, {
      variables:{
          id: currentPokemon.id
      }
  });
    const [detailInfo, setDetailInfo] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const [nickname, setNickname] = useState('')
    useEffect(()=>{
        if(data){
          setDetailInfo(data.details[0])
        }
    }, [data])

    const catchPokemon = () =>{
      var chance = Math.random()*100;
      
      if(chance < 50){
        setModalOpened(true)
      }else{
        toast.dismiss()
        toast.error("Pokemon has run away!")
      }
    }

    const savePokemon = () =>{
      let myPokemon = MyPokemon(detailInfo.id, nickname)
      
      props.updateMyPokemonList(myPokemon).then(function(v) {
        if(v){
          toast.dismiss()
          setNickname('')
          setModalOpened(false)
          toast.success('Pokemon has been saved on your list!')
        }
      })
    }

    return(
      loading || detailInfo === null ? <PokeLoader/>
      : error ? <NoData/> : <>
      <Banner color={detailInfo.pokemon_v2_pokemoncolor.name} className="detailWrapper" data-testid="detail-info">
        <Segment basic className="bannerDetail">
            <Header as="h1" inverted>
            {currentPokemon.nickname !== undefined ? 
            <>
            {currentPokemon.nickname}
            <p>({detailInfo.name})</p>
            </>
            : detailInfo.name}
            </Header>
            {detailInfo.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.map((v, k)=>
            <Label key={k}>{v.pokemon_v2_type.name}</Label>
            )}
            <Image centered className={currentPokemon.nickname !== undefined ? 'collection' : ''}
            src={process.env.REACT_APP_IMAGE_URL+detailInfo.id+'.png'} alt="pokemon"/>
        </Segment>
        <Segment className="detailInfo">
            <Tab menu={{ secondary: true, pointing: true }} panes={[
                {
                    menuItem: 'About',
                    render: () => <Tab.Pane as="div" className="aboutTab"><AboutTab data={detailInfo}/></Tab.Pane>,
                },
                {
                menuItem: 'Base Stats',
                render: () => <Tab.Pane as="div" className="baseStatTab"><BaseStatsTab data={detailInfo.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats}/></Tab.Pane>,
                },
                {
                menuItem: 'Evolution',
                render: () => <Tab.Pane as="div" className="evolutionTab"><EvolutionTab data={detailInfo.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies}/></Tab.Pane>,
                },
                {
                    menuItem: 'Moves',
                    render: () => <Tab.Pane as="div" className="movesTab"><MovesTab data={detailInfo.pokemon_v2_pokemons[0].pokemon_v2_pokemonmoves} clr={detailInfo.pokemon_v2_pokemoncolor.name}/></Tab.Pane>,
                }
            ]   } />
        </Segment>
      </Banner>
      <CatchButton onClick={catchPokemon} data-testid="btn-catch">
        catch <Icon name="dot circle"/>
      </CatchButton>

      <Modal size="mini" open={modalOpened} id="catchPokemonModal">
        <Modal.Header>Name your pokemon!</Modal.Header>
        <Modal.Content>
          <Message success size="tiny">
          Congratulation, you managed to catch the pokemon!!!  
          </Message>
          <p>Please give your pokemon a nickname!</p>
          <Form>
            <Form.Input placeholder="Type nickname..." value={nickname} onChange={(e, data)=>setNickname(data.value)}/>
            <Form.Button primary content="Save" floated="right" disabled={nickname === ''} onClick={savePokemon}/>
          </Form>
        </Modal.Content>
      </Modal>
      </>
    )
}

export default PokemonDetailPage