export default function userReducer(state = {
    users: []
}, action) {
    switch (action.type){
        case 'ADD_USER':

            return {
                ...state, 
                users: action.payload
            }

        case 'REMOVE_USER':

            return {
                ...state, 
                users: action.payload
            }
        default:
            return state;

    }
}


