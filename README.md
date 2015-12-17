# Usage:
```
new Chuck('string') -> Chuck Object
  methods:
    -> toString() -> converts the chuck value to the original text
    -> toBin() -> converts the chuck value to binary
    -> toChuck() -> returns the chuck value of the text

Low level API for direct convertions:
  ChuckAPI.toChuck('string') -> { bin: binary_value, chuck: unary_value }
  ChuckAPI.fromChuck('unary_value') -> { bin: binary_value, text: human_readable_text }
  
Example:
  var norris = new Chuck('Chuck Is Awesome!');
      norris.toString() = 'Chuck Is Awesome!'
      norris.toBin() = '10000111101000111010111000111101011010000010010011110011010000010000011110111110010111100111101111110110111001010100001'
      norris.toChuck() = '0 0 00 0000 0 0000 00 0 0 0 00 000 0 000 00 0 0 0 00 0 0 000 00 000 0 0000 00 0 0 0 00 0 0 00 00 0 0 0 00 00000 0 0 00 00 0 0 00 00 0 0000 00 00 0 00 00 0 0 0 00 00000 0 0 00 00000 0 0000 00 0 0 00000 00 00 0 0 00 0 0 0000 00 00 0 0000 00 0 0 000000 00 0 0 00 00 0 0 000 00 00 0 0 00 0 0 0 00 0 0 0 00 0000 0 0'
```

### Here is the encoding principle (taken from www.codingame.com):
  - The input message consists of ASCII characters (7-bit)
  - The encoded output message consists of blocks of 0
  - A block is separated from another block by a space
  - Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values):
    - First block: it is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
    - Second block: the number of 0 in this block is the number of bits in the series
