import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const SurveyWrapper = styled.div`
    width:100vw;
    height:100vh;
    background:coral;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    .title{
        margin:2em 0;
        margin-bottom:4em;
        margin-right:5em;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:1em 2em;
        width:60%;
        height:auto;
        font-family: 'ZCOOL QingKe HuangYou', cursive;
        font-size:1.2em;
        img{
            margin-right:1em;
            height:4em;
            width:4em;
        }
    }
    .survey-action-container{
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        width:80%;
        height:20em;
        a{
            height:5em;
            margin-bottom:3em;
        }
        cursor:auto;
        button{
            width:16em;
            height:4em;
            padding:1em 2em;
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            text-align: center;
            text-decoration: none;
            margin-bottom:4em;
            font-size:1.1em;
            &:hover{
                transform:scale(1.1);
                cursor:pointer;
            }
        }
    }
    


    `
class Survey extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <SurveyWrapper>
                <div className="title">
                    <img src="https://svgsilh.com/svg/305512.svg" />
                    <h1>Tiger Survey</h1>
                </div>

                <div className="survey-action-container">

                    <Link to="/create-survey">
                        <button>Create Survey</button>
                    </Link>
                    <button>Take Survey</button>
                </div>
            </SurveyWrapper >
        )
    }



}
export default Survey