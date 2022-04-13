import React, { Component } from "react";

class Soal2 extends Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            output: 0
        }
    }


    Hitung = () => {
        let a = this.state.a;
        let output = this.state.output;
        if (a%2==0) {
            output = "genap";
        }
        else { 
            output = "ganjil";
        }
        this.setState({
            output
        });
    }
changea = (event) => {
    this.setState({
        a: event.target.value
    })
}
render() {
    return (
        <div className="container col-md-3">
            <div className="card">
                <div className="card-header bg-danger text-center text-white">
                    <h3>Ganjil / Genap</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Nilai</label>
                        <input type="text" className="form-control" onChange={this.changea}></input>
                    </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger form-control" onClick={this.Hitung}>Cek</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.output}</h5>
                    </div>
                    
                </div>
    );
}
}

export default Soal2;