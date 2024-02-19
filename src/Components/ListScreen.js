
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListDetailCard from './ListDetailCard';
import '../Styles/ListScreen.css'

const ListScreen = () => {
    const navigate = useNavigate();
    const teamMembers = useSelector(state => state.teamlist.teamMembers);
    console.log(teamMembers);
    const handleEditClick = (memberId) => {

        const member = teamMembers.find(member => member.id === memberId);

        navigate(`/edit/${memberId}`, {
            state: {
                member
            }
        });

    };
    return (
        <div className='card_listscreen'>
            <div className='title_listscreen'>
                <h2 className='heading_listscreen' >Team Members</h2>
                <p className='subtext'>You have {teamMembers.length} team members.</p>
            </div>
            <ul>
                {teamMembers.map(member => (
                    <ListDetailCard key={member.id} member={member} handleEditClick={handleEditClick} />
                ))}
            </ul>
            <button className="plus-button"><Link to="/add" style={{ textDecoration: 'none' }}>&#x2B;</Link></button>
        </div>
    );
}

export default ListScreen;