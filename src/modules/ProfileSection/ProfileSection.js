import React from 'react';
import {Link} from 'react-router-dom';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import cn from 'classnames';

import s from './ProfileSection.module.sass';
import Record from './Record/Record';
import Block from '../../components/Block/Block';

const electonicCards = [
    {
        title: 'Информация о пациенте',
        description: ['Ваши личные данные', 'Рекомендации врачей', 'История болезней'],
        logo: require('../../assets/img/icons/electronicCards/patientInfo.svg'),
        isMarked: true
    },
    {
        title: 'Результаты анализов',
        description: 'Вы можете узнать здесь результаты своих анализов',
        logo: require('../../assets/img/icons/electronicCards/analysisResult.svg'),
        isMarked: false
    },
    {
        title: 'Добавить  информацию',
        description: 'Добавляйте в свою электронную медицинскую карту новые данные',
        logo: require('../../assets/img/icons/electronicCards/addInfo.svg'),
        isMarked: false
    },
    {
        title: 'История приемов',
        description: 'Вся информация о полученных услугах за все время хранится здесь',
        logo: require('../../assets/img/icons/electronicCards/meetingHistory.svg'),
        isMarked: false
    },
];

const ProfileSection = ({isRecordsDownloaded, records}) => {
    return (
        <section className={s.profile}>
            <p className='title'>Записи на прием</p>
            <div className={s.profile__records}>
                {isRecordsDownloaded
                    ? records && records[0]
                        ? (<Record date={records[0].date}
                                   clinic={records[0].clinic}
                                   doctor={records[0].doctor}/>)
                        : (<p>Нет записи</p>)
                    : (<Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}/>)
                }
                {isRecordsDownloaded
                    ? records && records[1]
                        ? (<Record date={records[1].date}
                                   clinic={records[1].clinic}
                                   doctor={records[1].doctor}/>)
                        : (<p>Нет записи</p>)
                    : (<Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}/>)
                }
                <div className={s.profile__detailed}>
                    <p>Еще {records ? records.length - 2 : 0} записи <Link to="/profile/myrecords">Подробнее</Link></p>
                </div>
            </div>
            <div className={s.electronicMap}>
                <p className='title'>Электронная карта</p>
                <div className={s.electronicCards}>
                    {
                        electonicCards.map(card => {
                            return <div key={card.title}
                                        className={s.electronicCard}>
                                <ElectronicCard title={card.title}
                                                description={card.description}
                                                logo={card.logo}
                                                isMarked={card.isMarked}
                                />
                            </div>;
                        })
                    }
                </div>
            </div>
        </section>
    );
};

const ElectronicCard = ({title, description, logo, isMarked}) => {
    return (
        <Block className={cn({[s.card_isMarked]: isMarked}, s.card)}>
            <div className={cn({[s.card__logo_isMarked]: isMarked}, s.card__logo)}>
                <img src={logo}/>
            </div>
            <div className={s.card__content}>
                <p className={cn({[s.card__title_isMarked]: isMarked}, s.card__title)}>{title}</p>
                {Array.isArray(description) ? (
                    <ul>
                        {
                            description.map(item =>
                                <li key={item} className={s.card__point}><span>{item}</span></li>)
                        }
                    </ul>
                ) : (
                    <p className={s.card__description}>{description}</p>
                )
                }
            </div>
        </Block>
    );
};

export default ProfileSection;