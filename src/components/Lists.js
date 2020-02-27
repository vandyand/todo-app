import React from 'react'
import Modal from './Modal'
import { FaTimes } from 'react-icons/fa'

export default class extends React.Component {

    addIdToBody = (data) => {
        const newBody = { _id: this.props.list._id, ...data }
        this.props.updateList(newBody)
    }

    render() {
        return (
            <div className="lists">
                <h1>Todo Lists</h1>
                {this.props.lists.map((list, index) => {
                    return (
                        <div className="listSelect" key={index}>
                            <div className="listName">
                                <button onClick={() => this.props.selectList(list._id)}>
                                    {list.name}
                                </button>
                            </div>
                            <Modal submitHandler={this.props.updateList} listOrItem={true} addOrUpdate={false} curList={list} />
                            <div>
                                <button className="buttonDelete" onClick={() => this.props.deleteList(list)}>
                                    <FaTimes />
                                </button>
                            </div>
                        </div>
                    )
                })}
                <Modal submitHandler={this.props.addList} listOrItem={true} addOrUpdate={true} curList={{}} />
            </div>
        )
    }
}


