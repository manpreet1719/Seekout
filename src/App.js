import './App.css';
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import ListScreen from './Components/ListScreen';
import AddScreen from './Components/AddScreen';
import EditScreen from './Components/EditScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListScreen/>} />
        <Route path="/add" element={<AddScreen/>} />
        <Route path="/edit/:id" element={<EditScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
