import type { ImgHTMLAttributes } from 'react';
import urlLogo from '../assets/logo-tramita.svg';
import { cn } from '../lib/utils';

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> { }

const Logo = ({ className, ...props }: LogoProps) => {
    return (
        <img
            src={urlLogo}
            alt="Tramita Logo"
            className={cn("h-8 w-auto", className)}
            {...props}
        />
    );
};

export default Logo;