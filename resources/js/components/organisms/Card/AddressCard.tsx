import CornerPlusBadge from '@/components/atoms/Badge/CornerPlusBadge';
import { Menu } from '@/components/atoms/Button/Menu';
import { Card, CardFooter, CardTitle } from '@/components/ui/card';
import { useGeographicData } from '@/hooks/useGeographicData';
import { AddressType } from '@/types';
import { MapIcon } from 'lucide-react';

const AddressCard = ({ data: _address }: { data: AddressType }) => {
    const { countriesList, stateList, cityList, getNameById } = useGeographicData({
        countryId: _address.country,
        currentStateId: _address.state,
    });

    const country_name = getNameById(countriesList, _address.country);
    const state_name = getNameById(stateList, _address.state);
    const city_name = getNameById(cityList, _address.city);

    return (
        <Card key={_address.id} className={`gap-2 p-4 ${_address.is_active && 'inset-ring-2 inset-ring-[#2563EB]'}`}>
            <CardTitle className={`flex items-center justify-between`}>
                {_address.is_active ? <CornerPlusBadge>Default</CornerPlusBadge> : <MapIcon size={16} />}
                <Menu data={_address} />
            </CardTitle>
            <CardFooter className="flex h-full flex-col items-start justify-between gap-10 p-0 text-xs">
                <p>{[_address.street, city_name, state_name, country_name, _address.zip].filter(Boolean).join(', ')}</p>

                <table>
                    <tbody>
                        <tr>
                            <td className="text-muted-foreground">City</td>
                            <td className="px-2">:</td>
                            <td>{city_name}</td>
                        </tr>
                        <tr>
                            <td className="text-muted-foreground">State</td>
                            <td className="px-2">:</td>
                            <td>{state_name}</td>
                        </tr>
                        <tr>
                            <td className="text-muted-foreground">Country</td>
                            <td className="px-2">:</td>
                            <td>{country_name}</td>
                        </tr>
                    </tbody>
                </table>
            </CardFooter>
        </Card>
    );
};

export default AddressCard;
