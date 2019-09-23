import React, {useState} from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {Menucontent} from './data'

function MenuButton() {
    const [toggle, setToggle] = useState(false);
    return (
            <div css={css`z-index: -1;`}>
            <div onClick={() => setToggle(!toggle)}
                css={css`
                display: block;
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(0,0,0,0);
                padding:5px;
                z-index: 3;
                transition: 0.2s;
                border: 2px solid transparent;

                &:hover {
                    border: 2px solid white;
                    border-radius: 6px;
                    background: rgba(0,0,0,0.65);
                    -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                    box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                    & .bar {
                        filter: drop-shadow(0 0 0.15rem white) ${!toggle && 'invert(100%)'};
                    }
                }
                .bar {
                    width: 35px;
                    height: 5px;
                    background-color: ${toggle ? 'white' : 'black' };
                    margin: 6px 0;
                    transition: 0.2s;
                }
                & .change.bar1 {
                    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
                    transform: rotate(-45deg) translate(-9px, 6px);
                }
                & .change.bar2 {opacity: 0;}
                & .change.bar3 {
                    -webkit-transform: rotate(45deg) translate(-8px, -8px);
                    transform: rotate(45deg) translate(-8px, -8px);
                }
            `}>
                <div className={(toggle ? 'change ' : '') +  'bar bar1'}></div>
                <div className={(toggle ? 'change ' : '') +  'bar bar2'}></div>
                <div className={(toggle ? 'change ' : '') +  'bar bar3'}></div>
        </div>
        {toggle ? <ResponsiveMenu /> : ''}
    </div>
        );
    }
const ResponsiveMenu = () => <div 
    css={css`
        background:  rgba(0,0,0,0.65);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-content: center;
        z-index: 1;
        & ul {
            z-index: 2;
            font-family: 'Lato', sans-serif;
            flex-grow: 1;
            list-style-type: none;
            margin: 10% auto;
            height: 50px;
            & a {
            border-radius: 6px;
                background:  rgba(0,0,0,0.65);
                display: block;
                border: 2px solid white;
                color: white;
                padding: 10px 15px;
                margin: 5px;
                &:hover {

                    -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                    box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                    font-weight: 900;
                }
            }
        }
    `}>
    <ul>
        {Menucontent.map((item, index) =>
            <li key={index}  >
                <a href={`https://publications.newberry.org/digital/indians-midwest/${item[0]}`}>{item[1]}</a>
            </li>
        )}
    </ul>
</div>
export default class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smallWindow: false 
        };
        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
    updatePredicate() {
        this.setState({ smallWindow: window.innerWidth > 1000 });
    }
    render(){
        const smallWindow = this.state.smallWindow
        return (
            <div>{smallWindow ? <Menu /> : <MenuButton />}</div>
        )
    }
}
 class Menu extends React.Component {
    render() {
        return (
            <div css={css`text-align: center;`}>
                <ul css={css`
                    display: flex;
                    width: 80%;
                    border-top: 1px solid rgba(0,0,0,0.65);
                    list-style-type: none;
                    padding: 0;
                    margin: 15px auto;
                `}>
                {Menucontent.map((item, index) =>
                    <li key={index} href={item[0]}  
                    css={css`
                        border-radius: 0px 0px 10px 10px;
                        -moz-border-radius: 0px 0px 10px 10px;
                        -webkit-border-radius: 0px 0px 10px 10px;
                        border: 2px solid transparent;
                        padding: 5px;
                        display: inline-block;
                        min-height: 45px;
                        overflow: wrap;
                        flex: 1;
                        text-align: center;
                        vertical-align: top; 
                        color: black;
                        text-decoration: none;
                        text-transform: uppercase;
                        font-family: 'Lato', sans-serif;
                            &:hover {
                                -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                                -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                                box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                                border-bottom: 2px solid white;
                                border-left: 2px solid white;
                                border-right: 2px solid white;
                                background: rgba(0,0,0,0.65);
                                & a, & span {
                                    color: white;
                                }
                            }
                            & a {
                                color: black;
                            }
                        }
                    `}
                        >
                        <a href={`https://publications.newberry.org/digital/indians-midwest/${item[0]}`}>{item[1]}</a>
                    </li>
                )}

            </ul>
        </div>
        )
    }
};