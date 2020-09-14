var through = require('through2');

function aureliaTranslatorForI18n(resource) {
	return through(
        (buffer, encoding, callback) =>{
            let s = buffer.toString();
            s=s.replace(
				/¤([^¤]+)¤/g, 
				function(s, s1){
					return "${'" + s1.replace(/\\/g,"\\\\").replace(/'/g,"\\\\'") + "' & t}"; 
				}
			);
    		callback(null, s);
    	}
    );
};

aureliaTranslatorForI18n.configure = function(options) {
    return function(file) {
        return aureliaTranslatorForI18n(file, options);
    };
};

module.exports = aureliaTranslatorForI18n;
