import { PlusIcon } from 'lucide-react';
import {
    LiquidButton,
    type LiquidButtonProps,
} from '@/components/animate-ui/components/buttons/liquid';

interface LiquidButtonDemoProps {
    variant: LiquidButtonProps['variant'];
    size: LiquidButtonProps['size'];

}

export default function AnimatedButton({
    variant,
    size,
}: LiquidButtonDemoProps) {
    return (
        <LiquidButton className='bg-[#A855F7]' variant={variant} size={size}>
            {size === 'icon' ? <PlusIcon /> : 'Contact'}
        </LiquidButton>
    );
}