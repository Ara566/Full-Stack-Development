import './App.css'
import Todo from './todolistapplication'
import { Provider } from 'react-redux';
import store from './store.jsx';


function App() {
  return(
    <Provider store={store}>
      <Todo/>
    </Provider>
  )

}
export default App
