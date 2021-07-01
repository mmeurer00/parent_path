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
        console.log(this.props.posts)
        // console.log("asdfasdf")
        // // console.log(this.props.posts)
        // // function favoritePost(favorite) {
        // //     this.props.posts.map(post => post.id == favorite.post_id)
        // // }
        // let test = this.props.posts
        // console.log(test)
        let post = []
        post.concat(this.props.posts.filter(post => post.id == this.props.favorite.post_id))
        console.log(post)
        // const favPost = favPosts.map(post => post.title)
        
        return (
            <div className="card">
                <div className="card__content">
                    <div className="card__header"></div>
                        <h1>{this.props.favorite.id}</h1>
                        <p></p>
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