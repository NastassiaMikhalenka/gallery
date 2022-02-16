import React, {useEffect, useState,} from 'react';
import {APIPhotos} from "./API/Api";
import {Photos} from "./components/Photos/Photos";
import './App.css'
import {Form} from "./components/form/form";


function App() {
    const [value, setValue] = useState('');
    const [photosData, setPhotosData] = useState<Array<any>>([])
    const [page, setPage] = useState(0);
    const handleChange = (e: any) => {
        setValue(e.target.value)
        setPage(1);
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
    }, [page, value]);

    useEffect(() => {
        const event = window.addEventListener("scroll", () => {
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) {
                setPage((pagePrev: number) => {
                    return pagePrev + 1;
                });
            }
        });
        // @ts-ignore
        return () => window.removeEventListener('scroll', event);
    }, []);

    return (
        <div className="App">
            <header className={'headerContainer'}>
                <Form handleSubmit={handleSubmit} handleChange={handleChange}/>
            </header>
            <Photos photosData={photosData}/>
        </div>
    );
}

export default App;
