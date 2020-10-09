import React from 'react';

import s from './Header.module.sass';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__logo}>
                Логотип
            </div>
            <h1 className={s.header__title}>Мой профиль</h1>
            <div className={s.header__menu}>
                <button className={s.header__btn}>
                    <img src={require('../../assets/img/icons/search.svg')}/>
                </button>
                <button className={s.header__btn}>
                    <img src={require('../../assets/img/icons/notification.svg')}/>
                </button>
                <button className={s.header__btn}>
                    <img src={require('../../assets/img/icons/visually_impaired_mode.svg')}/>
                </button>
                <div className={s.header__avatar}>
                    <img src={require('../../assets/img/avatar.svg')}/>
                </div>
                <div className={s.header__extandBtn}>
                    <img src={require('../../assets/img/icons/extand_btn.svg')}/>
                </div>
            </div>
        </header>
    );
};

export default Header;