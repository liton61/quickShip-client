"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const LanguageToggle = () => {
    const router = useRouter();
    const [selectedLanguage, setSelectedLanguage] = useState("en");
    console.log(router)

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
        router.push(`/${nextLocale}`, undefined, { shallow: true });
    };



    return (
        <select
            className="select select-bordered select-sm rounded max-w-xs font-semibold"
            onChange={onSelectChange}
            value={selectedLanguage}
        >
            <option disabled selected>

            </option>
            <option value="en">EN</option>
            <option value="bn">বাং</option>
            <option value="ar">AR</option>
            <option value="cn">CN</option>
            <option value="hi">HI</option>
        </select>
    );
};

export default LanguageToggle;