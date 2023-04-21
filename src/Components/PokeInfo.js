const PokeInfo = ({poke}) => {
        return(
<>
{
        (!poke) ? "" : 
        <>
        <div className="infoContainer">
                <h2>{poke.name}</h2>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${poke.id}.gif`} alt="pokemon gif" />
                <ul className="types">
                        {
                        poke.types.map((poke, index)=>{
                                return(
                                <li className="type" key={index}>
                                        <h3>{poke.type.name}</h3>
                                </li>
                                )
                                })
                        }
                </ul>

                <ul className="base-stats">
                {
                        poke.stats.map((poke, index)=>{
                        return(
                        <li key={index}>{poke.stat.name}:{poke.base_stat}</li>
                        )
                        })
                }
                </ul>
        </div>
        </>
}
</>
)
}
export default PokeInfo;