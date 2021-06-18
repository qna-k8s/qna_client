import React from 'react';
import './Header.styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isAccountModalVisible:false,
            first_name:'',
            username:'',
            last_name:''
        }
    }
    render(){
        return (
            <div className='headerContainer'>
                <div>QNA_HEADER</div>
                <div onClick={this.props.showAccountModal} className='accountContainer'>
                    <span className="accountNameText">{this.props.username?this.props.username:'ACCOUNT_NAME'}</span>
                    <FontAwesomeIcon icon={faUserCircle} size={'2x'}></FontAwesomeIcon>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        username:state.userDetails.username
    }
}
export default connect(mapStateToProps)(Header);