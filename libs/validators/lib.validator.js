const { date_formats } = require("../utils/date.format");

const validateInputs = (currentDate, yearsToBack, format) => {
    if (!currentDate) {
        return { error: `currentDate parameter is required` };
    }
    if (!yearsToBack) {
        return { error: `yearsToBack parameter is required` };
    }
    
    if (!date_formats.includes(format)) {
        return { error: `Invalid date format` };
    }
}

module.exports = validateInputs