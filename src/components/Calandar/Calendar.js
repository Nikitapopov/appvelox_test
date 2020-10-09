import React, {useState} from 'react';
import cn from 'classnames';
import * as dateFns from 'date-fns';
import { ru } from 'date-fns/locale'

import s from './Calendar.module.sass';

const Calendar = (props) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const header = () => {
        const dateFormat = ['LLLL', 'yyyy'];
        const nextMonth = () => {
            setCurrentDate(dateFns.addMonths(currentDate, 1));
        }
        const prevMonth = () => {
            setCurrentDate(dateFns.subMonths(currentDate, 1));
        }
        return (
            <div className={cn(s.calendar__header)}>
                <span>
                    <img className={s.calendar__btn} src={require('../../assets/img/icons/arrow_back.svg')} onClick={prevMonth}/>
                </span>
                <p className={s.calendar__month}>
                    {dateFns.format(currentDate, dateFormat[0],{locale: ru})[0].toUpperCase()
                    + dateFns.format(currentDate, dateFormat[0],{locale: ru}).slice(1) + ', '
                    + dateFns.format(currentDate, dateFormat[1],{locale: ru})}
                </p>
                <span>
                    <img className={s.calendar__btn} src={require('../../assets/img/icons/arrow_forward.svg')} onClick={nextMonth}/>
                </span>
            </div>
        );
    };

    const daysOfWeek = () => {
        const dateFormat = "EEEEEE";
        const days = [];
        let startDate = dateFns.startOfWeek(currentDate,{locale: ru});
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className={cn(s.calendar__dayOfWeek)} key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat,{locale: ru})}
                </div>
            );
        }
        return <div className={cn(s.calendar__daysOfWeek)}>{days}</div>;
    };

    const cells = (records) => {
        const monthStart = dateFns.startOfMonth(currentDate,{locale: ru});
        const monthEnd = dateFns.endOfMonth(monthStart,{locale: ru});
        const startDate = dateFns.startOfWeek(monthStart,{locale: ru});
        const endDate = dateFns.endOfWeek(monthEnd,{locale: ru});
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        const countOfMeeting = (day) => {
            let count = 0;
            records.forEach(record => {
                if(day.setHours(0,0,0,0) === record.date.setHours(0,0,0,0)) {
                    count++;
                }
            })
            if(count>0) console.log('WOW - ', day)
            return count;
        }
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat,{locale: ru});
                let countOfMeetingToday;
                if(records) countOfMeetingToday = countOfMeeting(day);
                days.push(
                    <div
                        className={cn(s.calendar__cell, {[s.calendar__cell_isDisabled]: !dateFns.isSameMonth(day, monthStart)})}
                        key={day}
                    >
                        <span className={s.calendar__number}>{formattedDate}</span>
                        {countOfMeetingToday > 0 &&
                            <span className={s.calendar__meetings}><b>{countOfMeetingToday}</b></span>
                        }
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className={s.calendar__row} key={day}> {days} </div>
            );
            days = [];
        }
        return <div className={s.calendar__cells}>{rows}</div>;
    }

    return (
        <div className={s.calendar}>
            <div className={s.calendar__header}>
                {header()}
            </div>
            <div className={s.calendar__daysOfWeek}>
                {daysOfWeek()}
            </div>
            <div className={s.calendar__cells}>
                {cells(props.records)}
            </div>
        </div>
    );
};

export default Calendar;