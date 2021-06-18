import React from 'react';
import './CreateQuestion.styles.css'
import Chip from '../components/chips.component'
import CustomButton from '../components/CustomButton.component';
import {convertToBase64} from '../utils/Helpers';
import {connect} from 'react-redux'
import {submitQuestion} from '../utils/APIManager'
class CreateQuestionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionText: '',
            tags: [],
            tagInput: '',
            errorMsg:''
        };
    }
    onChangeListener = (event) => {
        const type = event.target.name;
        this.setState({
            ...this.state, [type]: event.target.value
        });
    }
    deleteChip = (text) => {
        this.setState({
            ...this.state,
            tags: this.state.tags.filter((item) => { return item !== text })
        })
    }

    addChip = (event) => {
        if (!event.target.value)
            return;
        if (['Tab', 'Enter'].includes(event.key)) {
            event.preventDefault();
            if(this.state.tags.includes(event.target.value)){
                this.setState({
                    ...this.state,
                    tagInput:''
                })
                return ;
            }
            this.setState({
                ...this.state, tags: [...this.state.tags,event.target.value],
                tagInput:''
            })
        }
    }
    handleSubmission=async (event)=>{
        try{
            event.preventDefault();
            const {username,password} = this.props;
            const questionRequest={questionText:this.state.questionText,categories:[]};
            this.state.tags.map(tag=>questionRequest.categories.push({
                category:tag
            }))
            console.log(username,password)
            await submitQuestion(convertToBase64({username,password}),questionRequest)
            this.setState({
                ...this.state,errorMsg:''
            })
        }
        catch(err){
            this.setState({
                ...this.state,errorMsg:err.message?err.message:'Something went wrong'
            })
            // console.log(err);
        }
    }
    renderError(){
        return(
            this.state.errorMsg?
            <div className="question-errormsg-container">
                <p>{this.state.errorMsg}</p>
            </div>:null
        );
    }
    render() {
        return (
            <div className="container">
                <h3>Ask a question by filling this form</h3>
                <form className="question-form" onSubmit={this.handleSubmission}>
                    <input type="text" placeholder="Question" name="questionText" 
                    onChange={this.onChangeListener} value={this.state.questionText} 
                    className="question-text"/>
                    <div className="question-tags-container">
                        {this.state.tags.map((tag) => {
                            return <Chip key={tag} deleteChip={this.deleteChip}>{tag}</Chip>
                        })}
                        <input type="text" placeholder="Tags" className="question-tags-input"
                            onKeyDown={this.addChip}
                            value={this.state.tagInput}
                            name="tagInput"
                            onChange={this.onChangeListener}
                        />
                    </div>
                    {this.renderError()}
                    <CustomButton type="submit" isHighlighted={true}>Submit</CustomButton>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        username:state.userDetails.username,
        password:state.userDetails.password
    }
}
export default connect(mapStateToProps)(CreateQuestionScreen);