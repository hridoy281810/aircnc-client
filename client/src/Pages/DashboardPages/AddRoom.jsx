import React, { useState } from 'react';
import AddRoomForm from '../../components/Forms/AddRoomForm';
import { imageUpload } from '../../Api/imageUpload';
import useAuth from '../../Hook/useAuth';
import { addRoom } from '../../Api/rooms';

const AddRoom = () => {
    const {user} = useAuth()
    const [dates,setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const [loading ,setLoading] = useState(false)
    const [uploadButtonText,setUploadButtonText] = useState('Upload Image')
    const handleSubmit = event =>{
        event.preventDefault()
        setLoading(true)
        const form = event.target;
        const location = form.location.value
        const title = form.title.value
        const from = dates.startDate
        const to = dates.endDate
        const price = form.price.value
        const total_guest = form.total_guest.value
        const bedrooms = form.bedrooms.value
        const bathrooms = form.bathrooms.value
        const description = form.description.value
        const category = form.category.value
        const image = form.image.files[0]
        // upload imag call hook 
        imageUpload(image)
        .then(data=> {
            const roomData = {
                location,title,from,to,price:parseFloat(price),total_guest,bedrooms,bathrooms,description,category
               , image: data.data.display_url,host: {
                    name: user?.displayName,
                    image: user?.photoURL,
                    email: user?.email
                }
            }
             addRoom(roomData)
             .then(data => console.log(data))
             .then(error=> console.log(error.message))
            console.log(roomData)
            setLoading(false)
    
        })
        .catch(error=> {
            console.log(error.message)

            setLoading(false)
        })
        console.log("hello")
    }
    const handleImageChange = (image)=>{
    setUploadButtonText(image.name.slice(0,20))
    }


    const handleDates = ranges =>{
        console.log(ranges)
        setDates(ranges.selection)
    }
    return (
       <AddRoomForm handleDates={handleDates} dates={dates} handleSubmit={handleSubmit} loading={loading} handleImageChange={handleImageChange} uploadButtonText={uploadButtonText}></AddRoomForm>
    );
};

export default AddRoom;