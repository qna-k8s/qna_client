import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './SearchBar.styles.css';
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText:""
        }
    }
    onTextChange=(event)=>{
        this.setState({searchText:event.target.value})
    }
    render(){
        return (
            <div className="searchBar">
                <input 
                    type="text" 
                    placeholder="search question"
                    className="textInput"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    />
                <div className="icon">
                    <FontAwesomeIcon icon={faSearch} size="2x"/>
                </div>
            </div>
        )
    }
}
export default SearchBar;