import React from 'react'

export default class extends React.Component{

    render(){
        return(
            <div>
                <h1>Lists (from Lists.js)</h1>
                {this.props.lists.map((curVal,index)=>{
                return (
                    <button key={index} onClick={()=>this.props.selectList(curVal.id)}>
                        <div>{curVal.name}</div>
                        <div>{curVal.desc}</div>
                        {/* <button>Edit</button>
                        <button>Delete</button> */}
                    </button>
                )})}
                <button>+</button>
            </div>
        )
    }    
}


