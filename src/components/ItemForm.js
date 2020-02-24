import React from 'react'

export default class extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            list_id: '',
            desc: '',
            due: '',
        }

        if (props.curItem !== {}) {
            this.state = {
                name: props.curItem.name,
                list_id: props.curItem.list_id,
                desc: props.curItem.desc,
                due: props.curItem.due
            }
        }
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
        this.props.closeButton()
    }

    close = () => {
        this.props.closeButton()
    }

    render() {
        return (
            <div>
                <h2>{this.props.addOrUpdate === true ? 'Add' : 'Update'} Item:</h2>
                <form className="Form" onSubmit={this.submitHandler}>
                    <label>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={this.changeHandler}
                        value={this.state.name}
                        required />
                    <label>Description:</label>
                    <input
                        type='text'
                        id='desc'
                        name='desc'
                        onChange={this.changeHandler}
                        value={this.state.desc}
                    />
                    <label>Due:</label>
                    <input
                        type='text'
                        id='due'
                        name='due'
                        onChange={this.changeHandler}
                        value={this.state.due}
                    />
                    <input type='hidden' id='isComplete' name='isComplete' value='false'></input>
                    <div>
                        <button>{this.props.addOrUpdate === true ? 'Add' : 'Update'}</button>
                        <button type='button' onClick={this.close}>Close</button>
                    </div>
                </form>
            </div>
        )
    }
}