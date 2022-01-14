import { DATA } from '../../data/usersData';
import { SET_SELECTION, SET_SETTINGS } from '../constants';

const initialState = {
    users: DATA,
    selectedUsers: [],
    selectedCategories: DATA,
};

// Reducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTION:
            const indexResult = state.selectedUsers.findIndex((user) => user.id === action.userId); // Récupère id de la personne selectionnée

            if (indexResult >= 0) {
                // user existe
                const newSelectedUsers = [...state.selectedUsers]; // Copie du tableau existant
                newSelectedUsers.splice(indexResult, 1); // Suppression user
                return { ...state, selectedUsers: newSelectedUsers }; // mise à jour du state
            } else {
                // user n'existe pas
                const user = state.users.find((user) => user.id === action.userId); // Retourne l'élément correspondant à l'id de l'user
                return { ...state, selectedUsers: state.selectedUsers.concat(user) }; // Ajout user
            }
        case SET_SETTINGS:
            const usedSettings = action.settings;
            console.log(usedSettings);

            const selectedUsersByCategory = state.users.filter((user) => {
                if (usedSettings.animals && user.category === 'animals') {
                    return true;
                }
                if (usedSettings.travel && user.category === 'travel') {
                    return true;
                }
                if (usedSettings.cars && user.category === 'cars') {
                    return true;
                }
            });
            return { ...state, selectedCategories: selectedUsersByCategory }; // Ajout users

        default:
            return state;
    }
};

export default appReducer;
