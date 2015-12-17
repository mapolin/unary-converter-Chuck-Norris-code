(function() {
    "use strict";

    function toChuckNorris(string) {
        var binary = '';
        for(var i = 0; i < string.length; i++) {
            var tmp = string.charCodeAt(i).toString(2);
            if(tmp.length < 7) tmp = '0' + tmp;

            binary += tmp;
        }

        function _toUnary(bin) {
            var prevChar='', block='', result='';

            for(var j = 0; j < bin.length; j++) {
                if(prevChar == bin[j]) {
                    block = '0';
                } else {
                    if(bin[j] == '1') {
                        block = ' 0 0';
                    } else if(bin[j] == '0') {
                        block = ' 00 0';
                    }
                }

                result += block;
                prevChar = bin[j];
            }

            return result.trim();
        }   

        return {
            bin: binary,
            chuck: _toUnary(binary)
        };
    }

    function fromChuckNorris(unary) {
        var blocks = unary.split(' ');
        var segment = '', result = '', text = '', bin = '';

        for(var i = 0; i < blocks.length; i ++) {
            if(i % 2 == 0) {
                segment = (blocks[i] == '0' ? '1' : '0');
            } else {
                for(var j = 0; j < blocks[i].length; j++) {
                    result += segment;
                }
            }

            if(result.length == 7) {
                bin += result;
                result = ''
            }
        }

        for(var i = 0; i <= result.length; i += 7) {
            text += String.fromCharCode( parseInt(result.substr(i, 7), 2) );
        }

        return {
            text: text,
            bin: bin
        };
    }

    function Chuck(text) {
        if(!text) text = '';

        var chucked = ChuckAPI.toChuck(text);
        var bin = chucked.bin;
        var unary = chucked.chuck;

        this.toString = function() {
            return ChuckAPI.fromChuck(unary).text;
        };

        this.toBin = function() {
            return bin;
        };

        this.toChuck = function() {
            return unary;
        };

        this.getChuck = function() {
            return chuck;
        };
    };

    window.Chuck = Chuck;

    window.ChuckAPI = {
        toChuck: toChuckNorris,
        fromChuck: fromChuckNorris
    };

})();
