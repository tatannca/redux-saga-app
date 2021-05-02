import * as type from '../types'

const initialState = {
    usersInfo: [],
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case type.GET_USERS:
            return {
                ...state,
                usersInfo: action.payload
            }
        default:
            return state;
    }
}
