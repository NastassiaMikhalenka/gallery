import axios from "axios";

const instance = axios.create({
        baseURL: "https://api.unsplash.com",
        params: {
            query: '',
            page: '',
            color: 'green',
            orientation: 'portrait',
        },
        headers: {
            Authorization: `Client-ID REACT_APP_SECRET_API_KEY`,
        },
    }
)

export const APIPhotos = {
    searchData(query: string, page: number) {
        return instance.get(`/search/photos?page=${page}&query=${query}`)
    },
    next(query: string, page: number, ACCESS_KEY: string) {
        return instance.get(`/search/photos?page=${page}&query=${query}&client_id=${ACCESS_KEY}`)
    }

}
// import {createApi} from "unsplash-js";
//
// const unsplash = createApi({
//     accessKey: 'eZ0NDsW0i0IGGySF-mcADzGUONoQp3wftizZznXLf3Q'
// });
// export const API = (query: string) => {
//     // feed example
//     unsplash.search.getPhotos({
//         query: query,
//         page: 1,
//         color: 'green',
//         orientation: 'portrait',
//     }).then(result => {
//         if (result.errors) {
//             // handle error here
//             console.log('error occurred: ', result.errors[0]);
//         } else {
//             let feed =  result.response;
//             // console.log(data)
//             // extract total and results array from response
//             const { total, results } = feed;
//
//             // handle success here
//             console.log(`received ${results.length} photos out of ${total}`);
//             console.log('first photo: ', results[0]);
//         }
//     });
// }