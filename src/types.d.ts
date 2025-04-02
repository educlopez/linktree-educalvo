import 'react';

declare module 'react' {
  interface CSSProperties {
    '--duration'?: string;
    '--delay'?: string;
    '--x'?: string;
    '--y'?: string;
    '--scale'?: string;
  }
}