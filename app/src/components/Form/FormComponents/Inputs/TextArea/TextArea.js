import React, { Component } from 'react'
import Style from './TextArea.module.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
class TextArea extends Component {
    render () {
        let {Label} = this.props;

        return(
            <div className={Style.TextField}>
                <TextField variant="outlined" multiline={true} label={Label} style={{width: '100%'}}></TextField>
            </div>
        );

    }
}

export default TextArea;