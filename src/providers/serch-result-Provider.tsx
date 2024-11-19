'use client';

import React, { createContext, useCallback, useContext, useMemo } from 'react';

interface TOnSearchContextType {
    value: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const OnSearch = createContext<TOnSearchContextType | undefined>(undefined);

const OnChangeProvider = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = React.useState('');
    const handleOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    const contextValue = useMemo(() => ({ value, handleOnChange }), [value, handleOnChange]);

    return <OnSearch.Provider value={contextValue}>{children}</OnSearch.Provider>;
};

export const useOnSearch = (): TOnSearchContextType => {
    const context = useContext(OnSearch);
    if (!context) {
        throw new Error('useOnSearch must be used within OnChangeProvider');
    }
    return context;
};

export default OnChangeProvider;
