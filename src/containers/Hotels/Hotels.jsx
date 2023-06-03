import React, { useState, useEffect } from 'react'
import Hotel from '../../components/Hotel/Hotel'

const Hotels = () => {

    const [hotels, setHotels] = useState([
        { id: "1", name: "Hotel 1", rooms: 10, enabled: false },
        { id: "2", name: "Hotel 2", rooms: 10, enabled: true },
        { id: "3", name: "Hotel 3", rooms: 10, enabled: false },
    ]);

    const handleToggle = (hotelId) => {
        const updatedHotels = hotels.map((hotel) => {
            if (hotel.id === hotelId) {
                return { ...hotel, enabled: !hotel.enabled };
            }
            return hotel;
        });
        console.log(updatedHotels)
        setHotels(updatedHotels);
    };

    const handleDelete = (hotelId) => {
        const updatedHotels = hotels.filter((hotel) => hotel.id !== hotelId);
        setHotels(updatedHotels);
    };

    const handleAdd = () => {
        const newHotel = {
            id: Date.now().toString(),
            name: `Hotel ${hotels.length + 1}`,
            rooms: 10,
            enabled: false,
        };
        setHotels([...hotels, newHotel]);
    };
    return (

        <>
            <div className='w-screen h-screen flex flex-col items-center mt-32'>
                <div className='flex justify-end  w-full'><button className='btn btn-primary btn-sm mx-10'onClick={handleAdd}>New Hotel</button></div>
                <table className='w-5/12'>
                    <thead>
                        <tr>
                            <th className='w-1/12'>Id</th>
                            <th className='w-3/12'>Name</th>
                            <th className='w-2/12'>Rooms</th>
                            <th className='w-1/12'>Enabled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels.map((hotel) => (
                            <tr key={hotel.id}>
                                <td className='text-center'>{hotel.id}</td>
                                <td className='text-center'>{hotel.name}</td>
                                <td className='text-center'>{hotel.rooms}</td>
                                <td style={{ minWidth: "100px" }}>{hotel.enabled ? "Habilitado" : "Deshabilitado"}</td>
                                <td >
                                    <input
                                        type="checkbox"
                                        className="toggle mx-10"
                                        checked={hotel.enabled}
                                        onChange={() => handleToggle(hotel.id)}
                                    />
                                </td>
                                <td><button onClick={() => handleDelete(hotel.id)} className='btn btn-error btn-xs'>Eliminar</button></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </>
    )
}

export default Hotels