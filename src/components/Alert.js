import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext';
import {CSSTransition} from 'react-transition-group'

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    return (
    <CSSTransition
    in={alert.visible}
    timeout={{
        enter: 500,
        exit: 350
    }}
    classNames={'alert'}
    mountOnEnter
    unmountOnExit 
    
    >
        <div className={`alert alert-${alert.type||'warning'} alert-dismissible`}>
            <strong>Внимание {alert.text}</strong> 
            <button
            onClick={hide} 
            type="button" 
            className="close" 
             aria-label="close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </CSSTransition>
    )
}
