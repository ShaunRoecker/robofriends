import React from 'react';
import CardList from "../components/CardList";
import { robots } from "../data/robots"
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import "./App.css"



class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }
//life-cycle hooks
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response =>response.json())
            .then(users => this.setState({robots: robots}));
        
    }


// anytime you have a function in a class that isn't a built-in method in
// React, use the arrow function syntax so that "this" knows you are talking about
// the constructor of this class and not the object its acting on    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })     
    }

    render(){
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robots => {
            return (robots.name.toLowerCase()
                    .includes(searchfield
                    .toLowerCase())
            )
        });
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
            return(
                <div className="tc">
                <h1 className="title--font f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                  <CardList robots={filteredRobots} /> 
                </Scroll>
                
                </div>
            );
        }

        
    }

}
export default App;