import React, { Component } from 'react';
import PostContent from '../components/post-content'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { readPost } from '../actions/index'
import { Link } from 'react-router'

class Post extends Component {
    componentWillMount = () => this.props.params.id ? this.props.readPost(this.props.params.id) : null

    render() {
        return (
            <div>
                <Link to="/">
                    <h6>Return to index</h6>
                </Link>        
                {this.props.post ? <PostContent post={this.props.post} /> : 'Chargement ...' }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({post: state.currentPost})
const mapDispatchToProps = (dispatch) => ({...bindActionCreators({readPost}, dispatch)})
export default connect(mapStateToProps, mapDispatchToProps)(Post);