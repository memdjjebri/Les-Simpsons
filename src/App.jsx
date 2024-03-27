import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './assets/Avatar'

function App() {

    return (
        
        <>
        <h1>La famille Simpson</h1>
            <Avatar firstName="Bart" lastName="Simpson" image="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png" />
            <Avatar firstName="Homer" lastName="Simpson" image="https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png" />
            <Avatar firstName="Lisa" lastName="Simpson" image="https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png" />
        </>
    )
}

export default App
