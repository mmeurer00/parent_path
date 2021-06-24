import React from 'react';
import { createPosts } from '../redux/postSlice'
import { connect } from 'react-redux'

class CommunityForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            formInput: {
                title: "",
                content: "",
                tag: "",
                location: "",
                user_id: 1    },
            posts: []
        }
    }

    handleChange = (e) => {
        this.setState({
            formInput: {
            ...this.state.formInput,
            [e.target.name]: e.target.value
            }
        })
    }

    handleFormSubmit = (event, formInput) => {
        event.preventDefault()
        console.log(event.target)
       this.props.addPost(formInput)
    }

    render(){
        return (
        <form onSubmit={(event) => this.handleFormSubmit(event, this.state.formInput)}>
            <h2>Make a post!</h2>
            <div>
                <input
                    type="text" 
                    name="title" 
                    placeholder="Title"
                    onChange={this.handleChange}
                    value={this.state.formInput.title} />
                <label htmlFor="title">Title</label>
            </div>
            <div>
                <input 
                    type="tag" 
                    name="tag" 
                    placeholder="tag" 
                    onChange={this.handleChange} 
                    value={this.state.formInput.tag}/>
                <label htmlFor="tag">Tag</label>
            </div>
            <div>
            <input 
                type="content" 
                name="content" 
                placeholder="content" 
                onChange={this.handleChange}
                value={this.state.formInput.content}/>
            <label htmlFor="content">Content</label>
            </div>
            <input type="submit" value="Create Post" />
        </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (formInput) => {
            dispatch(createPosts(formInput))
        }
    }
}

 
export default connect(null, mapDispatchToProps)(CommunityForm)