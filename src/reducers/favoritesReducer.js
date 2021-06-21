
export default function favoritesReducer(state = {
    favorites: []
}, action) {
    switch (action.type){
        case 'ADD_RESOURCE':

            return {
                ...state, 
                favorites: action.payload
            }

        case 'ADD_POST':

            return {
                ...state, 
                favorites: action.payload
            }
        default:
            return state;

    }

}


