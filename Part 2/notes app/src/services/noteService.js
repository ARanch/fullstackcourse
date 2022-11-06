// handles server communication for the noted component
import axios from 'axios'
const baseUrl = 'http://localhost:3002/notes'

const getAll = () => {
    // gets all notes
    const request = axios.get(baseUrl) // whole request/promise
    const nonExisting = {
        id:1000,
        content: 'this note is not saved to the server',
        date: '2019-05-30T17:30:31.098Z',
        importan: true,
    }
    return request.then(response => response.data.concat(nonExisting)) // returns the then() promise and data only
}

const create = (newObject) => {
    // creates a new note
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data) // returns promis
}

const update = (id, newObject) => {
    // updates the note with id: id, changing it to newObject
    const request = axios.put(`${baseUrl}/${id}`, newObject) 
    return request.then(response => response.data)// returns promis
}

export default  {
    getAll,
    create,
    update
}