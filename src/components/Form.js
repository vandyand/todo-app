import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name:'',
            desc:'',
            due:''
        }
    }

    changeHandler = ({target}) => {
        this.setState({
            [target.name] : target.value
        })
    }

    submitHandler = () => {
        
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label>Todo Item:</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    onChange={this.changeHandler}
                    placeholder="Todo Item"
                    value={this.state.name}
                    required />
                
                <label>Todo Description:</label>
                <input
                    type='text'
                    id='desc'
                    name='desc'
                    onChange={this.changeHandler}
                    placeholder="What todo?"
                    value={this.state.desc} />
                
                <label>Due Date:</label>
                <input
                    type='text'
                    id='due'
                    name='due'
                    onChange={this.changeHandler}
                    placeholder="Due date?"
                    value={this.state.due} />

                <button>Submit</button>
            </form>
        )
    }
}


