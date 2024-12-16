import {IconProps} from '@entity-models/iconProps.types';
import EmailIcon from '@icons/Email.icon';
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
  {
    Icon: EmailIcon,
    text: 'Continue with Email',
  },
];

export {socialLoginOptions};
