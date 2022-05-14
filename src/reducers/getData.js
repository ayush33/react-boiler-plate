export default (state, action) => {
    if (typeof state == 'undefined') {
        state = {
            isFetching: true,
            data: []
        }
    }

    switch (action.type) {
        case 'GET_SAML_SETTING_LOGIN_PENDING':
            return { isFetching: true, data: action.payload.data }
        case 'GET_SAML_SETTING_LOGIN_SUCCESS':
            return { isFetching: false, data: action.payload.data }
        case 'GET_SAML_SETTING_LOGIN_ERROR':
            return { isFetching: false, data: action.payload }
        default:
            return state
    }
};