import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'
import { bindActionCreators } from 'redux'
import { userInfo } from 'os';

class UserDetail extends Component {
    render = () => {
        const {currentUser} = this.props;
        return <div>
            Utilisateur selectionné : <br />
            {currentUser ? displayUser(currentUser) : 'Aucun'}
        </div>
    }
}

const displayUser = (user) => `Nom: ${user.name} - ID : ${user.id} - Role : ${user.role}`
const mapStateToProps = (state) => ({currentUser: state.currentUser})
export default connect(mapStateToProps)(UserDetail)