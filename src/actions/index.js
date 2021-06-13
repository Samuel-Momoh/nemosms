
export const increment = (value) => {
    return{
        type: 'INCREMENT',
        playload: value
    };
};

export const addToReciever = (value) => {
    return{
        type: 'ADDTORECIEVER',
        playload: value
    };
};
export const loginUser = (value) => {
    return{
        type: 'LOGIN',
        playload: value
    };
};
