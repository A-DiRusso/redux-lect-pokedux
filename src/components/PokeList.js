import React from 'react';

function PokeList({cards}) {

    const cardItems = cards.map((card, i) => {
        return <li key={i}>{card.name}</li>
    });
    return (
        <ul>
            {cardItems}
        </ul>
    );
}

export default PokeList;