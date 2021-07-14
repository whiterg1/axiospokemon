import React, {useState, useEffect} from 'react'
import axios from 'axios';

const PokemonCall = (props) =>{
    const [state, setState] = useState(0);
    const [show, setShow] = useState(false);


    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=807")
        .then(res => {
            const response = res.data.results;
            setState(response)
        })
        .catch(err=>{
            console.log(err);
        })
    }, []);

    const showNow = () =>{
        setShow(true);
    }


    return(
    <div>
        <button onClick={showNow}>Fetch Pokemon</button>
        {show == true ? state.map((pokemon, index) =>{
            return(<div key={index}><li>{pokemon.name}</li></div>)
             }):null}
    </div>

  )
}
export default PokemonCall;
