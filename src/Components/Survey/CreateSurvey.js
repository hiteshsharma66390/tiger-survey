import React, { Component } from 'react'
import styled from 'styled-components';
import 'react-dropdown/style.css';

const CreateSurveyWrapper = styled.div`
    width:100vw;
    height:100vh;
    background:coral;
    display:flex;
    flex-direction:column;
    align-items:center;
    h1{
        text-align:center;
        margin:1em 0;
        font-family: 'ZCOOL QingKe HuangYou', cursive;
    }
    .dropdown-container{
        width:16em;
        height:4em;
        margin:0 0 2em 0;
        select{
            width:100%;
            height:2em;
        }
        
    }
    .question-container{
        width:100vw;
        height:auto;
        display:flex;
        flex-direction:column;
        align-items:center;
        .question{
            display:flex;
            justify-content:center;
            align-items:center;
            width:80%;
            margin:0 0 2em 0;
            .question-input{
                width:100%;
                display:flex;
                align-items:center;
                i{
                margin:0 0 0 0;
                width:4%
                }
                input{
                color: #333;
	            margin: 0 auto;
                padding: 1em 2em;
                border-radius: 0.2em;
                background-color: rgb(255, 255, 255);
                border: none;
                width: 90%;
                display: block;
                border-bottom: 0.3rem solid transparent;
                transition: all 0.3s;
                }
            }
            
        }
        label{
            margin:1em 0;
        }
        .options{
            width:16em;
            display:flex;
            justify-content:center;
            align-items:center;
            input{
                color: #333;
	            margin: .1em auto;
                padding: .5em 2em;
                border-radius: 0.2em;
                background-color: rgb(255, 255, 255);
                border: none;
                width: 90%;
                display: flex;
                align-items:center;
                border-bottom: 0.3rem solid transparent;
                transition: all 0.3s;
            }
        }
    }
    #publish-btn{
        margin:2em 0;
    }

    

`

export default class CreateSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionType: "multi-select",
            questionText: "",
            optionText: "",
            question: {
                text: "",
                options: []
            },

            questions: []
        }
    }
    getOptionsLimit = () => {
        if (this.state.questionType === "single-select") return 2;
        else if (this.state.questionType === "multi-select") return 4;
        else return 0;
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            question: {
                ...this.state.question, text: this.state.questionText
            }

        })
    }
    handleQuestionType = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            questionText: "",
            question: {
                ...this.state.question, options: []
            }
        })
    }
    addOption = (e) => {
        if (this.state.optionText !== "") {
            this.setState({
                question: {
                    ...this.state.question,
                    options: [
                        ...this.state.question.options,
                        this.state.optionText
                    ]
                },
                optionText: ""
            })
        }

    }
    removeOption = (option) => {
        this.setState({
            question: {
                ...this.state.question,
                options: this.state.question.options.
                    filter((optionElement) => {
                        return optionElement !== option
                    })
            }
        })
    }
    handleKeyDown = (e) => {
        if (e.key === "Enter") {
            this.setState({
                question: {
                    ...this.state.question, text: this.state.questionText
                }
            })
        }
    }
    addQuestion = () => {
        if (this.state.questionText !== "") {
            let list = [...this.state.questions, this.state.question]
            this.setState({
                questions: list,
                questionText: "",
                question: {
                    ...this.state.question, options: []
                }
            })
        }

    }
    publish = () => {
        console.log(this.state.questions);
    }
    render() {
        return (
            <CreateSurveyWrapper>
                <h1>Create Survey</h1>
                <div className="dropdown-container" id="survey-dropdown" >
                    <select name="questionType" id="lang" onChange={this.handleQuestionType} value={this.state.questionType}>
                        <option value="select">Select Question Type</option>
                        <option value="multi-select">Multi-select</option>
                        <option value="single-select">Single-select</option>
                    </select>

                </div>
                {this.state.questionType === "select" ? "" :
                    <div className="question-container">
                        <div className="question">
                            <div className="question-input">
                                <i class="fas fa-question fa-2x"></i>
                                <input name="questionText" value={this.state.questionText}
                                    onChange={this.change}
                                    onKeyDown={this.handleKeyDown}
                                    placeholder="Enter your question here"
                                >
                                </input>
                            </div>


                        </div>
                        <label>Options</label>
                        <>
                            {this.state.question.options.length > 0 &&
                                this.state.question.options.map((value, index) => {
                                    return (
                                        <div className="options">
                                            <input value={value} id={value}></input>
                                            <i class="fas fa-minus" onClick={() => { this.removeOption(value) }}></i>
                                        </div>
                                    )
                                })
                            }


                        </>
                        {
                            this.state.question.options.length < this.getOptionsLimit()
                                ?
                                <div className="options">
                                    <input value={this.state.optionText} onChange={this.change} name="optionText" placeholder="Type answer here"></input>
                                    <i class="fas fa-plus" onClick={this.addOption} >

                                    </i>
                                </div>
                                :
                                <>
                                    <button onClick={this.addQuestion}>Add Question</button>

                                </>
                        }
                        {this.state.questions.length > 0
                            &&
                            <button id="publish-btn" onClick={this.publish}>Publish</button>
                        }
                    </div>
                }
            </CreateSurveyWrapper>
        )
    }
}
