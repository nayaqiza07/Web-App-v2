import CornerPlusBadge from '@/components/atoms/Badge/CornerPlusBadge';
import { Menu } from '@/components/atoms/Button/Menu';
import { Card, CardFooter, CardTitle } from '@/components/ui/card';
import { AddressType } from '@/types';
import { MapIcon } from 'lucide-react';

const AddressCard = ({ data: _address }: { data: AddressType }) => {
    return (
        <Card key={_address.id} className={`gap-2 p-4 ${_address.is_default && 'inset-ring-2 inset-ring-[#2563EB]'}`}>
            <CardTitle className={`flex items-center justify-between`}>
                {_address.is_default ? <CornerPlusBadge>{_address.label}</CornerPlusBadge> : <MapIcon size={16} />}
                <Menu data={_address} />
            </CardTitle>
            <CardFooter className="flex h-full flex-col items-start justify-between gap-10 p-0 text-xs">
                <p>{[_address.street, _address.city, _address.state, _address.country, _address.postal_code].filter(Boolean).join(', ')}</p>

                <table>
                    <tbody>
                        <tr>
                            <td className="text-muted-foreground">Label</td>
                            <td className="px-2">:</td>
                            <td>{_address.label}</td>
                        </tr>
                        <tr>
                            <td className="text-muted-foreground">Recipient Name</td>
                            <td className="px-2">:</td>
                            <td>{_address.recipient_name}</td>
                        </tr>
                        <tr>
                            <td className="text-muted-foreground">Phone Number</td>
                            <td className="px-2">:</td>
                            <td>{_address.phone_number}</td>
                        </tr>
                        <tr>
                            <td className="text-muted-foreground">City</td>
                            <td className="px-2">:</td>
                            <td>{_address.city}</td>
                        </tr>
                        <tr>
                            <td className="text-muted-foreground">State</td>
                            <td className="px-2">:</td>
                            <td>{_address.state}</td>
                        </tr>
                        <tr>
                            <td className="text-muted-foreground">Country</td>
                            <td className="px-2">:</td>
                            <td>{_address.country}</td>
                        </tr>
                    </tbody>
                </table>
            </CardFooter>
        </Card>
    );
};

export default AddressCard;
