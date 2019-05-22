import React, { Component } from 'react'
import Style from './SendMessageBtn.module.css';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from  '@fortawesome/free-solid-svg-icons'
library.add(faPaperPlane);


class SendMessageBtn extends Component {

    render() {
        let {btnPosition} = Style;
        return (

            <div className={btnPosition}>
            <Button variant="contained" color={'primary'} fullWidth={false} size={'large'}>
                Send Message
                <Icon></Icon><FontAwesomeIcon icon={faPaperPlane}/>
            </Button>
            </div>
        );
    }


}

export default SendMessageBtn;