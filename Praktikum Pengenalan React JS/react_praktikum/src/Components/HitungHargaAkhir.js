import React, {Component} from 'react';  

class HitungHargaAkhir extends Component {  
    constructor(){  
        super();  
        this.state = {  
            hargaawal: 0,  
            ppn: 0,
            diskon: 0,
            totalbiaya: 0
        }  
    } 
    
    changeHargaAwal = (event) =>{  
        this.setState({hargaawal: event.target.value});  
    }  
    
    changePPN = (event) => {  
        this.setState({ppn: (event.target.value/100) * this.state.hargaawal});
    }  
    
    changeDiskon = (event) => {  
        this.setState({diskon: (event.target.value/100) * this.state.hargaawal});
    }  
    
    hitungBiaya = () => { 
        let a = parseInt(this.state.hargaawal);
        let b = parseInt(this.state.ppn);
        let c = parseInt(this.state.diskon);

        let abc = a+b-c;
        this.setState({totalbiaya: abc})
    }

    render(){  
        return (  
        <div className="card">  
            <div className="card-header bg-danger text-white">
                <h5>Hitung Harga Akhir</h5>
            </div>
            <div className="card-body">
                <div class="form-group row">
                    <label for="inputBerat" class="col-sm-4 col-form-label">Harga Awal</label>
                    <div class="col-sm-8">
                        <input type="number" class="form-control" id="inputBerat" placeholder="Rp 0" onChange={this.changeHargaAwal}></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputBerat" class="col-sm-4 col-form-label">PPN</label>
                    <div class="col-sm-8">
                        <input type="number" class="form-control" id="inputBerat" placeholder="0 %" onChange={this.changePPN}></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputBerat" class="col-sm-4 col-form-label">Diskon</label>
                    <div class="col-sm-8">
                        <input type="number" class="form-control" id="inputBerat" placeholder="0 %" onChange={this.changeDiskon}></input>
                    </div>
                </div>
            </div>
            <div className="card-footer text-muted">
                <button className="btn btn-danger btn-block" onClick={this.hitungBiaya}> Hitung </button>
                <br></br>
                <h4>Hasil</h4>
                <div className={"alert alert-success"}> 
                    Harga Awal : Rp {this.state.hargaawal} <br></br><br></br> PPN : Rp {this.state.ppn} || Diskon : Rp {this.state.diskon} <br></br><br></br> Total Biaya : Rp {this.state.totalbiaya}
                </div> 
            </div>
        </div>  
        );  
    }  
}  

export default HitungHargaAkhir;