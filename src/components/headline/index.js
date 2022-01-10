import React,{Component} from "react";
import PropTypes from "prop-types"

class HeadLine extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {header, desc} = this.props;
        if (!header) {
            return null
        }
        return(
            <div data-test="headlineComponent">
                <h1 data-test="header">
                    {header}
                </h1>
                <p data-test="desc">
                    {desc}
                </p>
            </div>
        )
        }
}

HeadLine.protoTypes = {
    header:PropTypes.string,
    desc:PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fNAme:PropTypes.string,
        lName: PropTypes.string,
        age:PropTypes.number
    }))
}

export default HeadLine;