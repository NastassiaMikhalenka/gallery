import React from 'react'
import classes from "./form.module.css";

type PropsType = {
    handleSubmit: (e: any) => void
    handleChange: (e: any) => void
}

export const Form = (props: PropsType) => {
    return (
        <div className={classes.searchBox}>
            <button onClick={props.handleSubmit} className={classes.btnSearch}><img
                src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-seo-dreamstale-lineal-dreamstale-7.png" alt={'search'}/>
            </button>
            <input onChange={props.handleChange} type="text" className={classes.inputSearch}/>
        </div>
    )
}