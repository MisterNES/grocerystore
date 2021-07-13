import produceData from '../mockData/produce.json'

const ADD = 'cart/ADD';
const REMOVE_ONE = 'cart/REMOVE_ONE'

export const addToCart = (produceId) =>{
    return {
        type: ADD,
        produceId
    }
}

export const removeOne = (produceId) =>{
    return {
        type: REMOVE_ONE,
        produceId
    }
}

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, [action.produceId]: { id: action.produceId, count: 1 }}

        case REMOVE_ONE:
            const newObj = {...state};
            delete newObj[action.produceId]
            return newObj

        default:
            return state;
    }
}

export default cartReducer;
