import React, { Component } from 'react'
import Style from './TextArea.module.css';
import TextField from '@material-ui/core/TextField';
class TextArea extends Component {
    render () {
        let {Label} = this.props;
        let {labelStyle, taStyle} = Style;

        return(
            <div>
                <TextField multiline={true} label={Label}></TextField>
            </div>
        );

    }
}

export default TextArea;