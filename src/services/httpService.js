//* *********************************************************************
//    Purpose: <contains the base url and interseptor calling for every api call >
//   SN  Date       Change Description      Modified By
//* *********************************************************************

import { Interseptor } from './Interseptor'
import { constants } from '../constants/constant'

const axios = require('axios')
const instanceUrl = axios.create({
    baseURL: constants.API_URL,

    // For refresh barrer token
    //   transformRequest: [
    //     function (data, headers) {
    //       let userData = localStorage.getItem('userData')
    //       if (userData) {
    //         userData = JSON.parse(userData)
    //         if (userData.sessiontoken) {
    //           headers.Authorization = 'Bearer ' + userData.sessiontoken
    //         }
    //       }
    //       return JSON.stringify(data)
    //     }
    //   ],
    headers: {
        'Content-Type': 'application/json',   // change content type for mltipart
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache'
    }
})



/**
 * httpservice for get and post json formatted data
 * @returns {*}
 */
export const httpservice = () => {
    instanceUrl.interceptors.request.use(request => Interseptor.requestHandler(request))
    instanceUrl.interceptors.response.use(
        response => Interseptor.successHandler(response),
        error => Interseptor.errorHandler(error)
    )
    return instanceUrl
}

