import React, { Component, createContext } from 'react'; 

const { Provider, Consumer } = createContext('permissions');

export class PermissionProvider extends Component {
    state = {
        first: true,
        second: false,
        third: true
    };
    render() {
        return (
            <Provider value={this.state}>{ this.props.children }</Provider>
        );
    }}
    function respostaComponte(value){
        console.log(value)
        return true ;
    };
const PermissionConsumer = ({ name, children , type }) => (
    <Consumer>{value => respostaComponte(name) && (value[name] && children)}</Consumer>  
);
export { PermissionConsumer };

