import React, { Component } from 'react';
import axios from 'axios'
import classes from './Slides.module.css'
import health from '../../assets/cards/health-bulletin-language-matters-hero.jpg'
import testing from '../../assets/cards/lead-testing-hero.jpg'
import measles from '../../assets/cards/measles-hero-attention.jpg'
import tb from '../../assets/cards/tb-day-hero.png'
import prev from '../../assets/navigation/prev.svg'
import next from '../../assets/navigation/next.svg'

class slides extends Component {

    state = {
        heroCards: [
            health,
            testing,
            measles,
            tb
        ],
        index: 0,
        data: [

        ]
    }

    nextImage = () => {
        this.setState(prevState => ({
            index: prevState.index + 1
        }))
        if (this.state.index >= 3) {
            this.setState({ index: 0 })
        }
    }

    prevImage = () => {
        this.setState(prevState => ({
            index: prevState.index - 1
        }))
        if (this.state.index <= 0) {
            this.setState({ index: 3 })
        }
    }

    componentDidMount() {
        axios.get('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD', {
        }).then(res => {
            console.log(res.data.data[0])
        }).catch(error => {
            console.log(error)
        })
        let auto = setInterval(() => {
            this.setState(prevState => ({
                index: prevState.index + 1
            }))
            if (this.state.index > 3) {
                this.setState({ index: 0 })
            }
        }, 10000)
    }

    render() {

        let sliding = this.state.heroCards.map((index, key) => {
            return <div key={index}><img src={index}/></div>
        })

        return (
            <div className={classes.Slides}>
                <div>
                    <button onClick={this.prevImage}><img src={prev}/></button>
                </div>
                <div>
                    {sliding[this.state.index]}
                </div>
                <div>
                    <button onClick={this.nextImage}><img src={next}/></button>
                </div>
            </div>
        )
    }
}

export default slides;