import './App.css';
import News from './components/News/News';
import Navbar from './components/Navbar';
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App font-mono bg-slate-50">
        <Navbar/>
        <News/>
      </div>
    </Provider>
    
  );
}

export default App;


/*
For news api: https://newsapi.org/v2/everything?q=india&apiKey=daa379cf8e3b46e6a5d516707eea316f */