import "bootstrap/dist/css/bootstrap.min.css";
import api from "./api/axiosConfig";
import { useEffect, useState } from "react";
import "./App.css";
import PolicyHolderCrud from "./components/PolicyHolderCrud";

function App() {
  const [policyHolders, setPolicyHolders] = useState([]);

  useEffect(() => {
    (async() => await load())();
  }, []);

  async function load() {
    const resp = await api.get("/all");
    setPolicyHolders(resp.data);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Policy Holder Management</h1>
      </header>
      <PolicyHolderCrud load={load} policyHolders={policyHolders} />
    </div>
  );
}
     
export default App;
