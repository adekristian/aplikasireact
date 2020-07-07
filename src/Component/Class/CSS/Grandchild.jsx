import React, { Component } from 'react'


class Grandchild extends Component{
    constructor (props) {
        super (props)

        this.state = {
           
        }
    }   

    render (){
        return( <div>
            <h3>Grandchild</h3>
            <p>stok : {this.props.set}
            </p>
            </div> 
            

        )
    }
}
export default Grandchild