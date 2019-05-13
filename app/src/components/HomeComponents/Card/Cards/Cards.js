import React, { Component } from 'react'
import classes from './Cards.module.css'
import nycWell from '../../../../assets/heros/nycwell.jpg'
import flu from '../../../../assets/heros/flu-health-bulletin.jpg'
import takeCareNY from '../../../../assets/heros/takecareny.jpg'
import birthdeath from '../../../../assets/heros/birthdeath.jpg'
import healthAcademy from '../../../../assets/heros/healthacademy.jpg'
import dogLicensing from '../../../../assets/heros/doglicensing.jpg'
import childCare from '../../../../assets/heros/childcare.jpg'
import vote from '../../../../assets/heros/vote.png'
import Card from '../Card'

class Cards extends Component {

    state = {
        heroCardInfo: [
            {
                image: nycWell,
                imageTitle: 'NYC Well',
                title: 'NYC Well',
                info: "Trouble coping? Don't struggle alone. We're here to listen and help with problems.",
            },
            {
                image: flu,
                imageTitle: 'Get Your Flu Shot',
                title: 'Get Your Flu Shot',
                info: "Read the latest Health Bulletin. Learn how to get a free or low-cost vaccine.",
            },
            {
                image: takeCareNY,
                imageTitle: 'Take Care New York 2020',
                title: 'Take Care New York 2020',
                info: "Shape the City’s blueprint to live a healthier life. Get involved in #TCNY2020.",
            },
            {
                image: birthdeath,
                imageTitle: 'Birth & Death Certificate',
                title: 'Birth & Death Certificate',
                info: "Issues birth and death certificates for individuals who are born and who die in NYC.",
            },
            {
                image: healthAcademy,
                imageTitle: 'Health Academy',
                title: 'Health Academy',
                info: "Provides training to the public for services where certification is required by law.",
            },
            {
                image: dogLicensing,
                imageTitle: 'Dog Licensing',
                title: 'Dog Licensing',
                info: "Issues and renews dog license to all owned dogs in New York City.",
            },
            {
                image: childCare,
                imageTitle: 'Find Child Care',
                title: 'Find Child Care',
                info: "Search for a child care center in your area, compare centers, and more with NYC Child Care Connect.",
            },
            {
                image: vote,
                imageTitle: 'Register To Vote',
                title: 'Register To Vote',
                info: "Call 311 or visit voting.nyc to register to vote. #RockTheVote.",
            },
        ]
    }

    render() {

        let listCards = this.state.heroCardInfo.map((card, index) => {
            return (<div className={classes.column} key={index}>
                        <Card image={card.image} 
                        imageTitle={card.imageTitle}
                        title={card.title}
                        info={card.info}
                        />
                    </div>)
        })

        return (
            <div className={classes.Cards}>
                <div className={classes.row}>{listCards.slice(0, 4)}</div>
                <div className={classes.row}>{listCards.slice(4, 8)}</div>
            </div>
        );
    }
};

export default Cards;