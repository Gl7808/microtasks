import React from "react";


type BtnNameType = {
    title : string,
    callBack : ()=>void
}
export const Btn = (props:BtnNameType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.title}</button>
    );
}

type NewBtnType = {
    title: string,
    callBack: ()=>void
}
export const NewBtn = (props:NewBtnType) => {
    const onClickHandler =()=> {
        props.callBack()
    }
    return(
        <button onClick={onClickHandler}>{props.title}</button>
    );
}

type LBTN_TYPE = {
    title: string,
    callBack: ()=>void
}
export const LBTN = (props:LBTN_TYPE) => {
    const onClickHandler = () => {
        props.callBack();
    }
    return(
        <button onClick={onClickHandler}>
            {props.title}
        </button>
    );
}