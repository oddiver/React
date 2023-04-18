import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";


const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageselemnts = props.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageselemnts}
            </div>
        </div>
    )
}

export default Dialogs;