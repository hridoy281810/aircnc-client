import React from 'react';
import DatePicker from './DatePicker';
import Button from '../Button/Button';
import useAuth from '../../Hook/useAuth';

const RoomReservation = ({roomData}) => {
    const {price} = roomData || {}
    const {user,role} = useAuth()
    return (
        <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden '>
            <div className='flex flex-row items-center gap-1 p-4'>
                <div className='text-2xl font-semibold '>$ {price}</div>
                <div className='font-light text-neutral-600 '>night</div>
            </div>
            <hr />
      <div className="flex justify-center">   <DatePicker></DatePicker></div>
        <hr />
        <div className='p-4'><Button label={"Reserver"}></Button> </div>
        <hr />
          <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'><div>Total</div> 
          <div>$ 300</div>
           </div>
        </div>
    );
};

export default RoomReservation;