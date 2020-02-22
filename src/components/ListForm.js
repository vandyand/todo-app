import React from 'react'

export default class extends React.Component {

    state = {
        name: '',
        desc: '',
    }

    changeHandler = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        let data = { ...this.state }
        console.log("form submitHandler called! data:", data)
        if (!this.props.addOrUpdate) {
            data = { _id: this.props.curList._id, ...data }
        }
        this.props.submitHandler(data)
        this.props.closeButton()
    }

    close = () => {
        this.props.closeButton()
    }

    render() {
        return (
            <div>
                <h2>{this.props.addOrUpdate === true ? 'Add' : 'Update'} List:</h2>
                <form onSubmit={this.submitHandler}>
                    <label>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={this.changeHandler}
                        value={this.addOrUpdate ? this.state.name : this.props.curList.name}
                        required />
                    <label>Description:</label>
                    <input
                        type='text'
                        id='desc'
                        name='desc'
                        onChange={this.changeHandler}
                        value={this.addOrUpdate ? this.state.desc : this.props.curList.desc}
                    />
                    <button>{this.props.addOrUpdate === true ? 'Add' : 'Update'}</button>
                    <button type="button" onClick={this.close}>Close</button>
                </form>
            </div>
        )
    }
}