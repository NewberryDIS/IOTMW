import React from 'react';
// import Corecontent from './corecontent'
import Menu from './menu'
import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import Cardcontainerbbg from './cardcontainerbbg'

const Corecontent  = styled.div`
    border-radius: 4px;
    border: 2px solid white;
    -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
    text-align: left;
    background-color: rgba(0,0,0,0.65);
    font-family: 'Lato', sans-serif;
    // flex: 2;
    // width: 75%;
    @media only screen and (max-width: 900px) { width: 100%;}
    color: white;
    padding: 20px;
    // margin: 10px auto;
    margin: auto;
    display: inline-block;
    & h2 {
        font-family: 'Libre Baskerville', serif;
    }
`
const Main = styled.div`
    width: 55%;
    // margin: 0 auto 60px auto;
    margin: auto;
    // overflow: visible;
    @media only screen and (max-width: 800px) { width: 85%; margin: 20px auto;}
`
const Title = styled.h1`
    margin: 0;
    text-align: center;
    font-family: 'Libre Baskerville', serif;
    text-transform: uppercase;
`
export default class ContentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // hoverstuff: ''
        };    
    }
    render(){
        return (
            <div>
                <Global styles={css`
                 .big {
                        font-size: 3rem;
                        line-height: 2rem;
                    }
                    .sm {
                        font-size: 1.5rem;
                        line-height: 1rem;
                    }
                    .bot {
                        vertical-align: top;
                    }
                `}/>
                <div css={css`padding-top: 2rem;`}>
                    <Title>
                        <span className="big top">Indians</span>
                        <span className="sm top">of</span>
                    </Title>
                    <Title>
                        <span className="sm bot">the</span>
                        <span className="big bot">Midwest</span>
                    </Title>
                </div>
                {/* <Menu page={this.props.page} callbackFromParent={this.myCallback} /> */}
                <Menu callbackFromParent={this.myCallback} />
                <Main>
                    <Corecontent>
                        <h2>Welcome to Indians of the Midwest, Past and Present</h2>
                        <p>When the American public is presented with media accounts, public policy, and school curriculum concerning Indian people, the reaction may be curiosity, confusion, and even skepticism. How can we obtain a better understanding of such information? This site addresses this question by highlighting recent research of scholars who have provided new insights about the cultures and histories of Indian peoples in the Midwest. Academic research can show how modern-day issues have roots in regional history and culture and provide necessary background for understanding contemporary issues.</p>
                        <p>In the Midwest—defined here as Michigan, Wisconsin, Minnesota, Illinois, Indiana, and Ohio — there are 34 federally recognized tribes and others seeking recognition. Members of these communities generously contributed information about contemporary life. On “Indians of the Midwest,” you can explore seven important issues, learn how to do further research, and gain an introduction to the research methods that underlie scholars’ findings.</p>
                        <Cardcontainerbbg />
                    </Corecontent>
                </Main>
            </div>
        )
    }
}