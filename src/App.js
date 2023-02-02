import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is header</h1>
      <button type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800">Basic</button>
      <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Border</button>
      <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-red-500 dark:text-purple-800">Rounded</button>
      <br />
      <button type="button" className="px-8 py-3 font-semibold rounded-full bg-yellow-400 text-red-500">Rounded</button>
      <br />
      <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800">Border</button>
      <br />
      <button type="button" className="px-8 py-3 font-semibold rounded bg-blue-500 text-gray-100">Basic</button>
    </div>
  );
}

export default App;
