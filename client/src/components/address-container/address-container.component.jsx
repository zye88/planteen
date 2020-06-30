import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import './address-container.styles.css';

const AddressContainer = () => {
    const [address, setAddress] = useState({
        fullName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        postalCode: '',
        province: ''
    });

    const { fullName, 
            addressLine1, 
            addressLine2, 
            city, 
            postalCode, 
            province } = address;

    const handleChange = e => {
        const { name, value } = e.target;
        setAddress({
            ...address,
            [name]: value
        });
    }
    return (
        <div className='address-container'>
            <FormInput
                label='Full Name'
                type='text'
                value={fullName} 
                name='fullName' 
                required 
                handleChange={handleChange}/>
            <FormInput
                label='Address Line 1'
                type='text'
                value={addressLine1} 
                name='addressLine1' 
                required 
                handleChange={handleChange}/>
            <FormInput
                label='Address Line 2'
                type='text'
                value={addressLine2} 
                name='addressLine2' 
                handleChange={handleChange}/>
            <FormInput
                label='City'
                type='text'
                value={city} 
                name='city' 
                required 
                handleChange={handleChange}/>
            <FormInput
                label='Postal Code'
                type='text'
                value={postalCode} 
                name='postalCode' 
                required 
                handleChange={handleChange}/>
            <div className='address__province'>
                <label>Province</label>
                <select name="province">
                    {
                        ['NL', 'PE', 'NS', 'NB', 'QC', 'ON', 'MB', 
                        'SK', 'AB', 'BC', 'YT', 'NT', 'NU'].map(prov => 
                            <option key={prov} value={prov}>{prov}</option>)
                    }
                </select>
            </div>
            <FormInput
                type='text'
                label='Country'
                value='Canada Only' 
                name='country' 
                readOnly/>
        </div>
    );
}

export default AddressContainer;