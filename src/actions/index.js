
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
export const toggleOptions = () => {
    return{
        type: 'TOGGLE',
    };
};
export const restoreOptions = () => {
    return{
        type: 'RESTORE',
    };
};
export const togglepopMenue = () => {
    return{
        type: 'TOGGLE',
    };
};
export const restorepopMenue = () => {
    return{
        type: 'RESTORE',
    };
};