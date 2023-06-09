

export const bookingRoom = async(bookingData) => {
       const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings`,{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(bookingData)
       })
       const data = await res.json()
       return data;
};


// update status /rooms/status/
export const updateStatus =async (id,status)=>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms/status/${id}`,{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({status})
    })
    const data = await res.json()
    return data;
}

// Get All Bookings for a user by email
export const getBookings = async(email) =>{
   const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings?email=${email}`)
    const bookings = await res.json()
    return bookings;
}

// delete booking
export const deleteBooking = async (id) =>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${id}`,{
        method:'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await res.json()
    return data;
}