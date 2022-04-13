import React, { Component } from "react";

class Soal1 extends Component {
    constructor() {
        super();
        this.state = {
            nilaiA: 0,
            nilaiB: 0,
            output: 0
        }
    }


    Hitung = () => {
        let nilaiA = this.state.nilaiA;
        let nilaiB = this.state.nilaiB;
        let output = this.state.output;
        if (nilaiA > nilaiB) {
            output = nilaiA;
        }
        else if (nilaiA < nilaiB) {
            output = nilaiB;
        }
        else if (nilaiA == nilaiB){
            output = "sama"
        }
        this.setState({
            output
        });
    }
changenilaiA = (event) => {
    this.setState({
        nilaiA: event.target.value
    })
}
changenilaiB = (event) => {
    this.setState({
        nilaiB: event.target.value
    })
}
render() {
    return (
        <div className="container col-md-3">
            <div className="card">
                <div className="card-header bg-primary text-center text-white">
                    <h3>Perbandingan Nilai Yang Terbesar</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Nilai A</label>
                        <input type="text" className="form-control" onChange={this.changenilaiA}></input>
                    </div>
                    <div className="form-group">
                        <label>Nilai B</label>
                        <input type="text" className="form-control" onChange={this.changenilaiB}></input>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary form-control" onClick={this.Hitung}>Cek</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.output}</h5>
                    </div>
                    
                </div>
            </div>
    );
}
}

export default Soal1;