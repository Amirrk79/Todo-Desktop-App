import  { DELETETASK } from './actions'

function DeleteTask(data) {
    return {
        type:DELETETASK ,
        payload: data
    }
}

export default DeleteTask