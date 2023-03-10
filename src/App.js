import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth'
import {useSelector} from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
  const val = useSelector(state => state.auth.isAuth);
  return (<>
  <Header/>
{val && <UserProfile/>}
{!val && <Auth/>}
    <Counter />
</>
  );
}

export default App;
