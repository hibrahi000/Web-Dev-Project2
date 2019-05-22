import React,{ Component } from 'react'
import Style from './GenInput.module.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
class GenInput extends Component {

    render(){
    let {Label, Error,errorMessage} = this.props;
    let {inputSpacing} = Style;
        Error = false;
        let input;
        if(Error){
            input= (
                <FormControl>
                <TextField variant='outlined' label={Label} error={Error} style={{width: 500}} ></TextField>
                <FormHelperText variant='outlined' id="component-error-text" error={Error}>{errorMessage}</FormHelperText>
                </FormControl>
            );
        }
        else{
            input =(
            <FormControl>
            <TextField margin='normal' variant='outlined' label={Label} error={Error} style={{width: 500,color: 'white'}} ></TextField>
            </FormControl>
            );
        }



        return(
            <div className={inputSpacing}>
                {input}
            </div>
        )
    }
}

export default GenInput;