import React,{ Component } from 'react'
import Style from './GenInput.module.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
class GenInput extends Component {

    render(){
    let {Label, Error} = this.props;
    let {inputSpacing} = Style;

        let input;
        if(Error){
            input= (
                <FormControl>
                <TextField label={Label} error={Error} spellCheck={true}></TextField>
                <FormHelperText variant='outlined' id="component-error-text" error={Error}>{Label}</FormHelperText>
                </FormControl>
            );
        }
        else{
            input =(
            <FormControl>
            <TextField label={Label} error={Error} spellCheck={true}></TextField>
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