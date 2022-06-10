import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import NavBar from './NavBar';
function Back() {
  return (
    <BackContext.Provider value={{}}>
      <NavBar></NavBar>
    </BackContext.Provider>
  );
}

export default Back;