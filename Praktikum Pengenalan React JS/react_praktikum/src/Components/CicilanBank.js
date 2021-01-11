import React, {Component} from 'react';  

class CicilanBank extends Component {  
    constructor(){  
        super();  
        this.state = {  
            nominalpinjaman: 0,  
            bungapertahun: 0,
            periodecicilanbulan: 0,  
            periodecicilantahun: 0,
            angsuranbunga: 0,
            angsuranpokok: 0,
            totalangsuranperbulan: 0
        }  
    } 
    
    changeNominalPinjaman = (event) =>{  
        this.setState({nominalpinjaman: event.target.value});  
    }  
    
    changeBungaPertahun = (event) => {  
        this.setState({bungapertahun: event.target.value/100});
    }  
    
    changePeriodeCicilan = (event) => {  
        this.setState({periodecicilanbulan: event.target.value});
    }  
    
    cicilanBank = () => { 
        let periodeciciltahun = this.state.periodecicilanbulan/12;
        periodeciciltahun = periodeciciltahun.toFixed(2);
        
        let angsurbunga = (this.state.nominalpinjaman*this.state.bungapertahun*periodeciciltahun)/this.state.periodecicilanbulan;
        
        let angsurpokok = (this.state.nominalpinjaman/this.state.periodecicilanbulan);

        let totalcicilanperbulan = angsurbunga + angsurpokok;

        this.setState({
            angsuranbunga: angsurbunga,
            angsuranpokok: angsurpokok,
            periodecicilantahun: periodeciciltahun,
            totalangsuranperbulan: totalcicilanperbulan
        })
    }

    render(){  
        return (  
        <div className="card">  
            <div className="card-header bg-primary text-white">
                <h5>Cicilan Bank Bunga Flat</h5>
            </div>
            <div className="card-body">
                <div class="form-group row">
                    <label for="inputBerat" class="col-sm-4 col-form-label">Nominal Pinjaman</label>
                    <div class="col-sm-8">
                        <input type="number" class="form-control" id="inputBerat" placeholder="Rp 0" onChange={this.changeNominalPinjaman}></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputBerat" class="col-sm-4 col-form-label">Bunga Pertahun</label>
                    <div class="col-sm-8">
                        <input type="number" class="form-control" id="inputBerat" placeholder="0 %" onChange={this.changeBungaPertahun}></input>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputBerat" class="col-sm-4 col-form-label">Periode Cicilan Perbulan</label>
                    <div class="col-sm-8">
                        <select className="form-control" name="type" value={this.state.periodecicilan} onChange={this.changePeriodeCicilan}> 
                            <option value="0">0 Bulan</option>  
                            <option value="1">1 Bulan</option>  
                            <option value="2">2 Bulan</option>  
                            <option value="3">3 Bulan</option>  
                            <option value="4">4 Bulan</option>  
                            <option value="5">5 Bulan</option>  
                            <option value="6">6 Bulan</option>  
                            <option value="7">7 Bulan</option>  
                            <option value="8">8 Bulan</option>  
                            <option value="9">9 Bulan</option>  
                            <option value="10">10 Bulan</option>  
                            <option value="11">11 Bulan</option>  
                            <option value="12">12 Bulan</option>  
                            <option value="13">13 Bulan</option>  
                            <option value="14">14 Bulan</option>  
                            <option value="15">15 Bulan</option>  
                            <option value="16">16 Bulan</option>  
                            <option value="17">17 Bulan</option>  
                            <option value="18">18 Bulan</option>  
                            <option value="19">19 Bulan</option>  
                            <option value="20">20 Bulan</option>  
                            <option value="21">21 Bulan</option>  
                            <option value="22">22 Bulan</option>  
                            <option value="23">23 Bulan</option>  
                            <option value="24">24 Bulan</option>  
                            <option value="25">25 Bulan</option>  
                            <option value="26">26 Bulan</option>   
                            <option value="27">27 Bulan</option>  
                            <option value="28">28 Bulan</option>  
                            <option value="29">29 Bulan</option>  
                            <option value="30">30 Bulan</option>  
                            <option value="31">31 Bulan</option>  
                            <option value="32">32 Bulan</option>  
                            <option value="33">33 Bulan</option>  
                            <option value="34">34 Bulan</option>  
                            <option value="35">35 Bulan</option>  
                            <option value="36">36 Bulan</option>  
                        </select>
                    </div>
                </div>  
            </div>
            <div className="card-footer text-muted">
                <button className="btn btn-primary btn-block" onClick={this.cicilanBank}> Hitung </button>
                <br></br>
                <h4>Hasil</h4>
                <div className={"alert alert-success"}> 
                    Nominal Pinjaman : Rp {this.state.nominalpinjaman} <br></br><br></br> Periode Cicilan : {this.state.periodecicilanbulan} bulan <br></br> Angsuran Bunga : Rp {this.state.angsuranbunga} || Angsuran Pokok : Rp {this.state.angsuranpokok} <br></br><br></br> Total Angsuran Perbulan : Rp {this.state.totalangsuranperbulan}
                </div> 
            </div>
        </div>  
        );  
    }  
}  

export default CicilanBank;