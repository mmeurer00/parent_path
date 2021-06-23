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
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
        <form >
            <h2>Make a post!</h2>
            <div>
                <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
                <label htmlFor="title">Title</label>
            </div>
            <div>
                <input type="tag" name="tag" placeholder="tag" onChange={this.handleChange} />
                <label htmlFor="tag">Tag</label>
            </div>
            <div>
            <input type="content" name="content" placeholder="content" onChange={this.handleChange}/>
            <label htmlFor="content">Content</label>
            </div>
            <input type="submit" value="Create Post" />
        </form>
        );
    }
}

export default CommunityForm; 