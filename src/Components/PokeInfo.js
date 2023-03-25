////Component that will display the pokemon info and image on the right side
const PokeInfo = () => {
        return(
                <>
                 <h1>Pikachu</h1>
                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif" alt="" />
                 <div className="types">
                        <div className="type">
                                <h3>Electric</h3>
                        </div>
                        <div className="type">
                                <h3>Rodent</h3>
                        </div>
                 </div>
                 <div className="base-stats">
                        <h4>weweewee</h4>
                        <h4>weweewwe</h4>
                        <h4>weewweew</h4>
                        <h4>weewweew</h4>
                        <h4>weewewew</h4>
                 </div>
                </>
        )
}
// prop the info from pokedex which was defined as data in the main component

            {/* then check to see if the data is empty, if it is, return empty string. Otherwise, display the data using a conditional 
                    {/* replace hardcode with data from api, the img will be displayed based on the URL and the pokemon */}


// If there isn't data set it to an empty string
// All relevant pokemon info to be mapped through and displayed here in their proper elements(name, base stats, types)
// setup for the info, name, img, type, base stats

// dont forget to export the component
export default PokeInfo;