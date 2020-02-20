import React from 'react'
import Lists from './Lists'
import List from './List'
import { API_URL } from '../config'

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
        fetch(`${API_URL}/lists`)
            .then(response => response.json())
            .then(lists => {
                this.setState({ lists })
            })
            .catch(err => console.log(err))
    }

    fetchItems = () => {
        console.log('fetchItems called!')
        fetch(`${API_URL}/items`)
            .then(response => response.json())
            .then(items => {
                this.setState({ items })
            })
            .catch(err => console.log(err))
    }

    addList = (newList) => {
        console.log('addList called')
        fetch(`${API_URL}/lists`, {
            method: 'post',
            body: JSON.stringify(newList),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(response => {
                console.log(response)
                this.fetchLists()
            })
    }

    addItem = (newItem) => {
        newItem.list_id = this.state.list_id
        console.log('addList called. newItem:', newItem)
        fetch(`${API_URL}/items`, {
            method: 'post',
            body: JSON.stringify(newItem),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(response => {
                console.log(response)
                this.fetchItems()
            })
    }


    deleteList = (listToDelete) => {
        console.log('delete list called!', listToDelete)
        if (window.confirm(`Are you sure you want to delete ${listToDelete.name}?`)) {
            fetch(`${API_URL}/lists`, {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ _id: listToDelete._id })
            })
                .catch(err => console.log(err))
                .then(response => {
                    console.log(response)
                    this.fetchLists()
                    this.fetchItems()
                    this.setState({ list_id: '' })
                })
        }
    }

    deleteItem = (itemToDelete) => {
        console.log('delete item called!', itemToDelete)
        if (window.confirm(`Are you sure you want to delete ${itemToDelete.name}?`)) {
            fetch(`${API_URL}/items`, {
                method: 'delete',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ _id: itemToDelete._id })
            })
                .catch(err => console.log(err))
                .then(response => {
                    console.log(response)
                    this.fetchLists()
                    this.fetchItems()
                })
        }
    }

    updateList = (listToUpdate) => {
        console.log('update list called!', listToUpdate)
        fetch(`${API_URL}/lists`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listToUpdate)
        })
            .catch(err => console.log(err))
            .then(response => {
                console.log(response)
                this.fetchLists()
                this.fetchItems()
                this.setState({ list_id: '' })
            })
    }

    updateItem = (itemToUpdate) => {
        console.log('update item called!', itemToUpdate)
        fetch(`${API_URL}/items`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemToUpdate)
        })
            .catch(err => console.log(err))
            .then(response => {
                console.log(response)
                this.fetchLists()
                this.fetchItems()
                this.setState({ list_id: '' })
            })
    }

    render() {
        console.log("render state: ",this.state)
        return (
            <div className="index">
                <Lists lists={this.state.lists}
                    selectList={this.selectList}
                    addList={this.addList}
                    deleteList={this.deleteList}
                    updateList={this.updateList} />

                <List state={this.state} addItem={this.addItem} deleteItem={this.deleteItem} updateItem={this.updateItem} />

            </div>
        )
    }
}
