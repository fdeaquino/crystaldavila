import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import languageIcon from '../../assets/images/language-icon.png'; // Adjust the path according to your project structure

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [showOptions, setShowOptions] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);


    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setShowOptions(false);
    };

    const handleMouseEnter = () => {
        if (window.innerWidth >= 768) {
            if (timeoutId) clearTimeout(timeoutId);
            setShowOptions(true);
        }
    };

    const handleMouseLeave = () => {
        if (timeoutId) clearTimeout(timeoutId);
        setTimeoutId(setTimeout(() => setShowOptions(false), 2000));
    };

    const handleToggleOptions = () => {
        if (window.innerWidth < 768) {
            setShowOptions(!showOptions);
        }
    };

    const getLanguageName = (languageCode) => {
        switch (languageCode) {
            case 'en':
                return 'English';
            case 'es':
                return 'Español';
            default:
                return languageCode.toUpperCase();
        }
    };

    return (
        <div
            className="language-switcher"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleToggleOptions}
        >
            <img src={languageIcon} alt="Language" className="language-icon" />
            <span className="language-name">{getLanguageName(i18n.language)}</span>
            {showOptions && (
                <div className="language-options">
                    <button onClick={() => changeLanguage('en')}>English</button>
                    <button onClick={() => changeLanguage('es')}>Español</button>
                    {/* Add more buttons for other languages if needed */}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
