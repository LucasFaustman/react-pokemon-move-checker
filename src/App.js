import './App.css';
import { useState } from 'react'
import Pokemon from './components/Pokemon'
import Header from './components/Header'
import Footer from './Footer';


function App() {

  const [form, setForm] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [pokemon, setPokemon] = useState({
    id: '',
    name: '',
    image: '',
    moves: [],
    abilities: []
  })
  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${form.toLowerCase()}`)
       const result = await response.json()
       console.log(result)
     setPokemon({
     id: result.id,
     name: result.name,
     image: result.sprites.front_default,
     moves: result.moves,
     abilities: result.abilities
   })  
   if (result) {
     setIsLoading(false)
   }
  }
  catch(error) {     
    setIsLoading(false)
    setError('Pokemon not found')
    setPokemon({id: '',
    name: '',
    image: '',
    moves: [],
    abilities: []})
}

  }
  
  function handleChange (e) {
    const value  = e.target.value
    setForm(value)
  }



  return (
    
    <div className="App">
      <Header />
      {!isLoading && <form className='form' onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="pokemon" 
            value={form}  
            onChange={handleChange} 
            placeholder={`Pokemon name`} />
            <button className='button-24' type="submit">{`Search`}</button>

        </form>}
      <div>
        <Pokemon pokemon={pokemon} error={error}/>
      </div>
      <div className="form">
      </div>
      <Footer />
    </div>
  );
}

export default App;
