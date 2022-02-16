import React, {useEffect, useState} from 'react';
import {APIPhotos} from "../../API/Api";


export const Main = () => {
    const [photosData, setPhotosData] = useState<Array<any>>([])
    const [photos, setPhotos] = useState<Array<any>>([])
    const [current, setCurrent] = useState(0);
    const [quote, getQuote] = useState(photos[current])

    const func = ()=>{
        setPhotos(photosData.map(m =>
            m.urls.raw
        ))
    }

    useEffect(() => {
        APIPhotos.searchData('nature', 1).then(response => {
            setPhotosData(response.data.results)
            func()
        })
    }, []);
    console.log(photos)

    useEffect(
        () => getQuote(photos[current]),
        [current, quote]
    )

    const nextQuote = () => {
        if (current === photos.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
        console.log('hi')
    }

    const prevQuote = () => {
        if (current === 0) {
            setCurrent(photos.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img src={photos[current]} alt={"#"} width={300}/>
                        <a onClick={prevQuote} id="prev">&#10094;</a>
                        <a onClick={nextQuote} id="next">&#10095;</a>
                    </div>
                </div>
            </div>
        </div>
    )
}