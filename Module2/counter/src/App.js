import './App.css';
import Header from './components/Header'
import Counter from './components/Counter'

function App() {
  return (
    <div className = "App">
      <Header />
      <Counter />
      <Counter />
      {/* These have seperate states, there is no way to share states between these three, they are individual */}
    </div>
  );
}

export default App;
