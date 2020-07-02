import React from 'react';
import { connect } from 'react-redux';
import { selectContact } from '../../redux/order/order.selectors';
import { setContact } from '../../redux/order/order.action';
import FormInput from '../form-input/form-input.component';
import './user-contact-container.styles.css';

const UserContactContainer = ({ contact, setContact }) => {
    const { email } = contact;

    const handleChange = e => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value
        });
    }

    return (
        <div className='user-contact-container'>
            <h2>Contact Info</h2>
                <FormInput
                    label='Email &#42;'
                    type='email'
                    value={email} 
                    name='email' 
                    required 
                    handleChange={handleChange}/>
        </div>
    )
};

const mapStateToProps = state => ({
    contact: selectContact(state)
});

const mapDispatchToProps = dispatch => ({
    setContact: contact => dispatch(setContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContactContainer);