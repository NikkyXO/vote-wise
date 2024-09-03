import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface LocationProviderProps {
  children: React.ReactNode;
}

interface LocationContextType {
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  states: string[];
  setStates: (value: string[]) => void;
  selectedState: string;
  setSelectedState: (value: string) => void;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: (value: string) => void;
}

const defaultContextValue: LocationContextType = {
  selectedCountry: '',
  setSelectedCountry: () => {},
  states: [],
  setStates: () => {},
  selectedState: '',
  setSelectedState: () => {},
  isError: false,
  errorMessage: '',
  setIsError: () => false,
  setErrorMessage: () => {},
};

export const LocationContext =
  createContext<LocationContextType>(defaultContextValue);

export function useLocalityHook() {
  return useContext(LocationContext);
}
const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [states, setStates] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <LocationContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        states,
        setStates,
        selectedState,
        setSelectedState,
        isError,
        setIsError,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
