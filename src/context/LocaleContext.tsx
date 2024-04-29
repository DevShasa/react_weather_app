import {createContext, FC, useState} from 'react';

interface Rprops{
    children?: React.ReactNode;

}

interface ContextType{
    locale:"en" | "sw",
    changeLocation:()=>void
}

export const LocaleContext = createContext<ContextType>({
    locale:"en",
    changeLocation: ()=>{}
})

export const LanguageProvider: FC<Rprops> = ({children}) => {
    const [locale, setLocale] = useState<"en" |"sw">('en');

    const changeLocation = ()=>{
        setLocale(prev => prev === "en" ? "sw" : "en")
    }

    return(
        <LocaleContext.Provider value={{ locale, changeLocation }}>
            {children}
        </LocaleContext.Provider>
    )
}
