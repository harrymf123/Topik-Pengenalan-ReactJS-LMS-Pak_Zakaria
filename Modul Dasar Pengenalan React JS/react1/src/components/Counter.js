import React from "react"

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }

    increment = () => {
        let c = this.state.count;
        // merubah nilai state menggunakan fungsi setState
        this.setState({
            count: ++c
        })
    }

    decrement = () => {
        let c = this.state.count;
        // merubah nilai state menggunakan fungsi setState
        this.setState({
            count: --c
        })
    }

    render(){
        return (
            <div className="row col-5">
                <div className="col-2">
                    <button className="btn btn-danger btn-block" onClick={this.decrement}> - </button>
                </div>
                <div className="col-8">
                    <input type="number" className="form-control" value={this.state.count} readOnly></input>
                </div>
                <div className="col-2">
                    <button className="btn btn-success btn-block" onClick={this.increment}> + </button>
                </div>
            </div>
        );
    }
}

export default Counter