import React from 'react';
import classes from "./photos.module.css";
import {Main} from "../Main/Main";

type PropsType = {
    photosData: Array<photoType>
}

type photoType = {
    urls: { regular: string }
    alt_description: string
    likes?: number
    user: {
        name: string
        portfolio_url: string
        profile_image: { medium: string }
    }
}

export const Photos = (props: PropsType) => {
    return (
        <div className={classes.photosContainer}>
            <div className={classes.photosContent}>
                {
                    props.photosData.length !== 0
                        ?
                        props.photosData.map(img => (
                                <div className={classes.containerImg}>
                                    <img src={img.urls.regular} alt='img'/>
                                    <div className={classes.photoInfo}>
                                        <div className={classes.photoInfo_User}>
                                            {/*<p>{img.user.name}</p>*/}
                                            <a href={img.user.portfolio_url} target={'_blank'}><img
                                                src={img.user.profile_image.medium} alt={'photo'}/></a>
                                        </div>
                                        <p className={classes.photoInfo_description}>{img.alt_description}</p>
                                        <div className={classes.photoInfo_likes}>
                                            <img src="https://img.icons8.com/emoji/48/000000/white-heart.png"/>
                                            <p>{img.likes}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                        : <Main/>
                }
            </div>
        </div>
    )
}