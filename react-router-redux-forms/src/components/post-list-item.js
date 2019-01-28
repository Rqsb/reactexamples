import React from 'react'
import { Link } from 'react-router'

export const PostListItem = (props) => {
    let post = props.post
    return <tr>
        <td><Link to={`post/${post.id}`}>{post.title}</Link></td>
        <td><button className="btn btn-danger" onClick={() => props.delete(post)}>Supprimer</button></td>
    </tr>
}