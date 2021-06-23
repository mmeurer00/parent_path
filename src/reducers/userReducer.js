export default function userReducer(state = {
    user: {id: 1, username: "Maxine", email: "maxinemeurer@yahoo.com", parent:true }
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


