
import { getAdminTagsListData } from '../services/AdminRules'

export const getAdminTagsList = () => dispatch => {

  dispatch({
    payload: {},
    type: 'GET_ADMIN_TAGS_LIST_PENDING'
  })
  getAdminTagsListData().then((res) => {
    dispatch({
      payload: {
        data: res.response
      },
      type: 'GET_ADMIN_TAGS_LIST_SUCCESS'
    })
  })

}