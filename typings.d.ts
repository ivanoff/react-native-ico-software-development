declare module 'react-native-ico-software-development' {
    import { ReactNode } from 'react';

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

    interface IconProps {
      name: iconNames;
      color: string;
      size: number;
    }

    const Icon: (props: IconProps) => ReactNode;

    export { iconNames };
    export default Icon;
}

