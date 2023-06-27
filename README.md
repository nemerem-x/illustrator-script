# Adobe Illustrator Theme Generator
Theme Generator Script

* [Download Illustrator Script (JSX)](https://drive.google.com/file/d/1FE0piYbTzXX0FmxWMM-ixLbKBoL5PuXv/view?usp=sharing).

## Prerequisites
Install Node.js and TypeScript and git.

## Project Setup

### Clone Project 
```
git clone https://github.com/nemerem-x/illustrator-script.git
```

### Change directory to project
```
cd illustrator-script
```

### Install dependencies
```
npm install
```
or

### install types-for-adobe
```
npm init -y
```
```
npm i types-for-adobe
```

## VScode Setup

### install VScode and Extensions
```
$ Adobe Script Runner.
$ ExtendSript Debugger.
$ ExtendScript. (This third extension will ensure syntax highlighting and that you don't get unnecessary errors when running a .jsx file.)

```

## Config and Run Script
```
create tsconfig.json
Add: '{"compilerOptions":{"module":"none","strict": true, "noLib":true}}'

# compile typescript files
`Ctrl + Shift + B` and select `tsc build - illustrator-script/tsconfig.json` to compile tsc to js

#Run JS
hit `F5` when in js file to run

```
### NOTE: ###
1. The .js extension build can be changed to .jsx
2. Add the following at the top of the .jsx file:
#target illustrator
#targetengine main
3. Copy .jsx to Illustrator scripts folder
4. Enjoy!!!

# References
## Illustrator Scripting Guide
* [Illustrator Scripting Guide](https://pages.github.com/](https://ai-scripting.docsforadobe.dev/jsobjref/PathItems.html)https://ai-scripting.docsforadobe.dev/jsobjref/PathItems.html).
* [JavaScript Tools Guide](https://pages.github.com/](https://ai-scripting.docsforadobe.dev/jsobjref/PathItems.html)https://ai-scripting.docsforadobe.dev/jsobjref/PathItems.html](https://extendscript.docsforadobe.dev/interapplication-communication/bridgetalk-message-object.html)https://extendscript.docsforadobe.dev/interapplication-communication/bridgetalk-message-object.html).