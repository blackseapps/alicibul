export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const POPUP = 'POPUP'
export const LANGUAGE = 'LANGUAGE'
export const SIGN_IN = 'SIGN_IN'
export const DESIGN_TOUR = 'DESIGN_TOUR'
export const INITIAL = "INITIAL";
export const NOTIFICATION_CAMPAING = "NOTIFICATION_CAMPAING";
export const NOTIFICATION_EMAILSMS = "NOTIFICATION_EMAILSMS";
export const DESIGN_POPUP_URI = "DESIGN_POPUP_URI";

export function initialAction() {
    return {type: INITIAL, payload: null}
}

export function loadingAction(action) {
    return {type: LOADING, payload: {loading: action}}
}

export function errorAction(action) {
    return {type: ERROR, payload: {error: action}}
}

export function popupAction(action) {
    return {type: POPUP, payload: {popup: action}}
}

export function languageAction(action) {
    return {type: LANGUAGE, payload: {language: action}}
}

export function tourAction(action) {
    return {type: DESIGN_TOUR, payload: {isTour: action}}
}

export function notificationCampaingAction(action) {
    return {type: NOTIFICATION_CAMPAING, payload: {notificationCampaign: action}}
}

export function notificationEmailSmsAction(action) {
    return {type: NOTIFICATION_EMAILSMS, payload: {notificationEmailSms: action}}
}

export function designPopupAction(action) {
    return {type: DESIGN_POPUP_URI, payload: {designPopupUri: action}}
}

export function signInAction(action) {
    return {
        type: SIGN_IN,
        payload: {
            signIn: action,
        }
    }
}

