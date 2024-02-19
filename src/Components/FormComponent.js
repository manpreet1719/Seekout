import React from 'react';
import '../Styles/FormComponent.css'
import {useState} from 'react'
import {Navigate} from 'react-router-dom';

const FormComponent = ({ initialValues, onSubmit, onDelete, hideDeleteBtn }) => {
    const [isClose, setClose] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedMember = {
            ...initialValues,
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phoneNumber: formData.get('phoneNumber'),
            isAdmin: formData.get('role') === 'admin'
        };
        onSubmit(updatedMember);
    };
    const handleOnDelete = (e) => {
        onDelete(e.id)
    }
    const handleClose = (e) => {
        setClose(true);
    }
    if(isClose){
        return <Navigate to="/" />;
    }
    return (
        <div className='card'>
            <div className='title'>
                <h1 className='title_heading'>{!hideDeleteBtn ? 'Edit team member' : 'Add a team member'}</h1>
                <p>Set email, location and role.</p>
            </div>
            <div class="grey-line"></div>
            <h3 className='Info_title'>Info</h3>
            <form onSubmit={handleSubmit}>

                <input type="text" id="firstName" name="firstName" placeholder="firstName" defaultValue={initialValues.firstName} required /><br />

                <input type="text" id="lastName" name="lastName" placeholder="lastname" defaultValue={initialValues.lastName} required /><br />


                <input type="email" id="email" name="email" placeholder="email" defaultValue={initialValues.email} required /><br />


                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="phonenumber" defaultValue={initialValues.phoneNumber} required /><br />
                <h3>Role</h3>
                <div className="radio_btns">
                    <div className='radio_btn_regular'>
                        <label htmlFor="regular">Regular- Can't delete members</label>
                        <input type="radio" id="regular" name="role" value="regular" defaultChecked={!initialValues.isAdmin} />
                        
                    </div>
                    
                    <div className='radio_btn_admin'>
                        <label htmlFor="admin">Admin - Can delete members</label>
                        <input type="radio" id="admin" name="role" value="admin" defaultChecked={initialValues.isAdmin} />

                    </div>

                </div>
                
                <div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    {!hideDeleteBtn && (
                        <button className="delete_btn" onClick={handleOnDelete} >Delete</button>
                    )}
                    <button className="submit_btn" type="submit">Save</button>
                </div>


            </form>
            <button class="close-button" onClick={handleClose}>&times;</button>
        </div>
    );
};

export default FormComponent;
