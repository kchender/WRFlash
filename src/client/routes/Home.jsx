import '../../App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();

  const navToNewDeck = () => {
    navigate('/new-deck');
  }

  return (
    <div>
      <div key='home-page' id='home-page' className='home-page'>
        <h1>Home</h1>

        <div key='prof-pic' className='prof-pic'></div>

        <div key='new-deck-div' className='new-deck-div'>
            <button key='new-deck' className='new-deck' onClick={navToNewDeck}>New Deck</button>
        </div>  

        <div key='view-all-div' className='view-all-div'>

            <button key='view-all' className='view-all'>View All</button>

        </div>  
      </div>
    </div>
  );
}

export default Home;