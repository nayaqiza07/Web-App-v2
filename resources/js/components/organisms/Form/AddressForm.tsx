import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import SelectWithLabel from '@/components/molecules/FormField/SelectWithLabel';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { useAddressActions } from '@/hooks/useAddressActions';
import { useGeographicData } from '@/hooks/useGeographicData';
import { AddressType, SharedData } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { EditIcon, LoaderCircle, PlusCircleIcon, PlusIcon, SquarePenIcon } from 'lucide-react';

interface AddressFormProps {
    isFor?: 'create' | 'edit';
    data?: AddressType;
}

const AddressForm: React.FC<AddressFormProps> = ({ isFor, data: _address }) => {
    const { auth } = usePage<SharedData>().props;

    const { data, setData, processing, reset } = useForm<Required<AddressType>>({
        id: isFor === 'create' ? 0 : (_address?.id ?? 0),
        label: isFor === 'create' ? '' : (_address?.label ?? ''),
        recipient_name: isFor === 'create' ? '' : (_address?.recipient_name ?? ''),
        phone_number: isFor === 'create' ? auth.user.phone : (_address?.phone_number ?? ''),
        country: isFor === 'create' ? '' : (_address?.country ?? ''),
        state: isFor === 'create' ? '' : (_address?.state ?? ''),
        city: isFor === 'create' ? '' : (_address?.city ?? ''),
        street: isFor === 'create' ? '' : (_address?.street ?? ''),
        postal_code: isFor === 'create' ? '' : (_address?.postal_code ?? ''),
        is_default: true,
        user_id: auth.user.id,
    });

    const { countriesList, stateList, cityList, getNameById } = useGeographicData({
        countryId: data.country,
        currentStateId: data.state,
    });

    const { handleCreateAddress, handleUpdateAddress } = useAddressActions({ data, reset });

    const country_name = getNameById(countriesList, data.country);
    const state_name = getNameById(stateList, data.state);
    const city_name = getNameById(cityList, data.city);

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

                    <ScrollArea className="h-1/2">
                        <div className="space-y-3 p-4">
                            <InputWithLabel
                                label="Label"
                                labelFor="label"
                                id="label"
                                name="label"
                                type="text"
                                value={data.label}
                                onChange={(e) => setData('label', e.target.value)}
                                disabled={processing}
                                placeholder="Enter Label"
                                autoComplete="off"
                            />
                            <InputWithLabel
                                label="Recipient Name"
                                labelFor="recipient_name"
                                id="recipient_name"
                                name="recipient_name"
                                type="text"
                                value={data.recipient_name}
                                onChange={(e) => setData('recipient_name', e.target.value)}
                                disabled={processing}
                                placeholder="Enter Recipient Name"
                                autoComplete="off"
                            />
                            <InputWithLabel
                                label="Phone Number"
                                labelFor="phone_number"
                                id="phone_number"
                                name="phone_number"
                                type="text"
                                value={data.phone_number}
                                onChange={(e) => setData('phone_number', e.target.value)}
                                disabled={processing}
                                placeholder="Enter Phone Number"
                                autoComplete="off"
                            />
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
                                label="Postal Code"
                                labelFor="postal_code"
                                id="postal_code"
                                name="postal_code"
                                type="text"
                                value={data.postal_code}
                                onChange={(e) => setData('postal_code', e.target.value)}
                                disabled={processing}
                                placeholder="Enter Postal Code"
                                autoComplete="off"
                            />
                        </div>
                    </ScrollArea>

                    <SheetFooter className="border-t">
                        <h6 className="text-xs">Preview:</h6>
                        <Textarea
                            placeholder="Your address preview will appear here"
                            readOnly
                            className="border-border focus-visible:border-border h-30 resize-none overflow-y-auto focus-visible:ring-transparent"
                            value={[data.street, city_name, state_name, country_name, data.postal_code].filter(Boolean).join(', ')}
                        />

                        <SheetClose asChild>
                            <Button type="submit" effect="shine" disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                {isFor === 'create' ? (
                                    <>
                                        <PlusIcon /> Save
                                    </>
                                ) : (
                                    <>
                                        <EditIcon /> Update
                                    </>
                                )}
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                </form>
            </SheetContent>
        </Sheet>
    );
};

export default AddressForm;
