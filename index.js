let annotationParser = require('./useJison/use-parser');
function parse(shortText) {
    return annotationParser.parse(shortText);
}
module.exports = parse;
