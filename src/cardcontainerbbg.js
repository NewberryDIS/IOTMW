import React from 'react';
import styled from "@emotion/styled"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {Menucontent} from './data'
import identities from './images/iotmw-identities.jpg'
import indianimagery from './images/iotmw-indian-imagery.jpg'
import peopleplacestime from './images/iotmw-people-places-time.jpg'
import property from './images/iotmw-property.jpg'
import thehomelanditsuse from './images/iotmw-the-homeland-its-use.jpg'
import themarketplace from './images/iotmw-the-marketplace.jpg'
import treaties from './images/iotmw-treaties.jpg'

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
`
const Listitem = styled.li`
    font-family: 'Lato', sans-serif;
    font-style: italic;
    // font-size: 1.1rem;
    font-weight: 900;
    padding: 25px;
    margin: 5px 0;
    border: 2px solid white;
    border-radius: 4px;
    background-color: rgba(0,0,0,0.15);
    color: white;
    -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.65);
    -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.65);
    box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.65);
`
const Closer = styled.div`
    font-style: normal;
    position: fixed;
    top: 5px;
    right: 5px;
    cursor: pointer;
    padding: 5px 10px;
    font-weight: 900;
    border-radius: 8px;
    background-color: rgba(0,0,0,0.15);
    border: 2px solid white;
    color: white;
    font-size: 2rem;
    -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.15);
    box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.15);
    &::after {
        content: "\u274C";
    }
`
function Modal(props) {
    const images = {
        'identities': identities,
        'indian-imagery': indianimagery,
        'people-places-time': peopleplacestime,
        'property': property,
        'the-homeland-its-use': thehomelanditsuse,
        'the-marketplace': themarketplace,
        'treaties': treaties
    }
    return (
        <div css={css`
            font-style: italic;
            font-size: 1.1rem;
            font-weight: 400;

            position: fixed;
            top: 0;
            left: 0;
            width:100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.1);
        `}>
            <div css={css`
                position:fixed;
                width: 300px;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                
                background: rgba(37,37,37,0.5);
                border: 2px solid white;
                border-radius: 8px;
                -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.15);
                -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.15);
                box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.15);

                display: flex;
                overflow: hidden;
                flex-direction: column;
                & a {
                    color: white;
                    // font-size: 1.02rem;
                    font-weight: 900;
                }
            `}>
                <div  css={css`
                    flex: 300px;
                    height: 300px;
                    overflow: hidden;
                    & img {
                        overflow: hidden;
                        height: 300px;
                    }
                `} ><img alt="" src={images[Menucontent[props.content][0]]}/></div>
                <div css={css`
                    flex: 5;
                    padding: 10px 25px;
                    display: flex;
                    flex-direction: column;
                `}>
                    <p css={css`
                        flex: 2;
                    `}>
                        {Menucontent[props.content][3]}
                    </p>
                    <p css={css`
                        flex: 1;

                    font-family: 'Libre Baskerville', serif;
                    font-size: 0.9rem;
                    font-weight: 100;
                    font-style: normal;
                        & a {
                            text-decoration: underline;
                        }
                    `}>
                        Go to <a href={'https://publications.newberry.org/digital/indians-midwest/' + Menucontent[props.content][0] + '.html'} css={css`text-decoration: underline;`} >{Menucontent[props.content][1]}</a> to learn more.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default class Cardcontainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            content: ''
        };    
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (index) => {
        this.setState({
            isHidden: !this.state.isHidden,
            content: index
        })
    }
    
    render(){
        return (
            <div css={css`
                // width: 100%;
                padding: 20px;
                margin: 10px;
                display: flex;
                flex-wrap: wrap;
            `}>
                <List>
                    {Menucontent.map((item, index) => 
                        index < 7 ? <Listitem key={index} answer={item[3]} css={css`flex-basis: 17%;`} onClick={() => this.handleClick(index)}>{item[2]}{!this.state.isHidden && [<Modal content={this.state.content}  />,<Closer />]}</Listitem> : ''
                    )}
                </List>
            </div>
        )}
}