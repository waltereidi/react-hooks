import React, { Component } from 'react'; 
import { PermissionConsumer } from './Hooks';

export default class First extends Component{
    constructor(props){
    super(props); 
        this.state={
            type: 'first',
        }

    this.desaparecer = this.desaparecer.bind(this); 
}
desaparecer(){
    this.setState({
        type:'sdsds'
    });
}
    render(){
        const first = this.state.type ;
        return(
            <PermissionConsumer name={first} type="type">
        <div>
            <button onClick={this.desaparecer}>
                {this.props.children}
            </button>
        </div>
    </PermissionConsumer>  
        )
    };

}
