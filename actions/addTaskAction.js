import { ADDTASK } from './actions'

function AddTask(data) {
    return {
        type: ADDTASK,
        payload: data
    }
}

export default AddTask