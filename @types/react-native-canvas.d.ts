declare module 'react-native-canvas' {
    import { Component, RefObject } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';
  
    export interface CanvasProps {
      ref?: RefObject<Canvas>;
      style?: StyleProp<ViewStyle>;
      onContext2D?: (context: any) => void;
      onCanvasCreate?: (canvas: Canvas) => void;
    }
  
    export default class Canvas extends Component<CanvasProps> {
      getContext(contextId: '2d'): CanvasRenderingContext2D | null;
      toDataURL(type?: string): Promise<string>;
      width: number;
      height: number;
    }
  
    export class Image {
      constructor(canvas: Canvas);
      src: string;
      width: number;   // Add width property
      height: number;  // Add height property
      addEventListener(event: 'load', listener: () => void): void;
    }
  
    export interface CanvasRenderingContext2D {
      drawImage(image: Image, dx: number, dy: number, dWidth?: number, dHeight?: number): void;
      fillText(text: string, x: number, y: number, maxWidth?: number): void;
      font: string;
      fillStyle: string | CanvasGradient | CanvasPattern;
    }
  }
  