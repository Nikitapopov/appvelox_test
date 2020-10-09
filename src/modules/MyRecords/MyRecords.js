import React from 'react';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import s from './MyRecords.module.sass';
import Record from '../ProfileSection/Record/Record';
import Calendar from '../../components/Calandar/Calendar';

const MyRecords = ({isRecordsDownloaded, records}) => {
    return (
        <section className={cn(s.records, 'clearfix')}>
            <Link className={cn('title', s.backLink)} to='/profile'>
                <img className={s.backLink__leftArrow} src={require('../../assets/img/icons/left_arrow.svg')}/>
                Записи на прием
            </Link>
            <div className={s.records__content}>
                <div className={s.recordsList}>
                    {isRecordsDownloaded
                        ? records
                            ? (
                                records.map((record, index) => {
                                    return <div key={index} className={s.recordsListItem}>
                                        <Record date={record.date}
                                                clinic={record.clinic}
                                                doctor={record.doctor}/>
                                    </div>
                                })
                            )
                            : (<p>Нет записи</p>)
                        : (<Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}/>)
                    }
                </div>
                <div className={s.calendar}>
                    <Calendar records={records}/>
                </div>
            </div>
        </section>
    );
};

export default MyRecords;