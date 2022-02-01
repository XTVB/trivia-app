import React from 'react';
import { Help, Add, Remove, History, Settings, ChevronRight, ChevronLeft } from '@mui/icons-material';

export type IconNames = 'minus' | 'plus' | 'history' | 'settings' | 'right' | 'left';
export type IconFontSize = 'inherit' | 'small' | 'large' | undefined;

type IconProps = {
  name: IconNames;
  color?: string;
  fontSize?: IconFontSize;
};

const Icon: React.FC<IconProps> = ({ name, color = 'currentColor', fontSize = 'inherit' }: IconProps) => {
  const props = {
    htmlColor: color,
    fontSize: fontSize,
  };

  switch (name) {
    case 'plus':
      return <Add {...props} />;
    case 'minus':
      return <Remove {...props} />;
    case 'history':
      return <History {...props} />;
    case 'settings':
      return <Settings {...props} />;
    case 'right':
      return <ChevronRight {...props} />;
    case 'left':
      return <ChevronLeft {...props} />;
    default:
      return <Help {...props} />;
  }
};

export default Icon;
