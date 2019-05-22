import React, { Component } from 'react'
import Style from './TextArea.module.css';
import TextField from '@material-ui/core/TextField';
class TextArea extends Component {
    render () {
        let {Label} = this.props;
        let {labelStyle, taStyle} = Style;

        return(
            <div>
                <TextField id="outlined-textarea"  variant="outlined" multiline={true} label={Label} style={{width: 500}}></TextField>
            </div>
        );

    }
}

export default TextArea;