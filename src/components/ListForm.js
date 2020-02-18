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
        const data = { ...this.state }
        console.log("form submitHandler called! data:", data)
        this.props.submitHandler(data)
        this.close()
    }

    close = () => {
        this.props.closeButton()
    }

    render() {
        return (
            <div>
                <h2>{this.props.displayText} List:</h2>
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

                    <button>{this.props.displayText}</button>
                    <button type="button" onClick={this.close}>Close</button>
                </form>
            </div>
        )
    }
}