import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not importan' : 'make important'
  return (
    <tr>
      <td>
        {note.content}
      </td>
      <td>
        <button onClick={toggleImportance}>{label}</button>
      </td>
    </tr>
  )
}

export default Note