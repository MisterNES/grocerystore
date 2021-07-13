import produceData from '../mockData/produce.json'

const ADD = 'cart/ADD';

export const addProduce = (produceId) =>{
    return {
        type: ADD,
        produceId
    }
}

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, [action.produceId]: { id: action.produceId, count: 1 }}
        default:
            return state;
    }
}

export default cartReducer;
