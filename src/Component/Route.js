import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import WriteForm from './WriteForm';
import Auth from '../Hoc/Auth';

export default () => (
  <Router>
    <>
      <Switch>
        <Route path='/Home' exact component={Auth(Home, true)} />
        <Route path='/Signup' component={Auth(Signup, null)} />
        <Route path='/WriteForm' component={Auth(WriteForm, true)} />
        <Route path='/' component={Auth(Login, false)} />
        <Redirect from='*' to='/' />
      </Switch>
    </>
  </Router>
);
