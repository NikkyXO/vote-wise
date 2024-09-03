import React, { createContext, useContext, useState } from 'react';

interface LocationProviderProps {
  children: React.ReactNode;
}

export const LocationContext = createContext({});

export function useUser() {
  return useContext(LocationContext);
}
const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [states, setStates] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string>('');

  return (
    <LocationContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        states,
        setStates,
        selectedState,
        setSelectedState,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
