import React, {Component} from 'react';  

class HitungBMI extends Component {  
    constructor(){  
        super();  
        this.state = {  
            berat: 0,  
            tinggi: 0,
            status: "",
            hasil: 0
        }  
    } 

    
    changeBerat = (event) =>{  
        this.setState({berat: event.target.value});  
    }  
    
    changeTinggi = (event) => {  
        this.setState({tinggi: event.target.value/100});
    }  

    hitungBMI = () => {  
        let hitung = this.state.berat / (this.state.tinggi**2);
        hitung = hitung.toFixed(2);
        if(hitung < 18.5){
            this.setState({status: "Anda Kekurangan Berat Badan"}); 
            this.setState({hasil: hitung}); 
        }else if(hitung >= 18.5 && hitung <= 24.9){
            this.setState({status: "Anda Normal(Ideal)"}); 
            this.setState({hasil: hitung}); 
        }else if(hitung >= 25.0 && hitung <= 29.9){
            this.setState({status: "Anda Kelebihan Berat Badan"}); 
            this.setState({hasil: hitung}); 
        }else{
            this.setState({status: "Anda Kegemukan(Obesitas)"}); 
            this.setState({hasil: hitung}); 
        }
    }

    render(){  
        return (  
        <div className="card">  
            <div className="card-header">
                <h5>Body Mass Index</h5>
            </div>
            <div className="card-body">
                <div class="form-group row">
                    <label for="inputBerat" class="col-sm-3 col-form-label">Berat Badan</label>
                    <div class="col-sm-8">
                        <input type="number" class="form-control" id="inputBerat" placeholder="0 kg" onChange={this.changeBerat}></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputTinggi" class="col-sm-3 col-form-label">Tinggi Badan</label>
                    <div class="col-sm-8">
                        <input type="number" class="form-control" id="inputTinggi" placeholder="0 cm" onChange={this.changeTinggi}></input>
                    </div>
                </div>
            </div>
            <div className="card-footer text-muted">
                <button className="btn btn-info btn-block" onClick={this.hitungBMI}> Hitung </button>
                <br></br>
                <h4>Hasil</h4>
                <div className={"alert alert-success"}> 
                    Berat : {this.state.berat} kg || Tinggi : {this.state.tinggi} m
                    <br></br><br></br> Hasil BMI : {this.state.hasil} <br></br>
                    {this.state.status}
                </div> 
            </div>
        </div>  
        );  
    }  
}  

export default HitungBMI;