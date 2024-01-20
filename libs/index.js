
const moment = require("moment/moment");
const validateInputs = require("./validators/lib.validator");

const backInTime = (currentDate, yearsToBack, dateFormat = "YYYY-MM-DD") => {
  
  const validationError = validateInputs(currentDate, yearsToBack, dateFormat);
  if (validationError) {
    console.error(validationError.error)
    return false;
  }
  const yearMonth = moment(currentDate).format("YYYYMM");
  const backYears = moment(yearsToBack).format("YYYYMM");
  
  if (yearMonth >= backYears) {
    const date = moment(currentDate).format("YYYY-MM-DD")
    let subtractedDate = moment(currentDate).subtract(1, "month").format(dateFormat)
    
    backInTime(subtractedDate, backYears);
    
    return date;
  }
};

backInTime("2024-01-01", "2022-01-01")

module.exports = { backInTime }