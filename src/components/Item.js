import React from 'react'
import Modal from './Modal'
import { FaTimes, FaCheck } from 'react-icons/fa'

export default class extends React.Component {

    addIdToBody = (data) => {
        const newBody = { _id: this.props.item._id, ...data }
        this.props.updateItem(newBody)
    }

    toggleComplete = (data) => {
        const item = this.props.item
        const newBody = {
            _id: item._id,
            name: item.name,
            desc: item.desc,
            due: item.due,
            isComplete: !item.isComplete
        }
        this.props.updateItem(newBody)
    }

    render() {
        const item = this.props.item
        return (
            <div className="item" key={item._id}>
                <div>
                    <button className="buttonCheck" onClick={this.toggleComplete}><FaCheck /></button>
                </div>
                <div className="itemName">{item.isComplete ? <strike>{item.name}</strike> : item.name}</div>
                {/* <div>{this.props.item.desc}</div>
                <div>{this.props.item.due}</div> */}

                <Modal submitHandler={this.addIdToBody} listOrItem={false} addOrUpdate={false} curItem={item} />
                <div>
                    <button className="buttonDelete" onClick={() => this.props.deleteItem(item)}><FaTimes /></button>
                </div>
            </div>
        )
    }
}




