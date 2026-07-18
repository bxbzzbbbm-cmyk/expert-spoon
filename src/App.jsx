import React, { useState } from "react";
import countries from "./data/countries";
import {
  connect,
  disconnect,
  status
} from "./api/vpn";

export default function App() {

  const [selected, setSelected] = useState("US");
  const [result, setResult] = useState(null);


  function handleConnect() {
    setResult(connect(selected));
  }


  function handleDisconnect() {
    setResult(disconnect());
  }


  function handleStatus() {
    setResult(status());
  }


  return (
    <div style={{padding:"20px",fontFamily:"Arial"}}>

      <h1>VPN API Dashboard</h1>

      <select
        value={selected}
        onChange={(e)=>setSelected(e.target.value)}
      >
        {countries.map((c)=>(
          <option key={c.code} value={c.code}>
            {c.flag} {c.name}
          </option>
        ))}
      </select>


      <div style={{marginTop:"20px"}}>

        <button onClick={handleConnect}>
          Connect VPN
        </button>

        <button onClick={handleDisconnect}>
          Disconnect
        </button>

        <button onClick={handleStatus}>
          Status
        </button>

      </div>


      <h2>Countries: {countries.length}</h2>


      <pre>
        {JSON.stringify(result,null,2)}
      </pre>


      <hr />

      <h2>VPN Countries</h2>

      <ul>
        {countries.map((c)=>(
          <li key={c.code}>
            {c.flag} {c.name}
            <br/>
            IP: {c.ip}
          </li>
        ))}
      </ul>

    </div>
  );
}
