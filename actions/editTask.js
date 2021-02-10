import { EDIT_TASK } from './actions'

function EditTask(data) {
    return {
        type: EDIT_TASK , 
        payload: data
    }
}

export default EditTask