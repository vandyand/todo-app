import React from 'react'
import Modal from './Modal'

export default class extends React.Component {

    addIdToBody = (data) => {
        const newBody = {_id:this.props.list._id,...data}
        this.props.updateList(newBody)
    }

    render() {
        return (
            <div className="lists">
                <h1>Todo Lists</h1>
                {this.props.lists.map((list, index) => {
                    return (
                        <div className="listSelect" key={index}>
                            <button onClick={() => this.props.selectList(list._id)}>
                                <div>{list.name}</div>
                                {/* <div>{list.desc}</div> */}
                            </button>
                            <Modal submitHandler={this.props.updateList} listOrItem={true} addOrUpdate={false} state={list}/>
                            <button className="buttonDelete"onClick={() => this.props.deleteList(list)}>Delete</button>
                        </div>
                    )
                })}
                <Modal submitHandler={this.props.addList} listOrItem={true} addOrUpdate={true} />
            </div>
        )
    }
}


