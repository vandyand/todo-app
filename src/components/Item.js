import React from 'react'
import Modal from './Modal'

export default class extends React.Component {
    render() {
        return (
            <div key={this.props.item._id} >
                <div><b>{this.props.item.name}</b></div>
                <div>{this.props.item.desc}</div>
                <div>{this.props.item.due}</div>
                <button onClick={this.props.deleteItem}>Delete</button>
                <Modal submitHandler={this.props.updateItem} listOrItem="item" displayText="Update" />
                <br/>
                <hr/>
                <br/>
            </div>
        )
    }
}




