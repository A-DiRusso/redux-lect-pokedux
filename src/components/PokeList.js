import React from 'react';

function PokeList({cards, visibilityFilter, handleClick}) {
    console.log(`The visibility filter is: ${visibilityFilter}`);

    let filteredCards = cards;
    if (visibilityFilter === 'caught') {
        console.log('Caught Filter');
        filteredCards = filteredCards.filter(card => card.isCaught);
    } else if (visibilityFilter === 'uncaught') {
        console.log('Uncaught Filter');
        filteredCards = filteredCards.filter(card => !card.isCaught);
    } else {
        console.log('No Filter');
    }
    console.log(filteredCards);
    
        
    const cardItems = filteredCards.map((card) => {
        return <li onClick={() => {
            handleClick(card.id);
        }} key={card.id}><img className="pokeImg" src={card.imageUrl} alt="poke"/><br/>{card.name}</li>
    });
    return (
        <ul>
            {cardItems}
        </ul>
    );
}

export default PokeList;