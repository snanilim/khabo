const initialState = {
    member: [],
    total_today_meal:[]
  };

export default function(state=initialState, action){
    switch(action.type){
        case 'GET_MEMBER':
            return Object.assign({}, state, {
                member: action.member
            });

        case 'GET_TODAY_MEAL':
            return Object.assign({}, state, {
                total_today_meal: action.total_today_meal
            });
        
        default:
            return state;

    }
}