import { useState } from 'react'
// demands:
// add names to list of contacts

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('Type new name...')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const saveName = (event) => {
    event.preventDefault()
    checkDuplicates(persons, newName) 
      ? alert(`The name "${newName}" is already entered in the phonebook!`) // using string template
      : setPersons(persons.concat({ name: newName }))
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={saveName}>
        <div>
          name:
          <input
            onChange={handleNameChange}
            placeholder='insert name here' />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App