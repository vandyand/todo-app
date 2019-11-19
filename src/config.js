// Development
const LISTS_URL = ""

// Example Data
const LISTS = [
    {
        "id":"1",
        "name": "list1",
        "desc": "this is the first list",
        "items": [
            {
                "id":"1",
                "name": "item1-1",
                "desc": "this is the first item of the first list",
                "due": "11/8/19 12:00PM"
            },
            {
                "id":"2",
                "name": "item1-2",
                "desc": "this is the second item of the first list",
                "due": ""
            }
        ]
    },
    {
        "id":"2",
        "name": "list2",
        "desc": "this is the second list",
        "items": [
            {
                "id":"1",
                "name": "item2-1",
                "desc": "this is the first item of the second list",
                "due": "Friday"
            },
            {
                "id":"2",
                "name": "item2-2",
                "desc": "this is the second item of the second list",
                "due": "1 Year"
            },
            {
                "id":"3",
                "name": "item2-3",
                "desc": "this is the third item of the second list",
                "due": "34 Days and 2 seconds"
            }
        ]
    },
    {
        "id":"3",
        "name": "list3",
        "desc": "this is the third list",
        "items": []
    }
]


module.exports = {
    LISTS,
    LISTS_URL
}
