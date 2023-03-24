// Main component that will hold other components
// import useState / useEffect and axios
// import components accordingly
import Display from './Display';
import PokeInfo from './PokeInfo';
import axios from 'axios'
import { useState, useEffect } from 'react'

// create a function that will hold all of the logic and initial states of the useStates(URL api state, loading state(by default should be true), next and previous button states, pokemon info state and a state of an empty array which will store the data from the API) and the function which will fetch from the api


    // create a function that will hold most of the states and fetch from the url using the url useState and set the next and previous button states according to the api docs, the loading states(true / false) and 


    // a method that passes the response as an argument which fetches specific pokemon data using map by passing the data array as a parameter to make an api call then pushing the data into the useState from the api and update the state within and sort the data based on pokemon id


    // create a useEffect that will run everything in the function that holds all the states, dependant on the url state (aka once we fetch from the API)


    // setup within the return a container that will hold the info (left and right) along with the buttons and import the other two components in here. 
    // import the Display and Info components
    // Once the data has been fetched from the API, prop the info into the display component 
    // Make sure the previous and next buttons don't show on first and last page (error handling)
    return(
        <>

        </>
    )
 
export default Pokedex;