import { useState } from 'react'
const List = ({persons, filter}) => {
    return (
        <div>
            <ul>
                {filter === ''
                    ? persons.map(person => <li key={person.name}>👨‍🦱 {person.name} – 📱 Phone: {person.phone}</li>)
                    : persons.filter(person => person.name.toLowerCase() === filter).map(person => <li key={person.name}>👨‍🦱 {person.name} – 📱 Phone: {person.phone}</li>)
                }
            </ul>
        </div>

    )
}
export default List