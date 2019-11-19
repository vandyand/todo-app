import React from 'react'

export default (props) => {
    return (
        <div>
            <div>{props.item.name}</div>
            <div>{props.item.desc}</div>
            <div>{props.item.due}</div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}




