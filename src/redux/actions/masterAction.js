export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const LANGUAGE = 'LANGUAGE'
export const SIGN_IN = 'SIGN_IN'


export function loadingAction(action) {
    return {type: LOADING, payload: {loading: action}}
}

export function errorAction(action) {
    return {type: ERROR, payload: {error: action}}
}

export function languageAction(action) {
    return {type: LANGUAGE, payload: {language: action}}
}

export function signInAction(action) {
    return {
        type: SIGN_IN,
        payload: {
            signIn: action,
        }
    }
}

