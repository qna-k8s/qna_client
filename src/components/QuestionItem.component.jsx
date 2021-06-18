/**
 * 
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './QuestionItem.styles.css';
import {formatTime} from '../utils/Helpers'

class QuestionItem extends React.Component{
    render(){
        const {questionText,answers,createdTimestamp,user} =  this.props.questionData;
        const formattedTime = formatTime(createdTimestamp)
        return (
            <div className="questionItemContainer">
                <div><Link to="">{questionText}</Link></div>
                <div className="timeStampBlock">
                    <div>{formattedTime}</div>
                    <div>{user.username}</div>
                </div>
                {answers.length>0?<div>{answers[0].answerText}</div>:null}
            </div>
        )
    }
}
export default QuestionItem;