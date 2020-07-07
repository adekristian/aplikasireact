import React, { Component } from 'react'
import Grandchild from './Grandchild'

class Child2 extends Component{
    constructor (props) {
        super (props)

        this.state = {
           
        }
    }   

    render (){
        return( <div>
          
            <Grandchild set={this.props.stok}/>
            </div>
            

        )
    }
}
export default Child2