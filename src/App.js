import index from "./components/Index/Index";
import login from "./components/Login/Login";
import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <Route path="/" component={login} />
      <Route path="/poker" component={index} />
    </div>
  );
}

export default App;
