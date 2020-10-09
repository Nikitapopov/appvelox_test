import {recordsAPI} from '../api/api';

let initialState = {
    isRecordsDownloaded: false,
    records: null,
};

const recordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'records/SET_IS_RECORDS_DOWNLOADED':
        case 'records/SET_RECORDS':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

const actions = {
    setIsRecordsDownloaded: (isRecordsDownloaded) =>
        ({type: 'records/SET_IS_RECORDS_DOWNLOADED', payload: {isRecordsDownloaded}}),
    setRecords: (records) => ({type: 'records/SET_RECORDS', payload: {records}}),
}

export const fetchRecords = () => async (dispatch) => {
    dispatch(actions.setIsRecordsDownloaded(false));
    let data = await recordsAPI.fetchRecords();
    if (data) {
        console.log(data);
        dispatch(actions.setRecords(data));
        dispatch(actions.setIsRecordsDownloaded(true));
    } else {
        dispatch(actions.setRecords(null));
        dispatch(actions.setIsRecordsDownloaded(true));
    }
};

export default recordsReducer;