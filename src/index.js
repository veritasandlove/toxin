console.log("Как же интересно!")

// создание свойства класса без конструктора
class Game {
    name = 'Violin Charades'
}
const myGame = new Game()

// создаем параграф
const p = document.createElement('p')
p.textContent = `I like ${myGame.game}.`

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Как же интересно!!!!'

// добавляем параграф и заголовок в DOM
const root = document.querySelector('#root')
root.append(heading, p)

import example from './images/example.jpg'
import './styles/main.scss'