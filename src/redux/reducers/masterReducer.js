import {
    LOADING,
    ERROR,
    POPUP,
    LANGUAGE,
    SIGN_IN,
    DESIGN_TOUR,
    NOTIFICATION_CAMPAING, NOTIFICATION_EMAILSMS, DESIGN_POPUP_URI
} from "../actions/masterAction";

export function masterReducer(state = '', action) {

    const initialState = {
        error: false,
        loading: false,
        popup: false,
        designPopupUri: '',
        language: 'TR',
        signIn: false,
        isTour: false,
        notificationCampaign: true,
        notificationEmailSms: true,
    }

    switch (action.type) {
        case LOADING :
            return Object.assign(initialState, state, action.payload);
        case ERROR :
            return Object.assign(initialState, state, action.payload);
        case POPUP :
            return Object.assign(initialState, state, action.payload);
        case LANGUAGE :
            return Object.assign(initialState, state, action.payload);
        case DESIGN_TOUR :
            return Object.assign(initialState, state, action.payload);
        case NOTIFICATION_CAMPAING :
            return Object.assign(initialState, state, action.payload);
        case NOTIFICATION_EMAILSMS :
            return Object.assign(initialState, state, action.payload);
        case DESIGN_POPUP_URI :
            return Object.assign(initialState, state, action.payload);
        case SIGN_IN :
            return Object.assign(initialState, state, action.payload);
        default :
            return state
    }
}
