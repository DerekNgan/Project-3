import Display from './Display';
import PokeInfo from './PokeInfo';
import axios from 'axios'
import { useState, useEffect } from 'react'

const Pokedex = () => {
        const [ pokeData , setPokedata ]=useState([]);
        const [ loading , setLoading ]=useState(true);
        const [ url , setUrl ]=useState('https://pokeapi.co/api/v2/pokemon/');
        const [ nextUrl , setNextUrl ]=useState();
        const [ prevUrl , setPrevUrl ]=useState();
        const [ pokeInfo, setPokeInfo ]=useState();
        const [ message, setMessage] = useState();

            const pokeAll = async () => {
                setLoading(true);
                const response=await axios.get(url);
                {
                    url ? setMessage ("") : setMessage("Sorry, couldn't find the data")
                }
                setNextUrl(response.data.next);
                setPrevUrl(response.data.previous);
                getPokemon(response.data.results)
                setLoading(false)
            }
            const getPokemon=async(response)=>{
                response.map(async(poke)=>{
                    const result=await axios.get(poke.url)
                    {
                        poke.url ? setMessage("") : setMessage("Sorry, couldn't find the data")
                    }
                    setPokedata(state=>{
                        state=[...state,result.data]
                        state.sort((a,b)=>a.id>b.id ? 1 : -1)
                        return state
                    });
                })
            }

         useEffect(()=>{pokeAll()},[url])

    return(
        <>
            <header className="title">
                    <h1>Pokedex!</h1>
                    <h2>Choose a pokemon!</h2>
            </header>

        <main>
            <div className="container">
                    <section className="left-content">

                            <Display pokemon={pokeData} loading={loading} pokeInfo={poke=>setPokeInfo(poke)} />
                            <section className='btn-container'>
                                {prevUrl && <button onClick={()=>{
                                    setPokedata([])
                                    setUrl(prevUrl)
                                }}>Previous</button>}
                                {nextUrl && <button onClick={()=>{
                                    setPokedata([])
                                    setUrl(nextUrl)
                                }}>Next</button>}
                            </section>
                    </section>
                <section className='right-content'>
                    <PokeInfo poke={pokeInfo} message={message}/>
                </section>
            </div>
        </main>
            <footer>
                <p>© Derek Ngan 2023</p>
            </footer>
        </>
    )
}

export default Pokedex;