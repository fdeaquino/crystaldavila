import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher';

const LanguageSwitcherWrapper = ({ children }) => {
    return (
        <>
            <div className="language-switcher-wrapper">
                {children}
                <LanguageSwitcher />
            </div>
        </>
    );
};

export default LanguageSwitcherWrapper;
