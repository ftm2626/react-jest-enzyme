import React from "react"
import "./styles.scss"
import Logo from "../../assets/logo.png"


const Header = (props) =>{
    return(

        //use data-test to tell other developers not to erase it 
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logoIMG" src={Logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}

export default Header