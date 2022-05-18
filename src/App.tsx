import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import logo from "./favicon.svg";
import { incremented,incremented5 } from "./features/counter/counter-slice";

function App() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  const handleCounter = () => {
    dispatch(incremented());
  };
  const handleCounter5 = (num:number) => {
    dispatch(incremented5 (num));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={handleCounter}>count is: {count}</button>
        </p>
        <p>
          <button onClick={()=>handleCounter5(10)}>count is: {count}</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
