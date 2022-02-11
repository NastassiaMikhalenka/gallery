import React, {useEffect, useState,} from 'react';
import {APIPhotos} from "./API/Api";


function App() {
    const [value, setValue] = useState('');
    const [photosData, setPhotosData] = useState<Array<any>>([])
    const [page, setPage] = useState(0);
    const handleChange = (e: any) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setPage(1);
    };

    console.log(photosData)
    useEffect(() => {
        APIPhotos.searchData(value, page).then(response => {
            console.log(response)
            setPhotosData((arrayPh) => {
                if (value && page === 1) {
                    return response.data.results;
                } else if (value) {
                    return [...arrayPh, ...response.data.results];
                } else {
                    return [...arrayPh, ...response.data.results];
                }
            });
        })
    }, [page]);

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text'/>
                <button>Search</button>
            </form>
            {/*<button onClick={handleSubmitNext}>Next</button>*/}

            {
                photosData.length !== 0
                    ?
                    photosData.map(img => (
                        <>
                            <img src={img.urls.small} alt='img'/>
                        </>
                    )
                )
                    : <div>dd</div>
            }
        </div>
    );
}

export default App;
