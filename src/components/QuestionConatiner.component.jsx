import React from 'react';
import QuestionItem from './QuestionItem.component';
import './QuestionContainer.styles.css';
class QuestionContainer extends React.Component{
    render(){
        return (
            <div className="questionContainer">
                {this.props.questions.map((question,index)=>(
                    <QuestionItem key={index} questionData={question}/>))}
            </div>
        )
    }
}
export default QuestionContainer;