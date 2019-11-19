import React from 'react'
import Lists from './Lists'
// import List from './List'
// import { LISTS } from '../config'

export default class extends React.Component {
    state = {
        lists: [],
        listId: "",
        items: [],
    }

    fetchLists = () => {
        console.log('getLists called!')
        fetch('http://localhost:4001/lists')
            .then(response => response.json())
            .then(lists => {
                this.setState({ lists,listId:lists[0].listID })
            })
            .catch(err => console.log(err))
    }

    fetchItems = (listId) => {
        console.log('getItems called!')
        fetch('http://localhost:4001/items')
            .then(response => response.json())
            .then(allItems => {
                let items = allItems.filter(item => item.list_id === listId)
                this.setState({ items })
            })
            .catch(err => console.log(err))
    }


    componentDidMount() {
        this.fetchLists()
        this.fetchItems(this.state.listId)
    }


    render() {
        return (
            <div>
                <p>Testing testing 1 2 3 (from index.js)</p>
                <button onClick={this.fetchLists}>fetchLists</button>
                {/* <div>{this.state.lists.map(val => <p>{val.desc}</p>)}</div> */}
                <Lists lists={this.state.lists} selectList={this.selectList} />

                {/* {} */}


                {/* <List
                    list={this.state.lists[this.listId]}
                    items={this.state.items.filter(x => x.listId === this.listId)} /> */}
            </div>
        )
    }
}
