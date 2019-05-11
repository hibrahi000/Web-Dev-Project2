import React, { Component } from 'react';
import axios from 'axios'
import classes from './Slides.module.css'
import next from '../../assets/navigation/next.svg'
import before from '../../assets/navigation/before.svg'
class slides extends Component {

    state = {
        gameImages: [],
        displayBlock: true,
        index: 0
    }

    nextImage = () => {
        this.setState(prevState => ({
            index: prevState.index + 1
        }))
        let currentIndex = this.state.index
        if (this.state.index >= 9) {
            this.setState({ index: 0 })
        } else if (currentIndex === this.state.index) {
            this.setState({ displayBlock: true })
        } else {
            this.setState({ displayBlock: false })
        }
    }

    prevImage = () => {
        this.setState(prevState => ({
            index: prevState.index - 1
        }))
        let currentIndex = this.state.index
        if (this.state.index <= 0) {
            this.setState({ index: 9 })
        } else if (currentIndex === this.state.index) {
            this.setState({ displayBlock: true })
        } else {
            this.setState({ displayBlock: false })
        }
    }

    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/?fields=name,cover.url,genres.name,popularity&order=popularity:desc&expand=genres', {
            headers: {
                'user-key': 'c8953b7fd6ba8294e0bbcadd63970448',
                Accept: 'application/json',
                'X-Requested-With': XMLHttpRequest
            }
        }).then(res => {
            res.data.map(item => {
                this.setState(prevState => ({
                    gameImages: [...prevState.gameImages, item.cover.url.replace('thumb', 'screenshot_big')]
                }))
                // console.log(item.cover.url.replace('thumb', 'screenshot_big'))
            })
        }).catch(error => {
            console.log(error)
        })

        let auto = setInterval(() => {
            this.setState(prevState => ({
                index: prevState.index + 1
            }))
            if (this.state.index > 9) {
                this.setState({ index: 0 })
            }
        }, 10000)
    }

    render() {

        const styles = {
            
        }

        let slideShow = this.state.gameImages.map((item, index) => {
            return <div style={styles.image} key={index}><img src={item}/></div>
        })

        return (
            <div className={classes.Slides}>
                {slideShow[this.state.index]}
                <button onClick={this.prevImage}><img src={before}/></button>
                <button onClick={this.nextImage}><img src={next}/></button>
            </div>
        )
    }
}

export default slides;