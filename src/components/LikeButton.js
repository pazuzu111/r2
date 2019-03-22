import React, { Component } from 'react';

export default class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false
        }
    }

    componentDidMount() {
        let fav = localStorage.getItem(`${this.props.title}`)
        if(fav == null) {fav = false}

        this.setState({ liked: JSON.parse(fav) })
    }

    //toggle liked state to true or false
    toggleLike = (data) => {

        this.setState(prevState => ({
            liked: !prevState.liked
        }),() => { localStorage.setItem(`${this.props.title}`, this.state.liked) })

    }

    //onClick save item to favorites
    like = (data) => {
        this.toggleLike()
        let retrievedObject = localStorage.getItem("favorites");
        let stored = JSON.parse(retrievedObject);
        
        stored.push(data)
        localStorage.setItem('favorites', JSON.stringify(stored))
    }

    //onClick remove item from favorites
    unlike = (id) => {
        let retrievedObject = localStorage.getItem("favorites");
        let stored = JSON.parse(retrievedObject);
        let newArray = stored.filter(x => x.id !== id)
        
        localStorage.setItem('favorites', JSON.stringify(newArray))  
        this.toggleLike()
    }

    //if state of liked is false make a POST request else make a DELETE request
    methodHandle = (props) => {
        return  (this.state.liked === false) ?
                    this.like(this.props.info)
                    :
                    this.unlike(this.props.id)
    }

    render () {
        let css = {
            heart: this.state.liked ? "fa fa-heart fa-2x" : "far fa-heart fa-2x"
        }

        return (
            <i
               className={css.heart}
               onClick={e => this.methodHandle(this.props)}>
            </i>
        )
    }
}