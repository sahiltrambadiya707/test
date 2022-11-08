import Router from "./routes";
import { Switch } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Switch>
        <Router />
      </Switch>
    </div>
  );
}

export default App;
