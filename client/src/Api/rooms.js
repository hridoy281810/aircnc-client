export const addRoom = async roomData =>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(roomData)
    })
    const data = await res.json()
    return data;
}


// Get all rooms
export const getAllRooms = async()=>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    const data = await res.json()
    return data;
}

// get filtered rooms for hosts
  export const getHostRooms = async email =>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${email}`)
    const data = await res.json()
    return data;
  }


  // delete room
export const deleteRoom = async (id) =>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`,{
        method:'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await res.json()
    return data;
}
// get single room details
export const getRoom = async(id)=>{
    const res = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`)
    const data = await res.json()
    return data;
}