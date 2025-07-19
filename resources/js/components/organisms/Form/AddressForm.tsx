import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import SelectWithLabel from '@/components/molecules/FormField/SelectWithLabel';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useAddressActions } from '@/hooks/useAddressActions';
import { useGeographicData } from '@/hooks/useGeographicData';
import { AddressType } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { LoaderCircle, PlusCircleIcon, SquarePenIcon } from 'lucide-react';

interface AddressFormProps {
    isFor?: 'create' | 'edit';
    data?: AddressType;
}

const AddressForm: React.FC<AddressFormProps> = ({ isFor, data: _address }) => {
    const { auth } = usePage().props;
    const { data, setData, processing, reset } = useForm<Required<AddressType>>({
        id: isFor === 'create' ? '' : _address?.id,
        country: isFor === 'create' ? '' : _address?.country,
        state: isFor === 'create' ? '' : _address?.state,
        city: isFor === 'create' ? '' : _address?.city,
        street: isFor === 'create' ? '' : _address?.street,
        zip: isFor === 'create' ? '' : _address?.zip,
        is_active: true,
        user_id: auth.user.id,
    });

    const { countriesList, stateList, cityList } = useGeographicData({ countryId: data.country, currentStateId: data.state });

    const { handleCreateAddress, handleUpdateAddress } = useAddressActions({ data, reset });

    return (
        <Sheet>
            <SheetTrigger asChild>
                {isFor === 'create' ? (
                    <Button effect="shine" className="justify-self-end md:col-span-2">
                        <PlusCircleIcon />
                        Create
                    </Button>
                ) : (
                    <span className="text-accent-foreground hover:bg-accent flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm">
                        <SquarePenIcon className="size-4" />
                        Edit
                    </span>
                )}
            </SheetTrigger>
            <SheetContent className="bg-card">
                <form onSubmit={isFor === 'create' ? handleCreateAddress : handleUpdateAddress} className="flex h-full flex-col gap-0">
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
                            disabled={processing}
                        />
                        <SelectWithLabel
                            label="State"
                            labelFor="state"
                            id="state"
                            placeholder="Select State"
                            options={stateList}
                            value={data.state}
                            onValueChange={(value) => setData('state', value)}
                            disabled={processing}
                        />
                        <SelectWithLabel
                            label="City"
                            labelFor="city"
                            id="city"
                            placeholder="Select City"
                            options={cityList}
                            value={data.city}
                            onValueChange={(value) => setData('city', value)}
                            disabled={processing}
                        />
                        <InputWithLabel
                            label="Street"
                            labelFor="street"
                            id="street"
                            name="street"
                            type="text"
                            value={data.street}
                            onChange={(e) => setData('street', e.target.value)}
                            disabled={processing}
                            placeholder="Enter Street"
                            autoComplete="off"
                        />
                        <InputWithLabel
                            label="Zip Code"
                            labelFor="zip"
                            id="zip"
                            name="zip"
                            type="text"
                            value={data.zip}
                            onChange={(e) => setData('zip', e.target.value)}
                            disabled={processing}
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
                            <Button type="submit" effect="shine" disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                {isFor === 'create' ? 'Save' : 'Update'}
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                </form>
            </SheetContent>
        </Sheet>
    );
};

export default AddressForm;
