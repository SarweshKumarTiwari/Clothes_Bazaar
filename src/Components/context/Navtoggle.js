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
                    update: (val) => {
                        setsmall(val);
                    }
                }
            }}>
            {props.children}
        </StateProvider.Provider>
    )
}
