import { addTeamMember } from "../Redux-Store/TeamSlice";
import FormComponent from "./FormComponent";
import { Navigate  } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddScreen = () => {
    const dispatch = useDispatch();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = (e) => {
        dispatch(addTeamMember(e));
        setIsSubmitted(true);
    };
    if (isSubmitted) {
        return <Navigate to="/" />;
      }
    return (
        <div>
            <FormComponent initialValues={{ id: Date.now().toString(), firstName: '', lastName: '', email: '', phoneNumber: '', isAdmin: false }} onSubmit={handleSubmit} hideDeleteBtn={true} />
        </div>
    );
};

export default AddScreen;