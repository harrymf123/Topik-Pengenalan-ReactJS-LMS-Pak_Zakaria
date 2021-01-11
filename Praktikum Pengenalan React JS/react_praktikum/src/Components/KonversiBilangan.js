import React, {Component} from 'react';  

class KonversiBilangan extends Component {  
    constructor(){  
        super();  
        this.state = {  
            jenisbilanganawal: "?", 
            jenisbilanganconvert: "?", 
            nilai: "",
            convert: "?"
        }  
    } 
    
    changeJenisBilanganAwal = (event) =>{  
        this.setState({jenisbilanganawal: event.target.value});  
    }  
    
    changeJenisBilanganConvert = (event) => {  
        this.setState({jenisbilanganconvert: event.target.value});
    }  
    
    changeNilai = (event) => {  
        this.setState({nilai: event.target.value});
    }  
    
    convertBilangan = () => { 
        let jba = this.state.jenisbilanganawal;
        if(jba == "Desimal"){
            let x = this.state.nilai;
            x = parseInt(x);
            if(isNaN(x)){
                return "KOSONG";
            }

            let dec = x;
            let bin = x.toString(2);
            let hex = x.toString(16).toUpperCase();
            let okt = x.toString(8);

            let jbc = this.state.jenisbilanganconvert;
            if(jbc == "Desimal"){
                this.setState({convert: dec})
            }else if(jbc == "Biner"){
                this.setState({convert: bin})
            }else if(jbc == "Oktal"){
                this.setState({convert: okt})
            }else if(jbc == "Heksadesimal"){
                this.setState({convert: hex})
            }
        }else if(jba == "Biner"){
            let x = this.state.nilai;
            x = parseInt(x, 2);
            if(isNaN(x)){
                return "KOSONG";
            }
        
            let dec = x;
            let bin = x.toString(2);
            let hex = x.toString(16).toUpperCase();
            let okt = x.toString(8);
        
            let jbc = this.state.jenisbilanganconvert;
            if(jbc == "Desimal"){
                this.setState({convert: dec})
            }if(jbc == "Biner"){
                this.setState({convert: bin})
            }else if(jbc == "Oktal"){
                this.setState({convert: okt})
            }else if(jbc == "Heksadesimal"){
                this.setState({convert: hex})
            }
        }else if(jba == "Oktal"){
            let x = this.state.nilai;
            x = parseInt(x, 8);
            if(isNaN(x)){
                return "KOSONG";
            }
        
            let dec = x;
            let bin = x.toString(2);
            let hex = x.toString(16).toUpperCase();
            let okt = x.toString(8);
        
            let jbc = this.state.jenisbilanganconvert;
            if(jbc == "Desimal"){
                this.setState({convert: dec})
            }if(jbc == "Biner"){
                this.setState({convert: bin})
            }else if(jbc == "Oktal"){
                this.setState({convert: okt})
            }else if(jbc == "Heksadesimal"){
                this.setState({convert: hex})
            }
        }else if(jba == "Heksadesimal"){
            let x = this.state.nilai;
            x = parseInt(x, 16);
            if(isNaN(x)){
                return "KOSONG";
            }
        
            let dec = x;
            let bin = x.toString(2);
            let hex = x.toString(16).toUpperCase();
            let okt = x.toString(8);
        
            let jbc = this.state.jenisbilanganconvert;
            if(jbc == "Desimal"){
                this.setState({convert: dec})
            }if(jbc == "Biner"){
                this.setState({convert: bin})
            }else if(jbc == "Oktal"){
                this.setState({convert: okt})
            }else if(jbc == "Heksadesimal"){
                this.setState({convert: hex})
            }
        }
    }

    render(){  
        return (  
        <div className="card">  
            <div className="card-header bg-danger text-white">
                <h5>Konversi Bilangan{" "+this.state.jenisbilanganawal}</h5>
            </div>
            <div className="card-body">
                <div class="form-group row">
                    <label for="inputBerat" class="col-sm-4 col-form-label">Bilangan{" "+this.state.jenisbilanganawal}</label>
                    <div class="col-sm-8">
                        <select className="form-control" name="type" value={this.state.periodecicilan} onChange={this.changeJenisBilanganAwal}> 
                            <option value="Desimal">Desimal</option>  
                            <option value="Biner">Biner</option>  
                            <option value="Oktal">Oktal</option>  
                            <option value="Heksadesimal">Heksadesimal</option>  
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputBerat" class="col-sm-4 col-form-label">Masukan Nilai</label>
                    <div class="col-sm-8">
                        <input type="text" class="form-control" id="inputBerat" placeholder="0" onChange={this.changeNilai}></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputBerat" class="col-sm-4 col-form-label">Pilihan Konversi</label>
                    <div class="col-sm-8">
                        <select className="form-control" name="type" value={this.state.periodecicilan} onChange={this.changeJenisBilanganConvert}> 
                            <option value="Desimal">Desimal</option>  
                            <option value="Biner">Biner</option>  
                            <option value="Oktal">Oktal</option>  
                            <option value="Heksadesimal">Heksadesimal</option>  
                        </select>
                    </div>
                </div>  
            </div>
            <div className="card-footer text-muted">
                <button className="btn btn-danger btn-block" onClick={this.convertBilangan}> Hitung </button>
                <br></br>
                <h4>Hasil</h4>
                <div className={"alert alert-success"}> 
                    Hasil Konversi Bilangan{" "+this.state.jenisbilanganawal} ke{" "+this.state.jenisbilanganconvert} <br></br> Hasil Konversi = {this.state.convert}
                </div> 
            </div>
        </div>  
        );  
    }  
}  

export default KonversiBilangan;