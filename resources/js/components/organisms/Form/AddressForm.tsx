import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import SelectWithLabel from '@/components/molecules/FormField/SelectWithLabel';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useAddress } from '@/hooks/useAddress';
import { AddressType } from '@/types';
import { useForm } from '@inertiajs/react';
import { PlusCircleIcon } from 'lucide-react';
import { FormEventHandler } from 'react';

interface AddressFormProps {
    addressData: AddressType[];
    onAddAddress: (newAddress: AddressType) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onAddAddress }) => {
    const { data, setData, reset } = useForm<Required<AddressType>>({
        id: '',
        country: '',
        state: '',
        city: '',
        street: '',
        zip: '',
    });

    const { countriesList, stateList, cityList } = useAddress({ countryId: data.country, currentStateId: data.state });

    // console.log({ countriesList, stateList, cityList });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        console.log(data);
        onAddAddress(data);
        reset();
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button effect="shine" className="justify-self-end md:col-span-2">
                    <PlusCircleIcon />
                    Create
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-card">
                <form onSubmit={submit} className="flex h-full flex-col gap-0">
                    <SheetHeader className="border-b">
                        <SheetTitle>Create New Address</SheetTitle>
                        <SheetDescription>Please enter your address</SheetDescription>
                    </SheetHeader>

                    <div className="flex flex-col gap-3 p-4">
                        <SelectWithLabel
                            label="Country / Region"
                            labelFor="country"
                            id="country"
                            placeholder="Select Country or Region"
                            options={countriesList}
                            value={data.country}
                            onValueChange={(value) => setData('country', value)}
                        />
                        <SelectWithLabel
                            label="State"
                            labelFor="state"
                            id="state"
                            placeholder="Select State"
                            options={stateList}
                            value={data.state}
                            onValueChange={(value) => setData('state', value)}
                        />
                        <SelectWithLabel
                            label="City"
                            labelFor="city"
                            id="city"
                            placeholder="Select City"
                            options={cityList}
                            value={data.city}
                            onValueChange={(value) => setData('city', value)}
                        />
                        <InputWithLabel
                            label="Street"
                            labelFor="street"
                            id="street"
                            name="street"
                            type="text"
                            value={data.street}
                            onChange={(e) => setData('street', e.target.value)}
                            placeholder="Enter Street"
                            autoComplete="off"
                        />
                        <InputWithLabel
                            label="Zip Code"
                            labelFor="zip"
                            id="zip"
                            name="zip"
                            value={data.zip}
                            onChange={(e) => setData('zip', e.target.value)}
                            type="text"
                            placeholder="Enter Zip Code"
                            autoComplete="off"
                        />
                    </div>

                    <SheetFooter className="border-t">
                        <Card className="h-35 gap-2 border p-4 text-xs">
                            <h3>Preview:</h3>
                            {(() => {
                                // const orderedKeys = ['street', 'city', 'state', 'country', 'zip'];
                                // const values = orderedKeys
                                //     .map((key) => data[key as keyof typeof data]) // ambil berdasarkan urutan
                                //     .filter((val) => val.trim() !== '');

                                // return values.length > 0 && values.join(', ');

                                const getNameById = (id: string, list: { id: number; name: string }[]) => {
                                    return list.find((item) => item.id.toString() === id)?.name || '';
                                };

                                const orderedKeys = ['street', 'city', 'state', 'country', 'zip'];
                                const values = orderedKeys
                                    .map((key) => {
                                        const val = data[key as keyof typeof data];

                                        if (key === 'country') return getNameById(val, countriesList);
                                        if (key === 'state') return getNameById(val, stateList);
                                        if (key === 'city') return getNameById(val, cityList);
                                        return val;
                                    })
                                    .filter((val) => val.trim() !== '')
                                    .join(', ');
                                return values;
                            })()}
                        </Card>
                        <SheetClose asChild>
                            <Button type="submit" effect="shine">
                                Save
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                </form>
            </SheetContent>
        </Sheet>
    );
};

export default AddressForm;
