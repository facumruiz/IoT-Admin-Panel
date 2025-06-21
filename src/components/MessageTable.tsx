import React from "react";
import { useMensajes } from "../hooks/useMessages";

const MensajesTable: React.FC = () => {
  const { mensajes, loading } = useMensajes();
  console.log("Mensajes:", mensajes);

  const formatFecha = (fechaISO: string): string => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleString();
  };

  if (loading) return <p>Cargando datos...</p>;

  return (
    <div className="table-container">
      <h2>Mensajes MQTT</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Topic</th>
            <th>Mensaje</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {mensajes.map((msg) => (
            <tr key={msg._id}>
              <td>{msg._id}</td>
              <td>{msg.topic}</td>
              <td>{msg.mensaje}</td>
              <td>{formatFecha(msg.timestamp)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MensajesTable;
