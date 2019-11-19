import React from 'react'

export default class extends React.Component {

    state = {
        name: '',
        desc: '',
    }

    changeHandler = ({target}) => {
        this.setState({
            [target.name] : target.value
        })
    }

    submitHandler = () => {
        const data = {...this.state}
        console.log("form submitHandler called! data:",data)
        this.props.submitHandler(data)
    }

    render() {
        return (
            <div>
                <h2>Add List</h2>
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

                <button>Add</button>
            </form>
            </div>
        )
    }
}