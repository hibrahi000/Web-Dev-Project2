import React, { Component } from 'react';
import classes from './Footer.module.css'
import ListItems from '../ListItems/ListItems'
import github from '../../assets/socialmedia/github.png'
import linkedin from '../../assets/socialmedia/linkedin.png'
import twitter from '../../assets/socialmedia/twitter.png'
import instagram from '../../assets/socialmedia/instagram.png'
import SocialMedia from '../SocialMedia/SocialMedia'
import Grid from '@material-ui/core/Grid'
class footer extends Component {
    state = {
        footerContent: {
            product: [
                "Business",
                "Compare",
                "Features",
                "Pricing",
                "Mobile",
                "App Showcase",
                "Download"
            ],
            company: [
                "About Us",
                "Blog",
                "News",
                "Learn More",
                "Contact Us"
            ],
            learnMore: [
                "Support",
                "Developers",
                "Referral Program",
                "Affiliate Program",
                "Reseller Program",
                "Careers"
            ],
        },
        socialMedia: [
            linkedin,
            instagram,
            github,
            twitter
        ]
    }

    render() {
        return (
            <div className={classes.Footer}>
                <Grid container size={24}>
                    <Grid item xs={3}>
                        <ListItems 
                        title="Product" 
                        content={this.state.footerContent.product}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <ListItems 
                        title="Company" 
                        content={this.state.footerContent.company}
                        /> 
                    </Grid>
                    <Grid item xs={3}>
                        <ListItems 
                        title="Learn More" 
                        content={this.state.footerContent.learnMore}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <SocialMedia 
                        title="Follow Us" 
                        content={this.state.socialMedia}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
};

export default footer;