import React from 'react'
import Item from './Item'
import ItemForm from './ItemForm'


export default class extends React.Component {
    render() {
        return (
            <div>
                {this.props.state.lists.filter(val => val._id === this.props.state.list_id)
                    .map(val => <h1 key={val._id}>{val.name}</h1>)}
                {this.props.state.lists.filter(val => val._id === this.props.state.list_id)
                    .map(val => <h2 key={val._id}>{val.desc}</h2>)}
                {this.props.state.items.filter(val => val.list_id === this.props.state.list_id)
                    .map(item => <Item key={item._id} item={item} />)}
                <ItemForm submitHandler={this.props.addItem}/>
            </div>
        )
    }
}


