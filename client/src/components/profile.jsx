import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { user } = this.props;
    
    return ( 
      <div>
        <div className="height"></div>
        <h5 className = "text-center">Welcome to Vidly</h5>
      </div>
    );
  }
}
 
export default Profile;