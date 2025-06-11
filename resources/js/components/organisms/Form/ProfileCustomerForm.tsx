import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';

const ProfileCustomerForm = () => {
    return (
        <>
            <InputWithLabel label="Name" labelFor="name" id="name" name="name" type="text" placeholder="Enter Your Name" autoComplete="off" />
            <div className="grid gap-3 md:grid-cols-2">
                <InputWithLabel
                    label="Email"
                    labelFor="email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                />
                <InputWithLabel
                    label="Phone"
                    labelFor="phone"
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Your Phone Number"
                    autoComplete="off"
                />
            </div>
        </>
    );
};

export default ProfileCustomerForm;
