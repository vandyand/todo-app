import React from 'react'
import Item from './Item'
import Modal from './Modal'

export default (props) => {
    return (
        <div>
            <h2>{props.list.name}</h2>
            <h3>{props.list.desc}</h3>
            <Modal message="Add todo item" />
            {props.items.map((curVal,i) => <Item key={i} item={curVal}/>)}
        </div>
    )
}
