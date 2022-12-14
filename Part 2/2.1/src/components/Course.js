import React from 'react'

import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
    console.log('hello course')

    return (
        <div>
            <Header text={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}
export default Course