import { City, Country, State } from '@/types';
import { useEffect, useState } from 'react';
import { GetCity, GetCountries, GetState } from 'react-country-state-city';

export const useGeographicData = ({ countryId, currentStateId }: { countryId: string; currentStateId: string }) => {
    const [countriesList, setCountriesList] = useState<Country[]>([]);
    const [stateList, setStateList] = useState<State[]>([]);
    const [cityList, setCityList] = useState<City[]>([]);

    const getNameById = (list: (Country | State | City)[], id: string) => {
        return list.find((item) => String(item.id) === String(id))?.name || '';
    };

    const getIdByName = (list: (Country | State | City)[], name: string) => {
        return list.find((item) => String(item.name) === String(name))?.id.toString() ?? '';
    };

    useEffect(() => {
        GetCountries().then((result) => {
            setCountriesList(result as Country[]);
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

    return { countriesList, stateList, cityList, getNameById, getIdByName };
};
