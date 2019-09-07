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


export default function (props) {
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
        margin: 15px;
        display: flex;
        flex-wrap: wrap;
        max-height: 800px;
        // margin-left: -8px; /* Adjustment for the gutter */
        counter-reset: brick;
        width: 100%;
        `}>
            {Menucontent.map((item) =>
             item[0] === 'are-midwest-indians-typical' ? '' : 
             <div css={css`
             flex: 200px;
             border-radius: 8px;
             overflow: hidden;
             border: 2px solid white;
                width: 250px;
                background-color: rgba(0,0,0,0.65);
             
  margin: 0 8px 8px 0; /* Some gutter */
             `}>

                <img alt={item[1]} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
                    css={css`
                        width: 100%;
                        background-image: url('${images[item[0]]}');
                        background-size: 100%;
                        background-repeat: no-repeat;
                    `}/>
                <div css={css`
                    color: white;
                padding: 15px;
        font-family: 'Lato', sans-serif;
                `}>
                    <p>{item[2]}</p>
                    <span className="cardsubtext"><em>{item[3]}</em></span>
                </div>
            </div>
            )}
        </div>
    )
}