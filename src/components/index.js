import styled from '@emotion/styled'

const colors = {
    pink: '#D19EA8',
    green: '#4AD0AF',
    red: '#F7776A',
    black: '#777776',
    blue: '#76BEFE',
    brown: '#B6847F',
    gray: '#CCC4C4',
    purple: '#7C528C',
    yellow: '#F5C474',
    white: '#E6E0D2',
    primary: '#FFCB03',
    secondary: '#19232b'
}

export const CenterWrapper = styled.div`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const PokemonCard = styled.div`
    width: 100%;
    height: 130px;
    background-color: ${props => colors[props.color]};
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    h3{
        text-shadow: 0px 0px 1px rgb(0 0 0 / 10%);
    }
    .ui.label{
        background-color: #0000005e !important;
    }
`

export const MainWrapper = styled.div`
    background-color: ${props => props.theme.bg} !important;
`

export const MainHeader = styled.div`
    .ui.shadow.menu{
        box-shadow: ${props => props.theme.menu.shadow} !important;
    }
    .ui.menu{
        background-color: ${props => props.theme.bg} !important;
        box-shadow: none !important;

        .list.icon{
            color: ${props => props.theme.menu.list_color} !important;
        }
        .right.menu > .item{
            cursor: pointer;
        }
    }
`

export const DetailHeader = styled.div`
    .ui.shadow.menu{
        box-shadow: ${props => props.theme.menu.shadow} !important;
        background-color: ${props => props.theme.bg} !important;
    }
    .ui.menu{
        background-color: transparent;
        box-shadow: none;

        .item{
            font-size: 18px;
            color: ${props => props.theme.menu.list_color} !important;
        }
    }
`

export const Banner = styled.div`
    .ui.segment.bannerDetail{
        background-color: ${props => colors[props.color]};
        padding-top: 60px;
        height: 400px;

        h1{
            font-size: 38px !important;
            margin-left: 10px;
            text-transform: capitalize;
            margin-bottom: 5px;
            text-shadow: 0px 0px 1px rgb(0 0 0 / 10%);
        }

        .ui.inverted.header > p{
            font-size: 18px !important;
        }

        .ui.label{
            margin-left: 10px;
            background-color: #0000005e !important;
            color: #fafafa !important;
        }

        img{
            position: absolute !important;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            width: 260px;
            margin: auto;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 1;
            top: 120px;
        }
        img.collection{
            left: 30%;
        }
    }

    .detailInfo{
        margin-top: -60px;
        border-radius: 50px 50px 0 0;
        border: none;
        box-shadow: none;
        padding-top: 30px;
        padding-bottom: 30px;
        min-height: 60vh;
    }
`

export const CatchButton = styled.button`
    position: absolute;
    top: 63px;
    right: 0;
    border-radius: 50px 0px 0px 50px;
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    background: ${colors.primary} none;
    color: #0000009c;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0.78571429em 1.5em 0.78571429em;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgb(34 36 38 / 15%) inset;
    cursor: pointer;
`