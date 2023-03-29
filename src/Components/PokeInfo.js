const PokeInfo = ({poke}) => {
        return(
<>
{
        (!poke) ? "" : 
        <>
        <div className="infoContainer">
                <h1>{poke.name}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${poke.id}.gif`} alt="pokemon gif" />
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
export default PokeInfo;