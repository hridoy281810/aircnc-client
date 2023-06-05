import React, { useState } from 'react';
import DatePicker from './DatePicker';
import Button from '../Button/Button';
import useAuth from '../../Hook/useAuth';
import BookingModal from '../Modal/BookingModal';
import { formatDistance } from 'date-fns'
import { bookingRoom, updateStatus } from '../../Api/bookingRoom';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const RoomReservation = ({roomData}) => {
    console.log(roomData)
    const {price,from,to} = roomData || {}
    const {user,role} = useAuth()
    const [isOpen,setIsOpen] = useState(false)
    const navigate =  useNavigate()

    // start date and end date total day * per day price calculate
    const totalPrice = parseFloat(formatDistance(new Date(to),new Date(from) ).split(' ')[0])*price

    const [value,setValue] = useState({
        startDate: new Date(from),
        endDate: new Date(to),
        key: 'selection'
    })
    const [bookingInfo,setBookingInfo] = useState({
        guest: {name: user?.displayName,email: user?.email,image: user?.photoURL},
        host: roomData.host.email,
        location: roomData.location,
        price: totalPrice, 
        to: value?.endDate,
        from:value?.startDate,
        title: roomData.title,
        roomId: roomData._id,
        image: roomData.image
    })
   
    const handleSelect = (range)=>{
            setValue({...value})
    }

    const modalHandler = ()=>{
      bookingRoom(bookingInfo)
      .then(data => {
        console.log(data)
        updateStatus(roomData._id,true)
        .then(data => {
            console.log(data)
            toast.success('Booking successful')
            navigate('/dashboard/my-bookings')
            closeModal()
        })
      
      })
      .catch(error=> {
        console.log(error.message)
        closeModal()
      })

    }
    const closeModal = () =>{
        setIsOpen(false)
    }
    return (
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden '>
            <div className='flex flex-row items-center gap-1 p-4'>
                <div className='text-2xl font-semibold '>$ {price}</div>
                <div className='font-light text-neutral-600 '>night</div>
            </div>
            <hr />
      <div className="flex justify-center">   <DatePicker handleSelect={handleSelect} value={value}></DatePicker></div>
        <hr />
        <div className='p-4'><Button onClick={()=> setIsOpen(true)} disabled={roomData?.host?.email === user?.email || roomData.booked} label={"Reserver"}></Button> </div>
        <hr />
          <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'><div>Total</div> 
          <div>$ {totalPrice}</div>
           </div>
           <BookingModal closeModal={closeModal} modalHandler={modalHandler} bookingInfo={bookingInfo} isOpen={isOpen}></BookingModal>
        </div>
    );
};

export default RoomReservation;