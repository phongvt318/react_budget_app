import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Currency() {
    const {dispatch } = useContext(AppContext);

    const updateCurrency = (value) => {
        dispatch( {
            type: "CHG_CURRENCY",
            payload: value
        })
    }

    return (
        <div className="alert alert-secondary">
            <span>Currency </span>
            <select name="Location" id="Location"                  
                onChange={ (event) => updateCurrency(event.target.value) }
            >  
                <option value="$">$ Dollar</option>
                <option value="£" selected>£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    )
}