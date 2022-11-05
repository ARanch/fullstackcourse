import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/filter'
import InputForm from './components/inputForm'
import List from './components/list'
import entries from './services/entries'
//TO dos for ex 2.15-2.18
// √ add notes to a json server
// √ extract code that handles backend to separate module under /services
// make it possible to delete users, 
// confirm action with window.confirm method
// use http delete request. no data is sent with request
// make it possible to change phone number of entry via PUT

const App = () => {
  useEffect(() => {
    entries.getEntries().then(response => setPersons(response))
  }, [])

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Type new name...')
  const [newPhone, setNewPhone] = useState('Type new phone number...')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
    console.log(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }
  const handleDeleteEntry = () => {

  }

  const saveName = (event) => {
    event.preventDefault()
    checkDuplicates(persons, newName)
      ? alert(`The name "${newName}" is already entered in the phonebook!`) // using string template
      : setPersons(persons.concat({ name: newName, phone: newPhone }))

    entries.addEtry({
      name: newName,
      phone: newPhone
    }).then(() => {
      entries.getEntries().then(response => setPersons(response))
    })
  }

  const deleteEntry = (id) => {
    console.log(`deleteEntry(${id}) callled`)
    entries.deleteEntry(id).then(() => {
      entries.getEntries().then(response => setPersons(response))
    }
    )
  }

  const checkDuplicates = (persons, name) => {
    // takes an array of objects 
    let duplicate = false
    persons.every((person) => {
      if (person.name === name) {
        duplicate = true
        console.log('Duplicate found: ', duplicate)
        return false // breaks .every method
      } else {
        duplicate = false
        console.log('No duplicate found.')
        return true  // continues .every method
      }
    }
    )
    return duplicate
  }
  // breakout into: filter, input form, and phonebook list
  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      <InputForm submitHandler={saveName} nameHandler={handleNameChange} phoneHandler={handlePhoneChange} />
      <h3>Numbers</h3>
      <Filter handler={handleFilterChange} />
      <List persons={persons} filter={filter} deleteEntry={deleteEntry}/>
    </div>
  )
}

export default App