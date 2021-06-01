export const GET_HOME_ADS = 'GET_HOME_ADS'
export const GET_HOME_ADS_CLEAR = 'GET_HOME_ADS_CLEAR'

export function addListAdsAction(item, total) {
    return {
        type: GET_HOME_ADS,
        payload: item,
        total: total,
    }
}

export function clearAds() {
    return {
        type: GET_HOME_ADS_CLEAR,
    }
}

