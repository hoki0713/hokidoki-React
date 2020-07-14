
let nothing = {};

let initialState = nothing ? nothing : {};

export function nothingReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    };
}