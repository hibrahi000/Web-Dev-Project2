import React,{Component} from 'react'
import Style from './Heading.module.css'


class Heading extends Component {
    
    
    render(){
        let {Title, Message} = this.props;
        let {TitleStyle, MessageStyle} = Style;
        return(
            <div>
                <h1 className={TitleStyle}>{Title}</h1>
                <h3 className= {MessageStyle}>{Message}</h3>
            </div>
        );
    }
}

export default Heading;