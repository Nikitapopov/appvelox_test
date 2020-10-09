import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route, Switch} from 'react-router';

import {getIsRecordsDownloaded, getRecords} from '../../redux/selectors';
import ProfileSection from '../ProfileSection/ProfileSection';
import MyRecords from '../MyRecords/MyRecords';
import {fetchRecords} from '../../redux/records_reducer';

const Profile = () => {
    let isRecordsDownloaded = useSelector(getIsRecordsDownloaded);
    let records = useSelector(getRecords);

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRecords());
    }, []);

    return (
        <Switch>
            <Route exact path='/profile'>
                <ProfileSection isRecordsDownloaded={isRecordsDownloaded}
                                records={records}
                />
            </Route>
            <Route exact path='/profile/myrecords'>
                <MyRecords isRecordsDownloaded={isRecordsDownloaded}
                           records={records}
                />
            </Route>
        </Switch>
    );
};

export default Profile;