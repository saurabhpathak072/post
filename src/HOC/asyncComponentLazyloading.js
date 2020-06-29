import React from 'react'

function asyncComponentLazyloading(importComponent) {
    return class extends React.Component{
        state={
            componen:null
        }
        componentWillMount(){
            importComponent()
                .then(cmp=>{
                    this.setState({componen:cmp.default});
                });
        }
        render(){
            const C = this.state.componen; 
            return C ? <C {...this.props}/>:null;
        }
    }
    
}

export default asyncComponentLazyloading
