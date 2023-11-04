declare module 'react-native-ico-software-development' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'nginx' |
      'raspberry-pi' |
      'java' |
      'docker' |
      'python' |
      'react' |
      'haskell' |
      'lisp' |
      'common-lisp' |
      'github' |
      'scratch' |
      'postscript' |
      'visual-basic' |
      'delphi' |
      'ruby' |
      'c-1' |
      'composer' |
      'c' |
      'go-lang' |
      'gnu-bash' |
      'mysql' |
      'swiftify' |
      'scala' |
      'swift' |
      'typescript' |
      'sass' |
      'php' |
      'webhook' |
      'javascript' |
      'html-5' |
      'css' |
      'nodejs';

    type iconColors = '#004284' |
      '#00579E' |
      '#0069CB' |
      '#006BC0' |
      '#0078CF' |
      '#0084C6' |
      '#0096DC' |
      '#0097D9' |
      '#009B00' |
      '#12ADF6' |
      '#194066' |
      '#1A1A1A' |
      '#209CDC' |
      '#222123' |
      '#264D6F' |
      '#2D3A3E' |
      '#2E2E2E' |
      '#31B644' |
      '#333333' |
      '#376DB7' |
      '#3876AC' |
      '#3B8739' |
      '#3C66B4' |
      '#3F4A43' |
      '#453963' |
      '#4A4A4A' |
      '#4E2E8B' |
      '#5155AA' |
      '#5181A2' |
      '#547BC4' |
      '#55A344' |
      '#572E94' |
      '#575DAF' |
      '#5ADAFD' |
      '#5C5560' |
      '#5C55A9' |
      '#5E4E88' |
      '#63401E' |
      '#6399D4' |
      '#639D57' |
      '#66A060' |
      '#69C0F1' |
      '#6DA75D' |
      '#718882' |
      '#7F8B9A' |
      '#81091A' |
      '#81C756' |
      '#885630' |
      '#8F9ED1' |
      '#904C8C' |
      '#950C10' |
      '#9B0A0E' |
      '#A8B9CC' |
      '#C18F69' |
      '#C93762' |
      '#CB1948' |
      '#CD6699' |
      '#D1E3B4' |
      '#D2E4B5' |
      '#DE0A17' |
      '#DF352E' |
      '#E4BA42' |
      '#E64C18' |
      '#ED232E' |
      '#EF0E13' |
      '#EF1616' |
      '#F2F2F2' |
      '#F36518' |
      '#F5655E' |
      '#F7CD00' |
      '#F9F9F9' |
      '#FDA22F' |
      '#FDFDFD' |
      '#FE4216' |
      '#FEB903' |
      '#FF7411' |
      '#FFA600' |
      '#FFFFFF';

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
