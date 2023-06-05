import React from "react";

const BookingCard = ({ booking }) => {
  return (
    <div className="shadow-md bg-slate-700 rounded-xl shadow-stone-900 p-6 m-5">
      {/* <h1>{booking.nombre}</h1>
        <h1>{booking.fecha_nacimiento}</h1>
        <h1>{booking.genero}</h1>
        <h1>{booking.tipo_documento}</h1>
        <h1>{booking.documento}</h1>
        <h1>{booking.email}</h1>
        <h1>{booking.telefono}</h1> */}
      <table className="w-full table ">
        <thead className="table-header-group">
          <tr>
            <th>Nombre</th>
            <th>Fecha nacimiento</th>
            <th>Genero</th>
            <th>Tipo de documento</th>
            <th>Documento</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Habitacion</th>
          </tr>
        </thead>

        <tbody >
          <tr className="table-row">
            <td>{booking.nombre}</td>
            <td>{booking.fecha_nacimiento}</td>
            <td>{booking.genero}</td>
            <td>{booking.tipo_documento}</td>
            <td>{booking.documento}</td>
            <td>{booking.email}</td>
            <td>{booking.telefono}</td>
            <td>{booking.habitacionId}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookingCard;
