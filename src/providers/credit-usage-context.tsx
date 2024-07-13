import React, { ReactNode, createContext, useContext, useState } from 'react';
type CreditUsageContextType = {
    creditUsage: number;
    handleCreditUsage: (creditUsage: number) => void;
};
const CreditUsageContext = createContext<CreditUsageContextType>({
    creditUsage: 0,
    handleCreditUsage: () => {},
});

const CreditUsageContextProvider = ({ children }: { children: ReactNode }) => {
    const [creditUsage, setCreditUsage] = useState<number>(0);
    const handleCreditUsage = (creditUsage: number) => {
        setCreditUsage(creditUsage);
    };
    return (
        <CreditUsageContext.Provider value={{ creditUsage, handleCreditUsage }}>
            {children}
        </CreditUsageContext.Provider>
    );
};

export const useCraditUsageContext = () => useContext(CreditUsageContext);
export default CreditUsageContextProvider;
