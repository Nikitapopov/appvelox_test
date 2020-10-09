import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import cn from 'classnames';

import s from './Sidebar.module.sass';
import CreateSidebarSvgWithColor from '../../assets/js/createSidebarSVGWithColor';
import Button from '../../components/Button/Button';

const pages = [
    {name: 'Профиль', link: '/profile', img: 'profile'},
    {name: 'Врачи и клиники', link: '/doctorsAndClinics', img: 'doctorsAndClinics'},
    {name: 'Сообщения', link: '/messages', img: 'messages'},
    {name: 'Текстирование', link: '/testing', img: 'testing'},
    {name: 'Полезно знать', link: '/usefullToKnow', img: 'usefullToKnow'}
];

const Sidebar = (props) => {
    let currentPage = props.location.pathname.split('/')[1];
    return (
        <section className={s.sidebar}>
            <ul>
                {pages.map(page => {
                    let pageClassname = currentPage === page.link.slice(1)
                        ? s.sidebar__link_isActive : '';
                    return <li key={page.name}>
                        <Link className={cn(pageClassname, s.sidebar__link)} to={page.link}>
                        <CreateSidebarSvgWithColor
                            img={page.img}
                            color={pageClassname ? '#7761FF' : 'white'}/>
                            {page.name}
                        </Link>
                    </li>;
                })
                }
            </ul>
            <div className={s.sidebar__btnBox}>
                <Button className={s.sidebar__btn}>Подать заявку</Button>
            </div>
            <div className={s.footer}>
                <div className={s.footer__help}>
                    <img src={require('../../assets/img/icons/help.svg')}/>
                    <Link to={'#'}>Помощь</Link>
                </div>
                <img className={s.footer__logo} src={require('../../assets/img/icons/appvelox.svg')}/>
            </div>t
        </section>
    );
};

export default withRouter(Sidebar);