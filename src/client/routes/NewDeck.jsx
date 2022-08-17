import React, { useState, useEffect } from 'react';
import '../../App.scss';

const NewDeck = () => {

    //useState hook to update name of deck
    const [deckName, setDeckName] = useState('');
    //usestate hook to gewt input word
    const [word, setWord] = useState('');
    //function to use API to get definition of word that was input


    return (
      <div key='new-deck' id='new-deck' className='new-deck'>

        <input type='text' name='new-deck-name' className='new-deck-name' placeholder='New Deck Name'/>  

        <div key='card-content' className='card-content'>
          <form key='card-input' className='card-input'>
            <input 
            type='text' 
            name='word' 
            className='word' 
            placeholder='Word' 
            onChange={(e) => setWord(word += e.target.value)}
            />
            <select>
                <option value='en'>English</option>
                <option value='es'>Spanish</option>
                <option value='it'>Italian</option>
                <option value='fr'>French</option>
            </select>
            {/* onClick= use API to get definition*/}
            <input 
              type='button' 
              className='get-wr-def' 
              value='Get WR def' 
            //   onClick={() => }
            />
            <input type='text' name='definition' className='definition' placeholder='Definition' />
            <input type='submit' className='add-card' value='Add To Deck' />
          </form>
        </div> 

        <div key='card-list' className='card-list'>
            <p>Will conditionally render new cards here and ultimately have a scroll function </p>
            <div key='new-card' className='new-card'></div>
        </div>
      </div>
    );
  }
  
  export default NewDeck;