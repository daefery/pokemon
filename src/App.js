import React from 'react'
import {connect} from 'react-redux';
import './style.scss'
import {MainHeaderComponent, DetailHeaderComponent} from './components/header';
import PokemonListPage from './pages/pokemon_list';
import PokemonDetailPage from './pages/pokemon_detail';
import MyCollectionPage from './pages/my_collection';
import { ThemeProvider } from '@emotion/react';
import { MainWrapper } from './components';
import {toast, ToastContainer} from 'react-toastify'

// to detect every store of redux/state changed
function mapStateToProps(state){
  return{
    currentMenu: state.currentMenu,
    activeTheme: state.activeTheme,
    myPokemonList: state.myPokemonList,
    currentPokemon: state.currentPokemon
  }
}

// to detect every store of redux/state changed
function mapDispatchToProps(dispatch) {
  return { 
    updateMyPokemonList: (n) => dispatch({ type: 'POKEMON_UPDATE', payload: n }),
    updateMenuState: (n) => dispatch({ type: 'MENU_UPDATE', payload: n }),
    updateTheme: (n) => dispatch({ type: 'THEME_UPDATE', payload: n }),
    updateCurrentPokemon: (n) => dispatch({ type: 'CURRENT_POKEMON_UPDATE', payload: n })
  }
}

const themes = {
  light: {
    bg: '#FFF',
    menu: {
      shadow: '0 1px 2px 0 rgb(34 36 38 / 15%)',
      list_color: '#041C32'
    }
  },
  dark: {
    bg: '#19232b',
    menu: {
      shadow: '0px 1px 2px 0 rgb(115 115 115 / 15%)',
      list_color: '#FAFAFA'
    }
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      theme: this.props.activeTheme === 'light' ? themes.light : themes.dark,
      isScroll: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    
    if(this.props.currentMenu === ""){
      this.props.updateMenuState("HOME")
    }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    let isScroll = false
    if(window.scrollY > 30){
      isScroll = true
    }

    if(isScroll !== this.state.isScroll){
      this.setState({isScroll: isScroll})
    }
  }

  updateMenu = (menu, param=null) =>{
    if(menu === 'DETAIL' && param !== null){
      this.props.updateCurrentPokemon(JSON.stringify(param))
    }
    this.props.updateMenuState(menu)
  }

  changeTheme = (t) =>{
    this.props.updateTheme(t)
    this.setState({theme: t === 'dark' ? themes.dark : themes.light})
  }

  updateMyPokemonList = (param) =>{
    let res = true
    let data = JSON.parse(this.props.myPokemonList)
    let isPokemonMatch = data.findIndex(x=>x.id === param.id && x.nickname.toLowerCase() === param.nickname.toLowerCase())

    if(isPokemonMatch !== -1){
      toast.dismiss()
      toast.error('The pokemon already exist!')
      res = false
    }

    if(res){
      data.push(param)
      this.props.updateMyPokemonList(JSON.stringify(data))
    }

    return Promise.resolve(res);
  }

  removePokemon = (id) =>{
    let res = false
    let data = JSON.parse(this.props.myPokemonList)
    let idRemoved = data.findIndex(x=>x.id === id)
    if(idRemoved !== -1){
      data.splice(idRemoved, 1)
      this.props.updateMyPokemonList(JSON.stringify(data))
      res = true
    }

    return Promise.resolve(res);
  }

  render(){
    return (
      <ThemeProvider theme={this.state.theme}>
        <MainWrapper>
          <section id="header">
          {this.props.currentMenu === "HOME" ? 
          <MainHeaderComponent changeMenu={this.updateMenu} isScroll={this.state.isScroll}
          changeTheme={this.changeTheme} theme={this.props.activeTheme} listCount={this.props.myPokemonList}/>
          : 
          <DetailHeaderComponent menu={this.props.currentMenu} changeMenu={this.updateMenu} 
          isScroll={this.state.isScroll} removePokemon={this.removePokemon} current={this.props.currentPokemon}/>
          }
          </section>
            
          <section id="content">
              {this.props.currentMenu === "HOME" ? 
                <PokemonListPage changeMenu={this.updateMenu} data={this.props.myPokemonList}/> :
                this.props.currentMenu === "DETAIL" ?
                <PokemonDetailPage updateMyPokemonList={this.updateMyPokemonList}
                current={this.props.currentPokemon}/> :
                <MyCollectionPage data={this.props.myPokemonList} changeMenu={this.updateMenu} removePokemon={this.removePokemon}/>
              }
          </section>
          <ToastContainer
          theme='colored'
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          limit={1}
          />
        </MainWrapper>
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
