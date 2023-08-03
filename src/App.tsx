import type { Component } from 'solid-js';
import {Routes, Route} from "@solidjs/router"
import Home from './pages/Home';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
    </Routes>
  );
};

export default App;
