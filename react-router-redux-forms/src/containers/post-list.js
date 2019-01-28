import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { readAllPosts, deletePost } from '../actions/index'
import { PostListItem } from '../components/post-list-item'
import { Link } from 'react-router'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {loading: true}
    }
    
    componentWillMount = () => {
        this.setState({loading: true})
        this.props.readAllPosts()
        this.setState({loading: false})
    }

    delete = (post) => {
        this.props.deletePost(post.id)
    }

    displayPosts = (posts) => posts.map((post) => {
        return <PostListItem key={post.id} post={post} delete={this.delete} />
    })

    render() {
        return (
            <div>
                <h1>Liste des articles disponibles</h1>
                <div className="add_button">
                    <Link to="create-post">
                        <button className="btn btn-primary btn-circle btn-lg">+</button>
                    </Link>
                </div>
                <table>
                    <tbody>
                        {this.props.posts && !this.state.loading ? this.displayPosts(this.props.posts) : 'Aucun article disponible'}                        
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({posts: state.posts})
const mapDispatchToProps = (dispatch) => ({...bindActionCreators({readAllPosts, deletePost}, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);