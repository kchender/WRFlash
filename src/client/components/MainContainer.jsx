import '../../App.scss';
import { Link } from 'react-router-dom';

const MainContainer = () => {
    return (
        <div key='main-container' className='main-container'>
            Click <Link to='/Home'>here</Link> to go to your Home page.
        </div>
    );
}

export default MainContainer;