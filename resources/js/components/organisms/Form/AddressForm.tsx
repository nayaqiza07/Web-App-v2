import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import SelectWithLabel from '@/components/molecules/FormField/SelectWithLabel';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AddressFormInput } from '@/types';
import { useForm } from '@inertiajs/react';
import { PlusCircleIcon } from 'lucide-react';
import { FormEventHandler } from 'react';

interface AddressFormProps {
    addressData: AddressFormInput[];
    onAddAddress: (newAddress: AddressFormInput) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onAddAddress }) => {
    const { data, setData, reset } = useForm<Required<AddressFormInput>>({
        id: '',
        region: '',
        state: '',
        city: '',
        address: '',
        zip: '',
    });

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
                    Add New
                    <PlusCircleIcon />
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-card">
                <form onSubmit={submit} className="flex h-full flex-col gap-0">
                    <SheetHeader className="border-b">
                        <SheetTitle>Add New Address</SheetTitle>
                        <SheetDescription>Please enter your address</SheetDescription>
                    </SheetHeader>

                    <div className="flex flex-col gap-3 p-4">
                        <SelectWithLabel
                            label="Country / Region"
                            labelFor="region"
                            id="region"
                            placeholder="Select Country or Region"
                            value={data.region}
                            onValueChange={(value) => setData('region', value)}
                        />
                        <SelectWithLabel
                            label="State"
                            labelFor="state"
                            id="state"
                            placeholder="Select State"
                            value={data.state}
                            onValueChange={(value) => setData('state', value)}
                        />
                        <SelectWithLabel
                            label="City"
                            labelFor="city"
                            id="city"
                            placeholder="Select City"
                            value={data.city}
                            onValueChange={(value) => setData('city', value)}
                        />
                        <InputWithLabel
                            label="Address"
                            labelFor="address"
                            id="address"
                            name="address"
                            type="text"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            placeholder="Enter Address"
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
                                const orderedKeys = ['address', 'city', 'state', 'region', 'zip'];
                                const values = orderedKeys
                                    .map((key) => data[key as keyof typeof data]) // ambil berdasarkan urutan
                                    .filter((val) => val.trim() !== '');

                                return values.length > 0 && values.join(', ');
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
