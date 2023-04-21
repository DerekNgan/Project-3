const Display = ({pokemon, loading, pokeInfo}) => {
        return(
                <>
                {
                loading ? <h2>Loading...</h2> : 
                pokemon.map((poke, index)=>{
                        return(
                                <button className="display" key={index} onClick={()=>pokeInfo(poke)}>
                                        <ul>
                                             <li>
                                                <h2>{poke.id}</h2>
                                                <img src={poke.sprites.front_default} alt="" />
                                                <h2>{poke.name}</h2>
                                             </li>
                                        </ul>
                                        
                                </button>
                                )
                        })
                }
                </>
        )
}
export default Display;