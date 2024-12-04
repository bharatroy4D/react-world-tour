
import "./Bottle.css"
const Bottle = ({bottle,handleAddCard}) => {
    const {id, name, img}= bottle;
    return (
        <div className="bottleStyle">
            <h2>bottle: {id}</h2>
            <h3>Name : {name}</h3>
            <button onClick={()=>handleAddCard(bottle)}>purcese</button>
        </div>
    );
};

export default Bottle;