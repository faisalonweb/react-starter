import { FETCH_POSTS,NEW_POSTS} from '../actions/types';

const intialState = {
    item: {},
    items: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = intialState, action) {

    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POSTS:   
        return {
            ...state,
            item: action.payload
        };        
        default:
            return state;
    }
}