import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Photo from './Photo';


const Photos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response.data)
                setPhotos(response.data)
            })
            .catch(error => console.error(error))
    });
    

    return (
        <div>
            <div class="row">
                {
                    photos.map((photo) => <Photo data={photo} />)
                }
            </div>
        </div>


    );

}

export default Photos;

