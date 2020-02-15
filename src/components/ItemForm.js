import React from 'react'

export default class extends React.Component {

    state = {
        name: '',
        list_id: '',
        desc: '',
        due: '',
    }

    changeHandler = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        const data = { ...this.state }
        this.props.submitHandler(data)
    }

    render() {
        return (
            <div>
                <h2>Add Item:</h2>
                <form onSubmit={this.submitHandler}>
                    <label>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={this.changeHandler}
                        value={this.state.name}
                        required />

                    <br />

                    <label>Description:</label>
                    <input
                        type='text'
                        id='desc'
                        name='desc'
                        onChange={this.changeHandler}
                        value={this.state.desc}
                    />

                    <br />

                    <label>Due:</label>
                    <input
                        type='text'
                        id='due'
                        name='due'
                        onChange={this.changeHandler}
                        value={this.state.due}
                    />

                    <br />

                    <button>Add</button>
                </form>
            </div>
        )
    }
}