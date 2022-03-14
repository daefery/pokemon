import { useState } from 'react'
import {Image, Icon, Menu, Label, Modal, Button, Header} from 'semantic-ui-react'
import { MainHeader, DetailHeader } from './../components/'
import logo from '../assets/images/logo.svg'
import { toast } from 'react-toastify'

export const MainHeaderComponent = (props) =>{
    const amountList = JSON.parse(props.listCount)
    const _changeTheme = (t, e) =>{
        props.changeTheme(t)
    }
    return(
        <MainHeader>
            <Menu borderless fixed='top' className={props.isScroll ? 'shadow' : ''}>
                <Menu.Item>
                    <Image src={logo} width="120" height="50" alt="logo"/>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={"div"} onClick={_changeTheme.bind(null, props.theme === 'light' ? 'dark' : 'light')}>
                        {props.theme === 'light' ?
                        <Icon name='moon' size='large'/>: 
                        <Icon name='sun' color='yellow' size='large'/>
                        }
                    </Menu.Item>
                    <Menu.Item as={"div"} onClick={props.changeMenu.bind(null, 'COLLECTION')}>
                        <Icon name='unordered list' size='large' link/>
                        <Label color='green' circular floating size='mini'>
                        {amountList.length > 9 ? '9+' : amountList.length}
                        </Label>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </MainHeader>
        
    )
}

export const DetailHeaderComponent = (props) =>{
    const [showModal, setShowModal] = useState(false)
    const currentPokemon = JSON.parse(props.current)

    const removePokemon = () =>{
        props.removePokemon(currentPokemon.id).then(function(v) {
            toast.dismiss()
            if(v){
                toast.success('Pokemon released!')
                setShowModal(false)
                props.changeMenu('DETAIL', {id: currentPokemon.id})
            }else{
                toast.error('Failed to release the pokemon!')
            }
        })
    }

    const backAction = () =>{
        let target = props.menu === 'COLLECTION' ? 'HOME' : currentPokemon.nickname !== undefined ? 'COLLECTION' : 'HOME'
        props.changeMenu(target)
    }

    return(
        <DetailHeader>
            <Menu borderless fixed='top' className={props.isScroll ? 'shadow' : ''}>
                <Menu.Item onClick={backAction}>
                    <Icon name='arrow left' size='large'/> {props.menu === 'COLLECTION' ? 'My Pokemon List' : null}
                </Menu.Item>
                {props.menu !== 'COLLECTION' && currentPokemon.nickname !== undefined ? 
                <Menu.Menu position='right'>
                    <Menu.Item onClick={()=>setShowModal(true)} data-testid="btn-release">
                        <Icon name='trash'/>
                    </Menu.Item>
                </Menu.Menu>
                : null}
            </Menu>
            <Modal basic open={showModal} size='mini'>
                <Modal.Content>
                    <Header as="h2" inverted>Are you sure want to release the pokemon?</Header>
                </Modal.Content>
                <Modal.Actions>
                    <Button size='small' onClick={removePokemon} data-testid="btn-yes">Yes</Button>
                    <Button size='small' negative onClick={()=>setShowModal(false)} data-testid="btn-no">No</Button>
                </Modal.Actions>
            </Modal>
        </DetailHeader>
    )
}