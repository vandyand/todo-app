import React from 'react'
import Modal from './Modal'
import { FaTimes, FaCheck } from 'react-icons/fa'

export default class extends React.Component {

    state = {
        isComplete: false
    }

    addIdToBody = (data) => {
        const newBody = { _id: this.props.item._id, ...data }
        this.props.updateItem(newBody)
    }

    toggleComplete = () => {
        this.setState({
            isComplete: !this.state.isComplete
        })
    }

    render() {
        const item = this.props.item
        return (
            <div className="item" key={item._id}>
                <div className="itemName">{this.state.isComplete ? <strike>{item.name}</strike> : item.name}</div>
                {/* <div>{this.props.item.desc}</div>
                <div>{this.props.item.due}</div> */}
                <button className="buttonCheck" onClick={this.toggleComplete}><FaCheck /></button>
                <Modal submitHandler={this.addIdToBody} listOrItem={false} addOrUpdate={false} />
                <button className="buttonDelete" onClick={this.props.deleteItem}><FaTimes /></button>
            </div>
        )
    }
}




