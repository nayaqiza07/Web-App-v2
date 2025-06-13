import InputWithButton from '@/components/molecules/FormField/InputWithButton';
import { motion } from 'framer-motion';

const Subscription = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex h-[168px] flex-col items-center justify-center gap-4 border-t"
        >
            <h3 className="text-center font-bold">Sign up for the newsletter and get 10% discount</h3>
            <InputWithButton
                placeholder="E-mail Address"
                btnText="Send"
                inputVariant="rounded"
                buttonVariant="rounded"
                btnProps={{
                    variant: 'outline',
                    effect: 'expandIcon',
                    size: 'sm',
                }}
            />
        </motion.div>
    );
};

export default Subscription;
