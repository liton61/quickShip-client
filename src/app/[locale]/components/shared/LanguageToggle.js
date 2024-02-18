"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const LanguageToggle = () => {
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState();

    const getLanguageCode = () => {
        if (typeof window !== 'undefined') {
            const currentPathname = window.location.pathname;
            const languageCode = currentPathname.split("/")[1];
            return languageCode;
        }
        return null; // Return a default value or handle the case where window is not available
    };

    const languageCode = getLanguageCode();

    console.log(languageCode)

    useEffect(() => {
        if (router.pathname) {
            const [, language] = router.pathname.split('/');

            if (language && ['en', 'bn', 'hi', 'ar', 'cn'].includes(language)) {
                setSelectedLanguage(language);

            }
        }
    }, [router.pathname]);

    const onSelectChange = (e) => {
        e.preventDefault();
        const nextLocale = e.target.value;
        setSelectedLanguage(nextLocale);
        router.push(`/${nextLocale}`);
    };


    return (
        <select
            className="select select-bordered select-sm rounded max-w-xs font-semibold"
            onChange={onSelectChange}
            value={selectedLanguage}
        >

            <option disabled selected>{languageCode?.toString()?.toUpperCase()}</option>
            <option value="en">EN</option>
            <option value="bn">বাং</option>
            <option value="ar">AR</option>
            <option value="cn">CN</option>
            <option value="hi">HI</option>
        </select>
    );
};

export default LanguageToggle;