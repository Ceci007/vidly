import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
    state = {
        collapsed: true,
        user: this.props.user
    }

    toggleNavbar = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render(){
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        const { user } = this.props;

        return ( 
            <nav className= "navbar navbar-expand-lg navbar-light bg-light">
                <div className = "container">
                <Link className = "navbar-brand" to = "/">
                    <img src = "https://github.com/Ceci007/images/blob/master/img-vidly/logo.png?raw=true"
                     alt = "logo" className = "logo"
                    />
                </Link>
                <button  
                onClick={this.toggleNavbar} 
                className={`${classTwo} p-2`} 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarResponsive" 
                aria-controls="navbarResponsive" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className = "navbar-toggler-icon"></span>
                    <span className = "navbar-toggler-icon"></span>
                    <span className = "navbar-toggler-icon"></span>
                </button>
                <div className={`${classOne}`} id="navbarResponsive">
                    <ul className = "navbar-nav">
                    <li className = "nav-item mx-auto">
                        <NavLink className = "nav-link" to = "/movies" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>Movies</NavLink>
                    </li>
                    <li className = "nav-item mx-auto">
                        <NavLink className = "nav-link" to = "/customers" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>Customers</NavLink>
                    </li>
                    <li className = "nav-item mx-auto">
                        <NavLink className = "nav-link" to = "/rentals" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>Posters</NavLink>
                    </li>
                    {!user && 
                        <React.Fragment>
                            <li className = "nav-item mx-auto">
                                <NavLink className = "nav-link" to = "/login" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>Login</NavLink>
                            </li>
                            <li className = "nav-item mx-auto">
                                <NavLink className = "nav-link" to = "/register" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>Register</NavLink>
                            </li>
                        </React.Fragment>
                    }
                    {user && 
                        <React.Fragment>
                            <li className = "nav-item mx-auto">
                                <NavLink className = "nav-link" to = "/profile" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>{user.name}</NavLink>
                            </li>
                            <li className = "nav-item mx-auto">
                                <NavLink className = "nav-link" to = "/logout" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>Logout</NavLink>
                            </li>
                        </React.Fragment>
                    }
                    </ul>
                </div>
                </div>
            </nav>
         );
    }
}
 
export default NavBar;