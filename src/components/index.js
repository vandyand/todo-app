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
        console.log('addList called. newItem:',newItem)
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

    render() {
        console.log(this.state)
        return (
            <div>
                <Lists lists={this.state.lists}
                    selectList={this.selectList}
                    addList={this.addList} />

                <List state={this.state} addItem={this.addItem} />

            </div>
        )
    }
}
