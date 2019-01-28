import React, { Component } from 'react';
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { createPost } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

const formConfig = {
    form: 'createPostForm',
    fields: ['title', 'content', 'author'],
    validate: values => {
        const errors = {}
        Object.entries(values).forEach(
            ([key, value]) => {
                if (!value) {
                    errors[key] = 'Please fill the ' + key
                }
            }
        )
        return errors
    },
    initialValues: {author: 'John Doe'}
}

class PostForm extends Component {
    render() {
        const {fields: {title, content, author}, handleSubmit, errors} = this.props
        return (
            <div>
                <h1>Créer un nouvel article</h1>
                <form onSubmit={handleSubmit(this.createPost)}>
                    <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                        <label>Title</label>
                        <input className="form-control" type="text" {...title}></input>
                        <div>{title.touched && errors.title}</div>
                    </div>
                    <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                        <label>Content</label>
                        <input className="form-control" type="textarea" {...content}></input>
                        <div>{content.touched && errors.content}</div>
                    </div>
                    <div className={`form-group ${author.touched && author.invalid ? 'has-danger' : ''}`}>
                        <label>Author</label>
                        <input className="form-control" type="text" {...author}></input>
                        <div>{author.touched && errors.author}</div>
                    </div>
                        <Link to="/">
                            <button className="btn btn-danger btn-form">Retour</button>
                        </Link>
                        &nbsp;
                        <button className="btn btn-info btn-form" disabled={this.props.invalid}>Créer</button>
                </form>
            </div>
        );
    }

    createPost = (post) => {
        this.props.createPost(post)
        browserHistory.push("/")
    }
}


const mapDispatchToProps = (dispatch) => ({...bindActionCreators({createPost}, dispatch)})
export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(PostForm));