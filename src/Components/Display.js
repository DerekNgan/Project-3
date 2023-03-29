//Component that will display the pokemon info and image on the left side
// prop the info and loading state into display, prop the state for displaying the pokemon when clicked on
const Display = ({pokemon, loading, pokeInfo}) => {
          //set loading state using conditional, if the data is loading return a loading text otherwise, map through the data and return the data to be displayed 
          return(
          <>
                {/* add an onclick function on the display to display the state defined for the pokemon info and call that state within the function and pass the data into it as argument */}
                  
                {/* // setup error handling, if the info is loading display a loading...text, otherwise, return and display the pokemon info */}

                {/* // setup a display for the id, name and image */}
         {
                
                loading ? <h1>Loading...</h1> : 
                pokemon.map((poke, index)=>{
                        return(
                                <div className="display" key={index} onClick={()=>pokeInfo(poke)}>
                                        <h2>{poke.id}</h2>
                                        <img src={poke.sprites.front_default} alt="" />
                                        <h2>{poke.name}</h2>
                                </div>
                        )
                })
         }
         
        
                
        </>
        )
}



               


// dont forget to export the component
export default Display;