import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render() {
        return(
            <div>
            <h2>Home</h2>
            <p>Welcome to the home page</p>
            <Link to="about">Learn More</Link>
            </div>
        );
    }
}
export default HomePage;