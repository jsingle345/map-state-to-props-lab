import React, { Component } from 'react';
import { connect } from 'react-redux'
import User from './User'
// add any needed imports here
class Users extends Component {

  render() {
    const userList = this.props.users.map(user => <User user={user}/>)
    return (
      <div>
        <ul>
          { this.props.users.length}
          { userList }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
