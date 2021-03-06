import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';



const ImageList = ({images})=>{

    const imageDisplay= images.map(image=>{
        return <ImageCard key={image.id} image={image}/>
    })
    return <div className="image-list">{imageDisplay}</div>

};

export default ImageList;