type Ratio = 'logo' | '1x1' | '3x2' | '4x3' | '3x4' | '16x9' | '205x37';

type FontWeightStyle = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

type TextStyle =
  | 'uppercase'
  | 'capitalize'
  | 'underline'
  | 'italic'
  | 'center'
  | 'justify'
  | 'normal'
  | 'right'
  | 'left';

type TextSize = '9x12';

type ColorStyle = 'white' | 'black';

type LetterSpacing = 'ls-md' | 'ls-lg';

type GeneralTextStyle = ColorStyle | FontWeightStyle | TextStyle | LetterSpacing | TextSize;
