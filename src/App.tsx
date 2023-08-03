import type { Component } from 'solid-js';
import {Routes, Route} from "@solidjs/router"
import Home from './pages/Home';
import Gallery from './pages/Gallery';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
    </Routes>
  );
};

export default App;
