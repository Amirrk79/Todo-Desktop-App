import { SET_UNSET_SCORED } from './actions'

function setUnsetScored(data) {
    return {
        type: SET_UNSET_SCORED ,
        payload: data
    }
}

export default setUnsetScored