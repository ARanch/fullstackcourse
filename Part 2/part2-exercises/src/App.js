import { useState } from 'react'
import Filter from './components/filter'
// demands:
// add names to list of contacts

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Missen', phone: '112' },
    { name: 'pølsen', phone: '70 20 14 16' }
  ])
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

  const saveName = (event) => {
    event.preventDefault()
    checkDuplicates(persons, newName)
      ? alert(`The name "${newName}" is already entered in the phonebook!`) // using string template
      : setPersons(persons.concat({ name: newName, phone: newPhone }))
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
  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add new</h3>
      <form onSubmit={saveName}>
        <div>
          name:
          <input
            onChange={handleNameChange}
            placeholder='insert name here' />
        </div>
        <div>
          Phonenumber:
          <input
            onChange={handlePhoneChange}
            placeholder='insert phone number here' />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <Filter handler={handleFilterChange}/>
      <div>
        <ul>
          {filter === ''
            ? persons.map(person => <li key={person.name}>👨‍🦱 {person.name} – 📱 Phone: {person.phone}</li>)
            : persons.filter(person => person.name.toLowerCase() === filter).map(person => <li key={person.name}>👨‍🦱 {person.name} – 📱 Phone: {person.phone}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default App