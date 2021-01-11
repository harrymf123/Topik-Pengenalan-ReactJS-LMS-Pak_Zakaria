import React from "react"

class Alert extends React.Component{
    render(){
        let color = this.props.color;
        let style = "alert alert-" + color;
        let teks  = this.props.teks;
        return(
            <div className={style}>
                Ini adalah alert
                <br></br>
                {teks}
            </div>
        )
    }
}

export default Alert;