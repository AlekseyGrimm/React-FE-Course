import React from 'react'
import ReactDom from 'react-dom'
import './style.css'
import _ from 'lodash'

function creatElement () {
    const el = document.createElement('div')

    el.innerHTML = _.join(['Hello', 'World!'])
    el.classList.add('hello')
    return el
}

document.body.appendChild(creatElement())

const el = document.createElement('div')
el.id = 'react'
document.body.appendChild(el)
ReactDom.render(<h1>Hello React</h1>, el)