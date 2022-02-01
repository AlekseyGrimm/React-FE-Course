import './StyleSheet.css'
import _ from 'lodash';

function creatElement () {
    const el = document.createElement('div')

    el.innerHTML = _.join(['Hello', 'World!'])
    return el
}

document.body.appendChild(creatElement())
