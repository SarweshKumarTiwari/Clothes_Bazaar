import React, { createContext } from 'react';
import { useState } from 'react';
export const StateProvider = createContext();

export default function Navtoggle(props) {
    const [state, setstate] = useState(false);
    const [small, setsmall] = useState(false);
    return (
        <StateProvider.Provider value={
            {
                data:
                {
                    state:
                        state,
                    updateTrue: () => {
                        setstate(true)
                    },
                    updateFalse: () => {
                        setstate(false)
                    }
                },
                data2:{
                    state:
                        small,
                    updateTrue: () => {
                        setsmall(true)
                    },
                    updateFalse: () => {
                        setsmall(false)
                    }
                }
            }}>
            {props.children}
        </StateProvider.Provider>
    )
}
