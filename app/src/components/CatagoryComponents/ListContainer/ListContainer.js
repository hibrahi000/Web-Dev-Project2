import React, { Component } from 'react';
import classes from './ListContainer.module.css'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import Modal from '../../Modal/Modal'
import Spinner from '../../Spinner/Spinner'
class listContainer extends Component {
    state = {
        causesOfDeath: [],
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true})
        axios.get('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD', {
        }).then(res => {
            res.data.meta.view.columns[9].cachedContents.top.map((item, index) => {
                this.setState(prevState => ({
                    causesOfDeath: [...prevState.causesOfDeath, item.item]
                }))
            })
            this.setState({ loading: false})
        }).catch(e => {
            console.log(e)
        })
    }

    render() {

        let typesOfDeath = this.state.causesOfDeath.map((item, key) => {
            return (
                <Grid key={key} item xs >
                    <Modal 
                    causesOfDeath={this.state.causesOfDeath[key]}
                    imageTitle={item}
                    title={item}
                    image="https://www.scripps.edu/_files/images/science-and-medicines/600x400_heart_illustration_xray.jpg"/>         
                </Grid>
            )
        })

        if (this.state.loading) {
            typesOfDeath = <Spinner />
        }

        return (
            <div className={classes.ListContainer}>
                <Grid 
                    container
                    spacing={24}
                    align="center"
                >
                    {typesOfDeath}
                </Grid>

            </div>
        );
    }
};

export default listContainer;