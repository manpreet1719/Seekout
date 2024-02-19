import FormComponent from "./FormComponent";
import {editTeamMember, deleteTeamMember} from '../Redux-Store/TeamSlice'
import { useLocation , Navigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useState } from "react";

const EditScreen = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { member } = location.state;

    const handleSubmit = (updatedMember) => {
        dispatch(editTeamMember(updatedMember));
        setIsSubmitted(true);

    };
    const handleDelete = () => {
        dispatch(deleteTeamMember(member.id))
        setIsSubmitted(true);
    }
    
    if (isSubmitted) {
        return <Navigate to="/" />;
      }
    return (
        <div>
            <FormComponent initialValues={member} onSubmit={handleSubmit} onDelete={handleDelete} hideDeleteBtn={false}/>
            {/* <button onClick={handleDelete}>Delete</button> */}
        </div>
    );
}
export default EditScreen;