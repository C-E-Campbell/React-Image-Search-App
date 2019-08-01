import React from 'react'
import axios from 'axios'
import Search from './Search'


class App extends React.Component {

    onSearchSubmit (term){
    //    call to axios function
    axios.get(`https://api.unsplash.com/search/photos/`, {
        params:{
            query: `${term}`
        },
        headers:{
            Authorization: 'Client-ID 1cf2819d8d4ab5a2a93da33a995fc6d3075e6e6463acd68881075dabeb69b507' 
        }
    }).then(function(response){
        console.log(response)
    })
    }

    render(){
        return (
            <div className = "ui container" style = {{marginTop: '10px'}}>
                <Search onSubmit={this.onSearchSubmit}></Search>
            </div>
            );
    }
    
}

export default App;