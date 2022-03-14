import { useState } from "react"
import { Container, Grid, Header, Pagination, Progress, Segment, Image, Icon, List, Divider } from "semantic-ui-react"

export const AboutTab = (props) =>{
    let data = props.data
    let desc = ''
    data.pokemon_v2_pokemonspeciesflavortexts.slice(0, 5).forEach(x=>{
        if(!desc.includes(x.flavor_text)){
            desc = desc+' '+x.flavor_text
        }
    })
    let pok = data.pokemon_v2_pokemons[0]
    let addInfo = data.pokemon_v2_pokemonegggroups
    return(
        <div>
            <p>{desc}</p>
            <Segment> 
                <Grid columns={'equal'}>
                    <Grid.Column>
                        <Header as="h6" color="grey">
                            Height
                            <p>{(pok.height*10).toString()} cm</p>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h6" color="grey">
                            Weight
                            <p>{(pok.weight/10).toString()} kg</p>
                        </Header>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Header as="h3">Additional Info</Header>
            <Grid columns={'equal'}>
                {addInfo.slice(0,2).map((v, k)=>
                    <Grid.Row key={k}>
                        <Grid.Column width={5}>
                            <Header as="h5" disabled>{k === 0 ? 'Egg Groups' : 'Egg Cycle'}</Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h5">{v.pokemon_v2_egggroup.name}</Header>
                        </Grid.Column>
                    </Grid.Row>
                )}
            </Grid>
        </div>
    )
}

export const BaseStatsTab = (props) =>{
    const attr = ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed']
    const filteredStat = props.data.map(function(a){
        return a.base_stat
    })
    const totalStats = filteredStat.reduce((partialSum, a) => partialSum + a, 0)

    return(
        <div>
        <Grid columns={'equal'}>
            {attr.map((v, k)=>
            <Grid.Row key={k}>
                <Grid.Column width={5}>
                    <Header as="h5" disabled>{v}</Header>
                </Grid.Column>
                <Grid.Column>
                    <Progress percent={props.data[k].base_stat} size='tiny'
                    color={
                        k === 0 ? 'red' :
                        k === 1 ? 'orange' :
                        k === 2 ? 'yellow' :
                        k === 3 ? 'blue' :
                        k === 4 ? 'green' : 'pink'
                    }/>
                </Grid.Column>
                <Grid.Column width={2}>
                    {props.data[k].base_stat}
                </Grid.Column>
            </Grid.Row>
            )}
        </Grid>
        <Segment> 
            <Grid columns={'equal'}>
                <Grid.Column>
                    <Header as="h6" color="grey">
                        Total
                        <p>{totalStats}</p>
                    </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header as="h6" color="grey">
                        Average
                        <p>{totalStats/5}</p>
                    </Header>
                </Grid.Column>
            </Grid>
        </Segment>
        </div>
    )
}

export const EvolutionTab = (props) =>{
    const list = []
    let i = 0
    let data = props.data

    for(i=0;i<data.length;i++){
        if(i > 0){
            list.push({
                from: {
                    id: data[i-1].id,
                    name: data[i-1].name
                },
                to:{
                    id: data[i].id,
                    name: data[i].name
                }
            })
        }
    }
    return(
        <div>
            {list.length === 0 ? <Header as="h3" textAlign="center">Evolution not found...</Header>
            : 
            <Grid columns={3}>
                {list.map((v, k)=>
                <Grid.Row key={k}>
                    <Grid.Column textAlign="center">
                        <Image src={process.env.REACT_APP_IMAGE_URL+v.from.id+".png"} 
                        size="tiny" circular bordered centered alt="pokemon"/>
                        <p>{v.from.name}</p>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                    <Icon name="arrow right" size="large"/>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Image src={process.env.REACT_APP_IMAGE_URL+v.to.id+".png"} 
                        size="tiny" circular bordered centered alt="pokemon"/>
                        <p>{v.to.name}</p>
                    </Grid.Column>
                </Grid.Row>
                )}
            </Grid>
            }
        </div>
    )
}

export const MovesTab = (props) =>{
    const [activePage, setActivePage] = useState(1)
    const totalPage = parseInt(props.data.length/10)
    const [moves, setMoves] = useState(props.data.slice(0, 10))
    
    const changePage = (e, data) =>{
        setActivePage(data.activePage)
        let target = data.activePage*10
        let dt = props.data.slice(target-10, target)
        setMoves(dt)
    }
    return(
        <div>
            {moves.length === 0 ? <Header as="h3" textAlign="center">Moves not found...</Header> : 
            <>
            <Grid columns={2}>
            {moves.map((v, k)=>
            <Grid.Column key={k}>
                <Segment color={props.clr}>
                    <Header as="h4">{v.pokemon_v2_move.pokemon_v2_movenames[0].name}</Header>
                    <List divided relaxed>
                        <List.Item>
                            <List.Content floated="right">{v.pokemon_v2_move.pp === null ? '-' : v.pokemon_v2_move.pp}</List.Content>
                            <Header as="h5" disabled>PP</Header>
                        </List.Item>
                        <List.Item>
                            <List.Content floated="right">{v.pokemon_v2_move.power === null ? '-' : v.pokemon_v2_move.power}</List.Content>
                            <Header as="h5" disabled>Power</Header>
                        </List.Item>
                        <List.Item>
                            <List.Content floated="right">{v.pokemon_v2_move.accuracy === null ? '-' : v.pokemon_v2_move.accuracy+'%'}</List.Content>
                            <Header as="h5" disabled>Accuracy</Header>
                        </List.Item>
                    </List>
                </Segment>
            </Grid.Column>
            )}
            </Grid>
            <Container textAlign="center">
                <Divider hidden/>
                <Pagination
                    boundaryRange={0}
                    activePage={activePage}
                    ellipsisItem={null}
                    secondary
                    pointing
                    siblingRange={1}
                    totalPages={totalPage}
                    onPageChange={changePage}
                />
            </Container>
            </>
            }
        </div>
    )
}