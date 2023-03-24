////Component that will display the pokemon info and image on the right side
const PokeInfo = () => {
    return(
        <>
            <h2>Pikachu</h2>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif" alt="" />
            <div className="types">
                <div className="type">
                    <h3>Electric</h3>
                </div>
                <div className="type">
                    <h3>Rodent</h3>
                </div>
            </div>
            <div className="base-stat">
                <h3>weeee</h3>
            </div>
        </>
    )
}
            // If there isn't data set it to an empty string
            // All relevant pokemon info to be mapped through and displayed here in their proper elements(name, base stats, types)
            // setup for the info, name, img, type, base stats

// dont forget to export the component
export default PokeInfo;