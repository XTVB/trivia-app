import React from 'react';
import {
  Inbox,
  OpenInNew,
  Menu,
  Help,
  Notifications,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
  Dashboard,
  BarChart,
  PieChart,
  TableChart,
  Settings,
  Group,
  Build,
  Storage,
  Assignment,
  CheckBox,
  CheckBoxOutlineBlank,
  GetApp,
  Delete,
  Add,
  Remove,
  Check,
  LayersClear,
  VisibilityOff,
  NoSimOutlined,
  SaveOutlined,
  Refresh,
  Cancel,
  CloudUpload,
  FileCopyOutlined,
  HighlightOff,
} from '@material-ui/icons';

export type IconNames =
  // | 'arrow-down'
  // | 'arrow-up'
  // | 'arrow-left'
  // | 'arrow-right'
  // | 'inbox'
  // | 'menu'
  // | 'notification'
  // | 'open-tab'
  // | 'dashboard'
  // | 'bar-chart'
  // | 'pie-chart'
  // | 'table-chart'
  // | 'settings'
  // | 'help'
  // | 'group'
  // | 'tool'
  // | 'storage'
  // | 'assignment'
  // | 'checkbox'
  // | 'checkbox-blank'
  // | 'delete'
  // | 'add'
  // | 'remove'
  // | 'check'
  // | 'layers-clear'
  // | 'visibility-off'
  // | 'no-sim-outlined'
  // | 'save'
  // | 'refresh'
  // | 'cancel'
  // | 'download'
  // | 'high-light-off'
  // | 'copy'
  // | 'upload'
  'minus' | 'plus';

type IconProps = {
  name: IconNames;
  color?: string;
  fontSize?: 'inherit' | 'default' | 'small' | 'large';
};

const Icon: React.FC<IconProps> = ({ name, color = 'currentColor', fontSize = 'default' }: IconProps) => {
  const props = {
    htmlColor: color,
    fontSize: fontSize,
  };

  switch (name) {
    case 'plus':
      return <Add {...props} />;
    case 'minus':
      return <Remove {...props} />;
    // case 'arrow-down':
    //   return <KeyboardArrowDown {...props} />;
    // case 'arrow-up':
    //   return <KeyboardArrowUp {...props} />;
    // case 'arrow-left':
    //   return <KeyboardArrowLeft {...props} />;
    // case 'arrow-right':
    //   return <KeyboardArrowRight {...props} />;
    // case 'inbox':
    //   return <Inbox {...props} />;
    // case 'menu':
    //   return <Menu {...props} />;
    // case 'notification':
    //   return <Notifications {...props} />;
    // case 'open-tab':
    //   return <OpenInNew {...props} />;
    // case 'dashboard':
    //   return <Dashboard {...props} />;
    // case 'bar-chart':
    //   return <BarChart {...props} />;
    // case 'pie-chart':
    //   return <PieChart {...props} />;
    // case 'table-chart':
    //   return <TableChart {...props} />;
    // case 'settings':
    //   return <Settings {...props} />;
    // case 'help':
    //   return <Help {...props} />;
    // case 'group':
    //   return <Group {...props} />;
    // case 'tool':
    //   return <Build {...props} />;
    // case 'storage':
    //   return <Storage {...props} />;
    // case 'assignment':
    //   return <Assignment {...props} />;
    // case 'checkbox':
    //   return <CheckBox {...props} />;
    // case 'checkbox-blank':
    //   return <CheckBoxOutlineBlank {...props} />;
    // case 'download':
    //   return <GetApp {...props} />;
    // case 'upload':
    //   return <CloudUpload {...props} />;
    // case 'delete':
    //   return <Delete {...props} />;
    // case 'remove':
    //   return <HighlightOff {...props} />;
    // case 'layers-clear':
    //   return <LayersClear {...props} />;
    // case 'check':
    //   return <Check {...props} />;
    // case 'cancel':
    //   return <Cancel {...props} />;
    // case 'visibility-off':
    //   return <VisibilityOff {...props} />;
    // case 'no-sim-outlined':
    //   return <NoSimOutlined {...props} />;
    // case 'save':
    //   return <SaveOutlined {...props} />;
    // case 'refresh':
    //   return <Refresh {...props} />;
    // case 'high-light-off':
    //   return <HighlightOff {...props} />;
    // case 'copy':
    //   return <FileCopyOutlined {...props} />;
    default:
      return <Help {...props} />;
  }
};

export default Icon;
