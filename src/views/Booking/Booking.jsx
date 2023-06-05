import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import getBooking from '../../utils/getBookings'
import BookingCard from '../../components/BookingCard/BookingCard'

const Booking = () => {
  const navigate = useNavigate()

    const {id}=useParams()
    const [bookings, setbookings] = useState([])
const getBookingFromHotel  = async()=>{
    const bookingList= await getBooking(id)
    setbookings(bookingList)
}

useEffect(() => {
  getBookingFromHotel()
}, )

  return (
    <div>
       <div className="flex justify-between">
        <button className="btn btn-btn m-8" onClick={()=>navigate("/hotels")}><i className="fa-solid fa-circle-chevron-left"></i>Hoteles</button>
      </div>
        {bookings.map((booking)=>(<BookingCard key={booking.id} booking={booking}></BookingCard>))}
    </div>
  )
}

export default Booking