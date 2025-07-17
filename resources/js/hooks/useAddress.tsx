import { City, Country, State } from '@/types';
import { useEffect, useState } from 'react';
import { GetCity, GetCountries, GetState } from 'react-country-state-city';

export const useAddress = ({ countryId, currentStateId }: { countryId: string; currentStateId: string }) => {
    const [countriesList, setCountriesList] = useState<Country[]>([]);
    const [stateList, setStateList] = useState<State[]>([]);
    const [cityList, setCityList] = useState<City[]>([]);

    useEffect(() => {
        GetCountries().then((result) => {
            setCountriesList(result);
        });
    }, []);

    useEffect(() => {
        if (countryId) {
            GetState(parseInt(countryId)).then((result) => {
                setStateList(result);
            });
        }
    }, [countryId]);

    useEffect(() => {
        if (countryId && currentStateId) {
            GetCity(parseInt(countryId), parseInt(currentStateId)).then((result) => {
                setCityList(result);
            });
        }
    }, [countryId, currentStateId]);

    return { countriesList, stateList, cityList };
};
