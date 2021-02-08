import { SET_UNSET_COMPLATED } from './actions'

function SetOnSetCompleted(data) {
    return {
        type: SET_UNSET_COMPLATED,
        payload: data
    }
}

export default SetOnSetCompleted