import React from 'react'

export default class extends React.Component {

    state = {
        label: '',
        list: {
            name: '',
            desc: '',
        },
        item: {
            name: '',
            list_id: '',
            desc: '',
            due: '',
        }
    }

    componentDidMount() {
        this.setState({ label: this.props.label })
    }

    changeHandler = (target) => {
       
        console.log(this.state)
    }

    renderForm(label) {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label>{this.state.label} Name:</label>
                <input
                    type='text'
                    id='name'
                    name='list.name'
                    onChange={this.changeHandler}
                    value={this.state.label === "List" ? this.state.list.name : this.state.item.name}
                    required />

                <br />

                <label>{this.state.label} Description:</label>
                <input
                    type='text'
                    id='desc'
                    name='list.desc'
                    onChange={this.changeHandler}
                    value={this.state.label === "List" ? this.state.list.desc : this.state.item.desc}
                    />

                <br />

                {() => {
                    if (this.state.label !== "List") {
                        return (
                            <div>
                                <label>{this.state.label} Due:</label>
                                <input
                                    type='text'
                                    id='due'
                                    name='item.due'
                                    onChange={this.changeHandler}
                                    value={this.state.item.due}
                                    />
                                <br />
                            </div>
                        )
                    }
                    return(
                        <div></div>
                    )
                }}

                <button>{`Add ${this.state.label}`}</button>
            </form>
        )
    }


    render() {
        return (
            <div>
                <h2>Add {this.state.label}</h2>
                {this.renderForm()}
            </div>
        )
    }
}