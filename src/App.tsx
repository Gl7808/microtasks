import React, {useState, MouseEvent} from 'react';
import './App.css'
import {Btn, LBTN, NewBtn} from "./components/button";

function App() {

    const Button1Foo = (subscriber:string,age:number) => {
        console.log(subscriber,age)
    }
    const Button2Foo = (subscriber:string,age:number) => {
        console.log(subscriber,age)
    }
    const Button3Foo = () => {
        console.log('just button')
    }
    const NewBTNFoo = () => {
        console.log('NEW_BTN_FOO')
    }
    const LBTNFOO = () => {
        console.log('LBTNFOO READY')
    }
    return (
        <div className={'App'}>
            <Btn title={'MyYoutubeChanel-1'} callBack={()=>Button1Foo('im vasya', 21)}/>
            <Btn title={'MyYoutubeChanel-2'} callBack={()=>Button2Foo('im ivan', 23)}/>
            <Btn title={'MyYoutubeChanel-2'} callBack={()=>Button3Foo()}/>

            <NewBtn title={'NewBTN-1'} callBack={()=>NewBTNFoo()}/>

            <LBTN title={'LBTN'} callBack={()=>LBTNFOO()}/>

        </div>
    );
}

export default App;