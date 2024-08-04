import Icon from "../Icon/Icon";
import { memo } from "react";
import "./Card.css"

function Card({ onPlay, player, index, gameEnd} ){

    let icon = <Icon />
    if(player == "X"){
        icon = <Icon name = {"cross"} />
    } else if(player == "O"){
        icon = <Icon name = {"circle"} />
    }

    return (
        <div className='card' onClick={() => !gameEnd && player =="" && onPlay(index)}> {/*if game wasn't ended and the card is untouched then we click the card to change*/} 
            {icon}
        </div>
    );
} 

export default memo(Card);