import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";

const Bottles = () => {
    const[bottles, setBottles] = useState([])
    const [card, setCard]= useState([])

    useEffect(() =>{
        fetch('bottle.json')
        .then(res =>res.json())
        .then(data => setBottles(data))
    },[])
    const handleAddCard = bottle =>{
        const newCard =[...card, bottle];
        setCard(newCard)
    }

    return (
      <div>
        <h2>Bottle Hear :{bottles.length}</h2>
        <h4>card : {card.length}</h4>
        {
            bottles.map(bottle =><Bottle key={bottle} bottle={bottle} handleAddCard={handleAddCard}j></Bottle>)
        }
      </div>
    );
};

export default Bottles;