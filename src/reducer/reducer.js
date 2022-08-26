const initState = {
    watchList: [],
    loading: true,
    showData: [],
    error: ''
}

const reducer = (state=initState, action) => {
    switch (action.type) {
        case 'ADD_SHOW':
            return {
                ...state,
                watchList: [...state.watchList, action.payload]
            }
        case 'REMOVE_SHOW':
            return {
                ...state,
                watchList: state.watchList.filter(s => s.id != action.payload)
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'LOAD_SHOWS':
            return {
                ...state,
                loading: false,
                showData: action.payload,
                error: ''
            }
                
        default:
            return state;
    }
}

export default reducer