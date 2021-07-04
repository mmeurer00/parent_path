import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/postSlice'
class FavoriteCard extends React.Component {

    constructor(props) {
        super(props)
    }


    componentDidMount(){
        this.props.loadPosts()
    }

    render(){
        
        // console.log(this.props.posts)
       
        let favPost = {}
        let postIt = this.props.posts.map(post => {
            if(post.id == this.props.favorite.post_id)
                return favPost = {
                    title: post.title, 
                    content: post.content
                }
        })
            
        return (
            <div className="card">
                <div className="card__content">
                    <div className="card__header"></div>
                        <h1>{this.props.favorite.id}</h1>
                        <p>{favPost.title}</p>
                        <p>{favPost.content}</p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadPosts: () => {
          dispatch(fetchPosts())
      }  
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.all
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCard)