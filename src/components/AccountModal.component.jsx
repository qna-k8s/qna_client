import React from 'react';
import './AccountModal.styles.css';
import CustomButton from './CustomButton.component';
import {signUpUser,getUserInfo} from '../utils/APIManager'
import { convertToBase64 } from '../utils/Helpers';
import {connect} from 'react-redux';
import {setUserCredentails} from '../redux/user/action'
class AccountModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            errorMessage:''
        }
    }
    onChangeListener = (type) => (event) => {
        this.setState({
            ...this.state, [type]: event.target.value
        });
    }
    logInUser=async (event)=>{
        try{
            if(event.key && event.key !== 'Enter'){
                return;
            }
            event.preventDefault();
            const {username,password,firstName,lastName,isLogin}=this.state;
            if(isLogin){
                await getUserInfo(convertToBase64({username,password}));
            }
            else{
                await signUpUser({username,password,firstName,lastName});
            }
            this.props.setUserCredentails({username,password});
            this.props.hideAccountModal();
        }
        catch(err){
            this.setState({
                ...this.state,errorMessage:err.message
            })
        }

    }
    renderError(){
        return this.state.errorMessage.length?(
            <div className='errorMsgContainer'>
                <p>{this.state.errorMessage}</p>
            </div>
        ):null;
    }
    render() {
        return (
            <div>
                <div className="modalWrapper"></div>
                <div className="modalContainer">
                    <div className="contentContainer">
                        <div>
                            <h2>{this.state.isLogin ? 'Login' : 'Sign Up'}</h2>
                        </div>
                        {!this.state.isLogin ? (
                            <div className='inputContainer'>
                                <input type='text' placeholder="First name"
                                    onChange={this.onChangeListener('firstName')}
                                    value={this.state.firstName}
                                    required={true}
                                    className="account-input"
                                />
                                <input type='text' placeholder="Last name"
                                    onChange={this.onChangeListener('lastName')}
                                    value={this.state.lastName}
                                    required={true}
                                    className="account-input"
                                />
                            </div>
                        ) : null}
                        <input type='text' placeholder="Email"
                            onChange={this.onChangeListener('username')}
                            value={this.state.username}
                            required={true}
                            className="account-input"
                        />
                        <input type='text' placeholder="Password"
                            onChange={this.onChangeListener('password')}
                            value={this.state.password}
                            required={true}
                            className="account-input"
                            onKeyPress={this.logInUser}
                        />
                        <div><p className="signInText" onClick={()=>{this.setState({
                            ...this.state,
                            isLogin: !this.state.isLogin
                        })}}>Want to {this.state.isLogin?'Sign up':'Login'} ?</p></div>
                        {this.renderError()}
                        <div className="buttonContainer">
                            <CustomButton isHighlighted={true} onClick={this.logInUser}>{this.state.isLogin ? 'Login' : 'Sign up'}</CustomButton>
                            <CustomButton
                                onClick={this.props.hideAccountModal}
                                isHighlighted={false}
                            >Close</CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchStateToProps=(dispatch)=>{
    return {
        setUserCredentails:(creds)=>dispatch(setUserCredentails(creds))
    }
}
export default connect(null,mapDispatchStateToProps)(AccountModal);