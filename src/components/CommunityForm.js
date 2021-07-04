import React from 'react';
import { createPosts } from '../redux/postSlice'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Button from './Button/Button'

const CardContainer = styled.div`
    position: 'center';
    width:'50%';
    height:'100%';
    margin: 3rem;
    align-items: 'center';
    justify-items: 'center';
`

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
        <CardContainer>
        <form className="form" onSubmit={(event) => this.handleFormSubmit(event, this.state.formInput)}>
            <h2>Share a Post!</h2>
            <div>
                <label htmlFor="title">Title: </label>
                <input
                    type="text" 
                    name="title" 
                    placeholder="Title"
                    onChange={this.handleChange}
                    value={this.state.formInput.title} />
            </div>
            <div>
                <label htmlFor="tag">Tag: </label>
                <input 
                    type="tag" 
                    name="tag" 
                    placeholder="tag" 
                    onChange={this.handleChange} 
                    value={this.state.formInput.tag}/>
            </div>
            <div>
                <label htmlFor="content">Content: </label>
                <input 
                    type="content" 
                    name="content" 
                    placeholder="content" 
                    onChange={this.handleChange}
                    value={this.state.formInput.content}/>
            </div>
            <div>
                <label htmlFor="link">Link: </label>
                <input 
                type="text" 
                name="link" 
                placeholder="link" 
                onChange={this.handleChange}
                value={this.state.formInput.link}/>
            </div>
            <Button type="submit">Create Post</Button>
        </form>
        </CardContainer>
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