# Notes on How I Managed to Get PreTeXt to work

## Python Version
3.12.3

## PreTeXt Version
2.40.2

## MiKTeX version
2.9

## Ghostscript version
9.14

## stuff added to PATH system variable
- C:\Program Files\gs\gs9.14\bin
- C:\Strawberry\c\bin
- C:\Strawberry\perl\site\bin
- C:\Strawberry\perl\bin
- C:\Users\Travis\AppData\Local\Programs\Python\Python312
- C:\Users\Travis\AppData\Local\Programs\Python\Python312\Scripts

## Misc
- the LaTeX pakage *colortbl* needed installation

# Tips for using VS Code with pretext-tools extension

### Converting LaTeX to PreTeXt
- Ctrl+Shift+P then type "convert"
- <md> blocks can go inside of <p> blocks and should whenever it is natural
- Find and replace "em>" with "term>"
- You can clean up indentation with <Right-click>,"Format document with...",Pretext-tools 