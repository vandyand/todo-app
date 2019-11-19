import React from 'react'
import Lists from './Lists'
import List from './List'

export default class extends React.Component {
    state = {
        lists: [],
        list_id: "",
        items: [],
    }

    componentDidMount() {
        this.fetchLists()
        this.fetchItems()
    }

    selectList = (list_id) => {
        console.log("selectList called")
        this.setState({ list_id })
    }

    fetchLists = () => {
        console.log('fetchLists called!')
        fetch('http://localhost:4001/lists')
            .then(response => response.json())
            .then(lists => {
                this.setState({ lists })
            })
            .catch(err => console.log(err))
    }

    fetchItems = () => {
        console.log('fetchItems called!')
        fetch('http://localhost:4001/items')
            .then(response => response.json())
            .then(items => {
                this.setState({ items })
            })
            .catch(err => console.log(err))
    }

    addList = (newList) => {
        console.log('addList called')
        console.log(newList)
        // let newListt = {...newList}
        fetch('http://localhost:4001/lists', {
            method: 'post',
            body: JSON.stringify(newList),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(response => console.log(response))
    }

    addItem = (newItem) => {
        console.log('addList called')
        fetch('http://localhost:4001/item', {
            method: 'post',
            body: JSON.stringify(newItem),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(response => console.log(response))

    }

    render() {
        console.log(this.state)
        return (
            <div>
                <p>Testing testing 1 2 3 (from index.js)</p>

                <Lists lists={this.state.lists}
                    selectList={this.selectList}
                    addList={this.addList} />

                <List state={this.state} addItem={this.addItem} />

            </div>
        )
    }
}
