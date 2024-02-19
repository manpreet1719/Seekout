import '../Styles/ListCardDetails.css'
import avatarImage from '../assests/user.png'
const ListDetailCard = ({member , handleEditClick}) => {

    return (
        <div class="member" onClick={() => {handleEditClick(member.id)}}>
            <div class="avatar">
                <img src={avatarImage} alt="" width="50" />
            </div>
            <div class="info">
                <p>{member.firstName + member.lastName} {member.isAdmin ? <span className="admin-text">Admin</span> : null}  </p>
                <p>{member.phoneNumber}</p>
                <p>{member.email}</p>
            </div>
        </div>
    );

}

export default ListDetailCard;