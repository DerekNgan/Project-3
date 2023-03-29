const Form = ({poke}) => {

    return(
        <>
            <form action="">
                <label htmlFor=""></label>
                <option value="placeholder">Choose Pokemon:</option>
                <option value={poke.id}>{poke.id} {poke.name}</option>
            </form>
        </>
    )
}

export default Form;