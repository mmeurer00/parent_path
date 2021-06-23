import React from 'react';

class CommunityForm extends React.Component {
    constructor(){
        super()
        this.state = {
            formInput: {
                title: "",
                content: "",
                tag: "",
                location: "",
                user_id: 1    }
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state.formInput,
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log("working for submit!")
    }

    render(){
        return (
        <form onSubmit={this.handleFormSubmit}>
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

export default CommunityForm; 