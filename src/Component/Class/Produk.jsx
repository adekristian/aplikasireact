import React, {Component} from 'react'

import './CSS/Produk.css';

class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
                stock: this.props.stock,
                sub: "Beli",
                status: "Tersedia",
                disabled : false
        }
    }
    ButtonBeli = ()=> {
        this.setState ({
            stock: this.state.stock -1
        })

        if(this.state.stock ===1){
            this.setState({
                status : "Habis",
                disabled : true
            })
        }
    }
    render(){
        return (
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://cf.shopee.co.id/file/fb4f1f1ab0c6bb8754dc4884d0b36dfa" alt=""/>
                <p><b>Rp.{this.props.harga}</b></p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>
                </div>
        )
    }
}
export default Produk