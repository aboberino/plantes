import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import PlantCard from './components/PlantCard/PlantCard'
import bamboo from './assets/bamboo.png'
import guzmania from './assets/guzmania.png'
import monstera from './assets/monstera.png'
import yucca from './assets/yucca.png'

const plants = [
  { name: 'Yucca', kingdom: 'Plantae', family: 'Asparagaceae', img: yucca, e: true },
  { name: 'Guzmania', kingdom: 'Plantae', family: 'Bromeliaceae', img: guzmania },
  { name: 'Bamboo', kingdom: 'Plantae', family: 'Poaceae', img: bamboo },
  { name: 'Monstera', kingdom: 'Plantae', family: 'Araceae', img: monstera },
]

function App() {

  return (
    <div className="app">
      <div className="main">
        <div className="circle right"></div>
        <div className="circle left"></div>
        <Header />
        <div className="title">
          Welcome to my garden, the happiness therapy
        </div>
        <div className="content">
          {plants.map((p, i) => <PlantCard plant={p} key={i}/>)}
        </div>
      </div>
    </div>
  )
}

export default App
