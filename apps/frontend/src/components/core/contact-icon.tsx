import { FC } from 'react';
import { BackendContactTypeEnum } from '@packages/common';
import { IconBaseProps } from 'react-icons';
import {
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsGithub,
  BsMailbox2,
  BsLink,
  BsLinkedin,
  BsTelegram,
} from 'react-icons/bs';

type Props = IconBaseProps & {
  contactType: BackendContactTypeEnum;
};

export const ContactIcon: FC<Props> = ({ contactType, ...rest }) => {
  switch (contactType) {
    case BackendContactTypeEnum.LOCATION:
      return <BsFillGeoAltFill {...rest} />;
    case BackendContactTypeEnum.PHONE:
      return <BsFillTelephoneFill {...rest} />;
    case BackendContactTypeEnum.MAIL:
      return <BsMailbox2 {...rest} />;
    case BackendContactTypeEnum.LINK:
      return <BsLink {...rest} />;
    case BackendContactTypeEnum.GITHUB:
      return <BsGithub {...rest} />;
    case BackendContactTypeEnum.LINKEDIN:
      return <BsLinkedin {...rest} />;
    case BackendContactTypeEnum.TELEGRAM:
      return <BsTelegram {...rest} />;
    default:
      return <></>;
  }
};
