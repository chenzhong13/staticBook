import actionType from '../constant/actionType';
import { Map } from 'immutable';

const initialState = Map({
    email: '12@qq.com',
    password: '123456',
    repeatpassword: '123456'
});

export default function(state = initialState, action) {
    switch (action.type) {
        case actionType.REGISTER_EMAIL_CHANGE:
            return state.set('email', action.payload);
        case actionType.REGISTER_PASSWORD_CHANGE:
            return state.set('password', action.payload);
        case actionType.REGISTER_REPEAT_PASSWORD_CHANGE:
            return state.set('repeatpassword', action.payload);
        default:
            return state;
    }
}
