import { createSlice } from '@reduxjs/toolkit'
import { teamMembers } from '../Data/TeamMembers';

const teamSlice = createSlice({
    name: 'team',
    initialState: {
        teamMembers: teamMembers
    },
    reducers: {
        getTeamMembers(state,action) {
            return [...state, action.payload]
        },
        addTeamMember(state, action) {
            state.teamMembers.push(action.payload);
        },
        editTeamMember(state, action) {
            const { id, ...updatedMember } = action.payload;
            const index = state.teamMembers.findIndex(member => member.id === id);
            if (index !== -1) {
                state.teamMembers[index] = { ...state.teamMembers[index], ...updatedMember };
            }
        },
        deleteTeamMember(state, action) {
            state.teamMembers = state.teamMembers.filter(member => member.id !== action.payload);
        }
    }

});

export const { addTeamMember, editTeamMember, deleteTeamMember } = teamSlice.actions;

export default teamSlice.reducer;


