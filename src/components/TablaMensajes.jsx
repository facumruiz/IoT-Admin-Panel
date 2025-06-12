import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TablaMensajes() {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    axios.get('https://api-mqtt-mongo-prod.onrender.com/api/getMessages')
      .then(res => setMensajes(res.data))
      .catch(err => console.error('Error al obtener datos:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Mensajes MQTT</h3>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Topic</th>
            <th>Mensaje</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {mensajes.map((msg) => (
            <tr key={msg._id}>
              <td>{msg._id}</td>
              <td>{msg.topic}</td>
              <td>{msg.mensaje}</td>
              <td>{new Date(msg.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaMensajes;
