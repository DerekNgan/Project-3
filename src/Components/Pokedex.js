// Main component that will hold other components
// import useState / useEffect and axios
// import components accordingly
import Display from './Display';
import PokeInfo from './PokeInfo';
import Form from './Form';
import axios from 'axios'
import { useState, useEffect } from 'react'

// create a function that will hold all of the logic and initial states of the useStates(URL api state, loading state(by default should be true), next and previous button states, pokemon info state and a state of an empty array which will store the data from the API) and the function which will fetch from the api
const Pokedex = () => {
            // define states within this function
        // state that will hold pokemon info, so set as empty array
        const [ pokeData , setPokedata ]=useState([]);
        // loading state when info is being fetched from API by default should be true
        const [ loading , setLoading ]=useState(true);
        // state of fetching data from url/api, set state as api
        const [ url , setUrl ]=useState('https://pokeapi.co/api/v2/pokemon/');
        // state of next button and previous button
        const [ nextUrl , setNextUrl ]=useState();
        const [ prevUrl , setPrevUrl ]=useState();
        // state for when specific pokemon is clicked on display the info
        const [ pokeInfo, setPokeInfo ]=useState();

         // create a function that will hold most of the states and fetch from the url using the url useState and set the next and previous button states according to the api docs, the loading states(true / false) and 
        // define the pokeAll function
            const pokeAll = async () => {
            // call setLoading state 
                setLoading(true);
            // create api request using axios get function and the url state
                const response=await axios.get(url);
                // console.log(response.data.results)
            // set the next and previous button states to according to the api results
                setNextUrl(response.data.next);
                setPrevUrl(response.data.previous);
            // passing the object array into the getPokemon method which will be defined below so that the method can map through the information for the specific data that is needed
                getPokemon(response.data.results)
                setLoading(false)
            }
           
         // a method that passes the response as an argument which fetches specific pokemon data using map by passing a parameter to make an api call then storing that data into a variable for pushing the data into the useState from the api and update the state within / return that data and sort the data based on pokemon id
        //  then use the data state and prop it into the components
                // after mapping, make api request function
                // console.log(result)
                // store the data objects within our array state by using the state to create a new empty array and then push the results data into that array
                // define the sort function within the push into the state before we return so we can sort the pokemon based on id
            const getPokemon=async(response)=>{
                response.map(async(poke)=>{
                    const result=await axios.get(poke.url)
                    // console.log(result)
                    setPokedata(state=>{
                        state=[...state,result.data]
                        state.sort((a,b)=>a.id>b.id ? 1 : -1)
                        return state;
                    })
                })
            }

         // create a useEffect that will only run functions on api fetch (aka url state)
         // create a useEffect that will run everything in the function that holds all the states, dependant on the url state (aka once we fetch from the API) 
         useEffect(()=>{pokeAll()},[url])

    // setup within the return a container that will hold the info (left and right) along with the buttons and import the other two components in here. 
    // import the Display and Info components
    // Once the data has been fetched from the API, prop the info into the display component 
    // Make sure the previous and next buttons don't show on first and last page (error handling)
    return(
        
        <>
        
            <div className="title">
                    <h1>Pokedex!</h1>
            </div>
            {/* prop our data state into the display and the loading state */}
                        {/* add a state into the display and call that state function and pass the data value as the argument */}

                        {/* create the next and previous buttons */}

                            {/* add the onclick event and set the state to the next and prev url */}

                            {/* // in order to not keep the pokemons adding on after clicking the next buttons and vice versa the pokedata state needs to be set to an empty array
                                // error handle buttons and make sure they can't be clicked on first and last page 
                                    // add the button states to the button element and using the && property it will check for boolean values, if the first condition is false it will not check for the second condition */}
         
                        {/* pass the info state into pokeInfo then prop it into the component */}
                        
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
        </>
    )
}





 
export default Pokedex;