import React from 'react'
import Modal from './Modal'

export default class extends React.Component {

    addIdToBody = (data) => {
        const newBody = {_id:this.props.item._id,...data}
        this.props.updateItem(newBody)
    }

    render() {
        return (
            <div className="item" key={this.props.item._id}>
                <div>{this.props.item.name}</div>
                {/* <div>{this.props.item.desc}</div>
                <div>{this.props.item.due}</div> */}
                <Modal submitHandler={this.addIdToBody} listOrItem={false} addOrUpdate={false} />
                <button className="buttonDelete" onClick={this.props.deleteItem}>Delete</button>
            </div>
        )
    }
}




