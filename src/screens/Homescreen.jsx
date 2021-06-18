import React from 'react';
import Header from '../components/Header.component';
import SearchBar from '../components/SearchBar.component';
import './Homescreen.styles.css';
import AccountModal from '../components/AccountModal.component';
import QuestionContainer from '../components/QuestionConatiner.component';
import {getQuestions} from '../utils/APIManager';
import CustomButton from '../components/CustomButton.component';
// import { Link } from 'react-router-dom';

class Homescreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isAccountModalVisible:false,
            first_name:'',
            username:'',
            last_name:'',
            questions:[]
        }
    }
    showAccountModal=()=>{
        this.setState({...this.state,isAccountModalVisible:true})
    }
    hideAccountModal=()=>{
        this.setState({...this.state,isAccountModalVisible:false});
    }
    async componentDidMount(){
        try{
            const res = await getQuestions();
            this.setState({...this.state,questions:res.content});
        }
        catch(err){
            console.log(err);
        }
    }
    navigateToCreateQuestion=()=>{

    }
    render(){
        const {history} = this.props;
        return (
            <div style={{position:'relative',height:'100vh'}}>
                <div className="homeContainer">
                    <Header showAccountModal={this.showAccountModal}/>
                    <div className="mainContainer">
                        <div className="searchContainer">
                            <SearchBar/>
                            {/* <Link to="/question" className="askQuestionButton"><CustomButton isHighlighted={true}>Ask Question</CustomButton></Link> */}
                            <CustomButton isHighlighted={true} onClick={()=>{history.push("/question")}}>Ask Question</CustomButton>
                        </div>
                        <QuestionContainer questions={this.state.questions}/>
                    </div>
                </div>
                {this.state.isAccountModalVisible?<AccountModal hideAccountModal={this.hideAccountModal}/>:null}
            </div>
        );
    }
}

export default Homescreen;