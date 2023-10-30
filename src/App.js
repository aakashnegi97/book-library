import "./App.css";
import Layout from "./component/layout/Layout";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
