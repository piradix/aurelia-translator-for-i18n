# aurelia-translator-for-i18n

Webpack plugin for Aurelia translator

Post insert code to translate ¤....¤ into Aurelia (https://aurelia.io) translator for i18 directive.

This plugin translate all text between two "¤" into a call of translation of i18en for aurelia (t directive ).

For exemple :

```HTML
  "<div title="¤Hello message for summer¤">¤Bonjour l'été¤<div>" 
```

 become  
 
```HTML
  "<div title="${'Hello message for summer' & t}">${'Bonjour \'été' & t }<div>"
```


## Installation

Do 
```shell
npm i -D https://github.com/piradix/aurelia-translator-for-i18n
```

In webpack config file (webpack.conf) in rules directive "module.exports.module:rules:" put
```json
            {
                "test": /\.html$/i,
                "exclude": nodeModulesDir,
                
                "loader": 'transform-loader?aurelia-translator-for-i18n',
            }
```

Now in al your HTML code (file *.hmtl) all ¤....¤ whill be transalte to ${'......' & t }

[!WARNING] Don't use ¤..¤ into a ".bind" or a ".trigger" like "title.bind" ...

