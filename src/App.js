import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" component={BookList} />
        <Route path="/categories" component={NewBookForm} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
