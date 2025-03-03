import {IconProps} from '@entity-models/iconProps.types';
import FacebookIcon from '@icons/Facebook.icon';
import GoogleIcon from '@icons/Google.icon';

interface socialLoginOptionsProps {
  Icon: React.ElementType<IconProps>;
  text: string;
}
const socialLoginOptions: socialLoginOptionsProps[] = [
  {
    Icon: FacebookIcon,
    text: 'Continue with Facebook',
  },
  {
    Icon: GoogleIcon,
    text: 'Continue with Google',
  },
];

export {socialLoginOptions};
