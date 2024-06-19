export const userReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];

        case 'DELETE_USER':
            return state.filter((user) => user.id !== action.payload.id)
    }
};