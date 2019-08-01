import React from 'react';

class Search extends React.Component {
    
    state = {
        term: ''
    }
    
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    
    render () {
        return (<div className = "ui segment">
          <form className = "ui form" onSubmit = {(event) => this.onFormSubmit(event)}>
              <label>Image Search</label>
              <input 
              className = "field" 
              type = 'text' 
              placeholder = 'Search Here' 
              value = {this.state.term} style = {{marginTop: '5px'}} 
              onChange = {e => this.setState({term: e.target.value})}>
              </input>
          </form>
            </div>)
    }
}

export default Search;