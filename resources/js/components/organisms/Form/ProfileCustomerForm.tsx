import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

const ProfileCustomerForm = () => {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <InputWithLabel
                label="Name"
                labelFor="name"
                id="name"
                name="name"
                type="text"
                placeholder="Enter Your Name"
                value={auth && auth?.user?.name}
                autoComplete="off"
                readOnly
            />
            <div className="grid gap-3 md:grid-cols-2">
                <InputWithLabel
                    label="Email"
                    labelFor="email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    value={auth && auth?.user?.email}
                    autoComplete="off"
                    readOnly
                />
                <InputWithLabel
                    label="Phone"
                    labelFor="phone"
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Your Phone Number"
                    value={auth && auth?.user?.phone}
                    autoComplete="off"
                    readOnly
                />
            </div>
        </>
    );
};

export default ProfileCustomerForm;
