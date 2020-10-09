import React from 'react';
import {format} from "date-fns";
import { ru } from 'date-fns/locale'

import s from './Record.module.sass';
import Block from '../../../components/Block/Block';
import Button from '../../../components/Button/Button';

const Record = ({date, clinic, doctor}) => {
    let editedDate = format(new Date(date), 'EEEE', {locale: ru})[0].toUpperCase()
        + format(new Date(date), 'EEEE dd.MM.yy | HH:mm', {locale: ru}).slice(1)
    //Format Понедельник 15.06.20 | 15:30
    return (
        <>
            <Block className={s.record}>
                <div className={s.record__info}>
                    <p className={s.record__date}>{editedDate}</p>
                    <p className={s.record__clinic}>{clinic}</p>
                    <div className={s.doctor}>
                        <img className={s.doctor__photo} src={doctor.photo}/>
                        <div className={s.doctor__info}>
                            <p className={s.doctor__name}>{doctor.name}</p>
                            <p className={s.doctor__specialization}>{doctor.specialization}</p>
                        </div>
                    </div>
                </div>
                <div className={s.record__btnBox}>
                    <Button className={s.record__btn}>
                        Отменить
                    </Button>
                </div>
            </Block>
        </>
    );
};

export default Record;