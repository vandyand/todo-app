import React from 'react'
import Item from './Item'
import Modal from './Modal'


export default class extends React.Component {
    // listOrItem = 'item'
    render() {
        if (this.props.state.list_id === "") return (<div></div>);
        return (
            <div className="listDisplay">
                {/*List Title*/}
                {/* {this.props.state.lists.filter(val => val._id === this.props.state.list_id)
                    .map(val => <h1 key={val._id}>{val.name}</h1>)} */}
                <h1>Todo Items</h1>
                {/*List Description*/}
                {this.props.state.lists.filter(val => val._id === this.props.state.list_id)
                    .map(val => (val.desc ? <h2 key={val._id}>{val.desc}</h2> : ''))}

                {/*List Items*/}
                {this.props.state.items.filter(val => val.list_id === this.props.state.list_id)
                    .map(item => <Item key={item._id} item={item} deleteItem={this.props.deleteItem} updateItem={this.props.updateItem} />)}

                {/*Add Items*/}
                <Modal submitHandler={this.props.addItem} listOrItem={false} addOrUpdate={true} curItem={{}}/>
                {/* <ItemForm submitHandler={this.props.addItem}/> */}
            </div>
        )
    }
}


