import React from 'react';
import Post from './Post';
import CommunityForm from './CommunityForm';

class Community extends React.Component {


    render(){
        return (
            <div>
                <h1>Community!</h1>
                < CommunityForm/>
                < Post />
            </div>
            )
        }
    }

export default Community; 