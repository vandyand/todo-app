import React from 'react'
import ListForm from './ListForm'
// import Modal from './Modal'

export default class extends React.Component{

    render(){
        return(
            <div>
                <h1>Lists</h1>
                {this.props.lists.map((curVal,index)=>{
                return (
                    <button key={index} onClick={()=>this.props.selectList(curVal._id)}>
                        <div><b>{curVal.name}</b></div>
                        <div>{curVal.desc}</div>
                        {/* <button>Edit</button>
                        <button>Delete</button> */}
                    </button>
                )})}
                <ListForm submitHandler={this.props.addList}/>
            </div>
        )
    }    
}


