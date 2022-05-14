import { httpservice } from './httpservice'
import { constants } from '../constants/constant'

export function getActiveSessionDataList () {
    return httpservice()
      .get(constants.products)
      .then(function (res) {
        return res.data.response
      })
      .catch(function (error) {
        return error.data
      })
  }
  