import React from 'react'

export default class extends React.Component {
    render() {
        return (
            <div key={this.props.item._id} >
                <div><b>{this.props.item.name}</b></div>
                <div>{this.props.item.desc}</div>
                <div>{this.props.item.due}</div>
                {/* <button>Edit</button>
                <button>Delete</button> */}
            </div>
        )
    }
}




