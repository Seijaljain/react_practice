import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render() {
        return(
             <div className="jumbotron">
            <h2>Home</h2>
            <p>Welcome to the home page</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more</Link> 
            </div>
        );
    }
}
export default HomePage;