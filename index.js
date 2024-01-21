
const moment = require("moment");
const validateInputs = require("./libs/validators/lib.validator");

const backInTime = (currentDate, yearsToBack, dateFormat = "YYYY-MM-DD") => {

  const validationError = validateInputs(currentDate, yearsToBack, dateFormat);
  if (validationError) {
    return validationError.error;
  }
  const yearMonth = moment(currentDate).format("YYYYMM");
  const backYears = moment(yearsToBack).format("YYYYMM");
  
  if (yearMonth >= backYears) {
    const date = moment(currentDate).format(dateFormat)
    let subtractedDate = moment(currentDate).subtract(1, "month").format(dateFormat)
    
    const result = backInTime(subtractedDate, backYears);
    result.push(date);

    return result
  } else {
    return [];
  }
};
module.exports = { backInTime }