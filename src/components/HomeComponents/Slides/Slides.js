import React, { Component } from 'react';
import classes from './Slides.module.css'
import health from '../../../assets/cards/health-bulletin-language-matters-hero.jpg'
import testing from '../../../assets/cards/lead-testing-hero.jpg'
import measles from '../../../assets/cards/measles-hero-attention.jpg'
import tb from '../../../assets/cards/tb-day-hero.png'
import prev from '../../../assets/navigation/prev.svg'
import next from '../../../assets/navigation/next.svg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'

class slides extends Component {

    state = {
        heroCards: [
            { 
                image: health, 
                info: 'Read the latest Health Bulletin: Language Maters. Learn how to get City services an assistance in your preferred language',
                imageTitle: 'Language Matters',
                title: "Language Matters"
            },
            { 
                image: testing, 
                info: 'Lead in peeling paint poisons children. Get your child tested for lead at ages one and two, and remind your landlord they are legally required to fix peeling paint.',
                imageTitle: 'Lead Testing',
                title: "Lead Testing"
            },
            { 
                image: measles, 
                info: 'As of May 6, 2019, there have been 466 confirmed cases of measles  in Brooklyn, Queens and the Bronx since October. Most of these cases have involved members of the Orthodox Jewish community. If you live, work or reside in Williamsburg, you are now required to get vaccinated for measles, unless you are immune or medically exempt.',
                imageTitle: 'Measles Outbreak',
                title: "Measles Outbreak"
            },
            { 
                image: tb, 
                info: 'Tuberculosis (TB)  is an airborne disease that is transmitted from person to person. Too many New Yorkers still suffer from TB. The Health Department works with individuals, communities, and health care providers to ensure that everyone who has TB, or is at risk, gets proper treatment and care.',
                imageTitle: 'Tuberculosis',
                title: "Tuberculosis"
            },
        ],
        index: 0
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

    render() {

        return (
            <div className={classes.Slides}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={this.state.heroCards[this.state.index].image}
                    alt="Hero Card"
                    title={this.state.heroCards[this.state.index].imageTitle}
                    />
                <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                    {this.state.heroCards[this.state.index].title}
                </Typography>
                <Typography component="p">
                    {this.state.heroCards[this.state.index].info}
                </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.buttonContainer}>
                        <button onClick={this.prevImage}><img src={prev}/></button>
                        <button onClick={this.nextImage}><img src={next}/></button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default slides;