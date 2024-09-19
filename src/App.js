import './App.css';
import FlightListItem from './components/FlightListItem';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">

      <Layout >
        <div className="w-full px-5 py-8">
          <FlightListItem />
        </div>
      </Layout>
    </div>
  );
}

export default App;
