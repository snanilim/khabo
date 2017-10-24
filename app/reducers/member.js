
export default function(state={}, action){
    switch(action.type){
        case 'GET_MEMBER':
            return {
                member: action.member
            };
        
        default:
            return state;

    }
}