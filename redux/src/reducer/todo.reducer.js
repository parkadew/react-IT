// context / useReducer 

//todo[main].reducer[discription].js(ext)

const initialState = [
    {
        id: 1,
        title: 'example-1',
        content: "example-2",
    }
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        default:
            return state;
    }
}
export default reducer;


