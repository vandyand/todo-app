import React from 'react'
import ListForm from './ListForm'
// import Modal from './Modal'

export default class extends React.Component{

    submitHandler = (newList) => {
        console.log(newList)
        this.props.addList(newList)
    }

    render(){
        return(
            <div>
                <h1>Lists (from Lists.js)</h1>
                {this.props.lists.map((curVal,index)=>{
                return (
                    <button key={index} onClick={()=>this.props.selectList(curVal._id)}>
                        <div>{curVal.name}</div>
                        <div>{curVal.desc}</div>
                        {/* <button>Edit</button>
                        <button>Delete</button> */}
                    </button>
                )})}
                <ListForm submitHandler={this.submitHandler}/>
            </div>
        )
    }    
}


