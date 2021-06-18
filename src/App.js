import './App.css';
import {Route, Switch} from 'react-router-dom'
import Homescreen from './screens/Homescreen'
import CreateQuestionScreen from './screens/CreateQuestion';
function App() {
  return (
    <div>
        <Switch>
          <Route exact={true} path="/" component={Homescreen}></Route>
          <Route exact={true} path="/question" component={CreateQuestionScreen}></Route>
        </Switch>
    </div>
  );
}

export default App;
