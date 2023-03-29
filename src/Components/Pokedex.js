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

            const pokeAll = async () => {
                setLoading(true);
                const response=await axios.get(url);
                setNextUrl(response.data.next);
                setPrevUrl(response.data.previous);
                getPokemon(response.data.results)
                setLoading(false)
            }
            const getPokemon=async(response)=>{
                response.map(async(poke)=>{
                    const result=await axios.get(poke.url)
                    setPokedata(state=>{
                        state=[...state,result.data]
                        state.sort((a,b)=>a.id>b.id ? 1 : -1)
                        return state;
                    })
                })
            }

         useEffect(()=>{pokeAll()},[url])

    return(
        <>
            <div className="title">
                    <h1>Pokedex!</h1>
                    <h2>Choose a pokemon!</h2>
            </div>

            <div className="container">
                    <div className="left-content">

                            <Display pokemon={pokeData} loading={loading} pokeInfo={poke=>setPokeInfo(poke)} />

                            <div className="btn-container">
                                {prevUrl && <button onClick={()=>{
                                    setPokedata([])
                                    setUrl(prevUrl)
                                }}>Previous</button>}
                                {nextUrl && <button onClick={()=>{
                                    setPokedata([])
                                    setUrl(nextUrl)
                                }}>Next</button>}
                            </div>
                    </div>

                    <div className="right-content">
                            <PokeInfo poke={pokeInfo}/>
                    </div>
            </div>
            <footer>
                <p>© Derek Ngan 2023</p>
            </footer>
        </>
    )
}

export default Pokedex;