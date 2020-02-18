import React from 'react'
import Modal from './Modal'

export default class extends React.Component {

    // listOrItem = 'list'

    render() {
        return (
            <div>
                <h1>Lists</h1>
                {this.props.lists.map((list, index) => {
                    return (
                        <div key={index}>
                            <button onClick={() => this.props.selectList(list._id)}>
                                <div><b>{list.name}</b></div>
                                <div>{list.desc}</div>
                                {/* <button>Edit</button> */}
                            </button>
                            <Modal submitHandler={this.props.updateList} listOrItem="list" displayText="Update" />
                            <button onClick={() => this.props.deleteList(list)}>Delete</button>
                            <hr/>
                        </div>
                    )
                })}
                <Modal submitHandler={this.props.addList} listOrItem="list" displayText="+" />
            </div>
        )
    }
}