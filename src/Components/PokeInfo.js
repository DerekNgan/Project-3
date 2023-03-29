////Component that will display the pokemon info and image on the right side
const PokeInfo = ({poke}) => {
        return(
                <>
                {/* // prop the info from pokedex which was defined as data in the main component */}

                {/* then check to see if the data is empty, if it is, return empty string. Otherwise, display the data using a conditional 
                
                {/* replace hardcode with data from api, the img will be displayed based on the URL and the pokemon */}


                {/* // If there isn't data set it to an empty string
                // All relevant pokemon info to be mapped through and displayed here in their proper elements(name, base stats, types)
                // setup for the info, name, img, type, base stats */}
                {
                        (!poke) ? "" : 
                        <>
                        <div className="infoContainer">
                             <h1>{poke.name}</h1>
                             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${poke.id}.gif`} alt="" />
                                <div className="types">
                                        {
                                        poke.types.map((poke, index)=>{
                                                return(
                                                <div className="type" key={index}>
                                                        <h3>{poke.type.name}</h3>
                                                </div>
                                                )
                                                })
                                        }
                                </div>
                                        <div className="base-stats">
                                                {
                                                    poke.stats.map((poke, index)=>{
                                                        return(
                                                        <h4 key={index}>{poke.stat.name}:{poke.base_stat}</h4>
                                                        )
                                                    })
                                                }
                                                
                                        </div>
                        </div>
                        </>
                }
                 
                </>
        )
}


// dont forget to export the component
export default PokeInfo;