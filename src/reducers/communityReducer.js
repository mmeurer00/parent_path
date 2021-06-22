export default function communityReducer(state = {
    posts: []
}, action) {
    switch (action.type){
        case 'ADD_POST':

            return {
                ...state, 
                posts: action.payload
            }

        // case 'REMOVE_POST':

        //     return {
        //         ...state, 
        //         posts: action.payload
        //     }
        default:
            return state;

    }
}
