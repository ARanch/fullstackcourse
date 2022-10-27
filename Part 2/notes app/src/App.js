import { useEffect, useState } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/noteService'  // module server handling for notes


const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect fired')
    noteService
      .getAll()
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log('Server returned: ', error.response.status)
          console.log(error.response.headers)
        }
      })
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
      })
  }, [])

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault()
    // console.log('Button clicked', event.target)
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(response => {
        console.log(response)
        setNotes(notes.concat(noteObject))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}` // url/server location of note to be changed
    const note = notes.find(n => n.id === id) // find note in DOM state notes object matching id of note to be changed
    const changedNote = { ...note, important: !note.important } //create shallow copy of specific note object, where the important parameter is inverted
    noteService.update(id, changedNote).then(returnedNote => {
      setNotes(notes.map(n => n.id !== id ? n : returnedNote))
    })
      .catch(error => {
        alert(`the note '${note.content}' was already deleted from server`) // alert that note was deleted
        setNotes(notes.filter(n => n.id !== id)) // filter out the missing note
      })

  //axios.put(url, changedNote).then(response => { // put new note to server
  //   setNotes(notes.map(n => n.id !== id ? n : response.data)) // change the note in DOM, i.e.: if ID does not match, keep note n, else, change to response from server (i.e. the data that was just put there)
  // })
  console.log(`toggle importance of note ${id}`)
  // axios.porst('http://localhost:3001/notes/id:1')
}

return (
  <div>
    <h1>Notes</h1>
    <div>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
    </div>
    <table>
      <tbody>
        {notesToShow.map(note =>
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />)}
      </tbody>
    </table>
    <form onSubmit={addNote}>
      <input
        value={newNote}
        onChange={handleNoteChange}
      />
      <button type="submit">save</button>
    </form>
  </div>
)
}

export default App