const Display = ({pokemon, loading, pokeInfo}) => {
        return(
                <>
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
export default Display;