import React, { Component } from 'react';
import classes from './ListContainer.module.css'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import Modal from '../Modal/Modal'
import Spinner from '../../Spinner/Spinner'
class listContainer extends Component {
    state = {
        causesOfDeath: [],
        loading: false,
        data: [
            "https://cdn.shopify.com/s/files/1/2374/3709/products/SKULL_BONES_THUMB_1800x.png?v=1544578243",
            "https://www.scripps.edu/_files/images/science-and-medicines/600x400_heart_illustration_xray.jpg",
            "https://dolanlawfirm.com/wp-content/uploads/2016/11/Car-Crash-w1-1024x477.jpg",
            "https://assets3.parliament.uk/iv/main-large//ImageVault/Images/id_12990/scope_0/ImageVaultHandler.aspx.jpg",                
            "https://d2m3czf6fvb8bh.cloudfront.net/site_content/files/images/categories/lungs/pneumonia_xray_750.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1a/HIV-budding-Color.jpg",
            "https://image.shutterstock.com/image-illustration/malignant-neoplasm-stomach-anatomical-illustration-260nw-667694911.jpg",
            "https://www.rd.com/wp-content/uploads/2017/10/00_diabetes_if-you-re-diabetic-and-this-old-you-could-be-over-treated_569735008_maya-kruchankova.jpg",
            "https://cdn.poz.com/51829_Cirrhosis-iStock-510478300.jpg_dabda63d-16eb-407a-850a-4a5505e2acab_x2.jpeg",
            "https://steptohealth.com/wp-content/uploads/2017/08/1-headaches.jpeg",
            "https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/big_2/public/feature/images/viral_hepatitis.jpg?itok=IC4aK8x-",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdnF7G3i4jJJfKcxhF5zdzC3wjKAFdKxLAqcTInAmavIYkEUPOA",
            "https://askgramps.org/files/2006/02/suicide.jpg",
            "https://conceptodefinicion.de/wp-content/uploads/2017/11/Perinatal.jpg",
            "https://www.niddk.nih.gov/-/media/Images/Health-Information/Diabetes/landing/kidney.png",
            "https://www.criminal-lawyers.com.au/wp-content/uploads/2017/06/assault-300x225.jpg",
            "https://www.cdc.gov/copd/images/flexslider/copd-burden_575px.jpg",
            "https://f5h3y5n7.stackpathcdn.com/sites/default/files/neurons%20.jpg",
            "https://hellodoktor.com/wp-content/uploads/2017/07/septicemia.jpg",
            "https://cdn1.medicalnewstoday.com/content/images/articles/312/312579/kidneys.jpg",
        ]
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
                    image={this.state.data[key]}/>         
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