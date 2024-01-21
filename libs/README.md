# Introduction

A versatile JavaScript library for simplified historical date. "back-in-time" provides an intuitive module that allows developers to effortlessly retrieve past dates from previous years and obtain them in an array with customizable formatting.

## Key Features:

****- Date Generation:**** Easily generate past dates by specifying the number of years ago.

****-Custom Formatting:**** Format the output dates according to your application's requirements.

****-Date Array:**** Retrieve dates in an array, enabling efficient batch processing.

****-Lightweight:**** Keep your project dependencies minimal with a lightweight and efficient utility.


### About Package ?

```javascript
backInTime(currentDate, yearsToBack, dateFormat);
```

# Installation

```javascript
npm install back-in-time
```

## Parameters

| Name         | Type     | Default        | Description             |
|--------------|----------|----------------|-------------------------|
| currentDate  | String   | -              | `currentDate` paramete is **required**, this parameter will ensure that from which date you want to reverse to |
| yearsToBack  | String   | -              | `yearsToBack` paramete is **required**, this parameter will behave like end date where you want to stop |
| dateFormat   | String   | YYYY-MM-DD     | `dateFormat` paramete is ***Optional***, with the help of this parameter you can decide you date fromat when you get output |


# Usage

```javascript
const { backInTime } = require("back-in-time");

const dates = backInTime("2024-01-01", "2022-01-01");
console.log(dates)
```

### Expected Output

```javascript
[
  '2022-01-01', '2022-02-01',
  '2022-03-01', '2022-04-01',
  '2022-05-01', '2022-06-01',
  '2022-07-01', '2022-08-01',
  '2022-09-01', '2022-10-01',
  '2022-11-01', '2022-12-01',
  '2023-01-01', '2023-02-01',
  '2023-03-01', '2023-04-01',
  '2023-05-01', '2023-06-01',
  '2023-07-01', '2023-08-01',
  '2023-09-01', '2023-10-01',
  '2023-11-01', '2023-12-01',
  '2024-01-01'
]
```

## Supported Date Formats

| Format Code   | Date            |
|---------------|------------------------|
| MMMM Do YYYY  | January 21st 2024      |
| YYYY/MM/DD          | 2024/01/21       |
| D MMM, YYYY         | 21 Jan, 2024    |
| dddd, MMMM Do YYYY  | Sunday, January 21st 2024   |
| ddd, MMM D YYYY     | Sun, Jan 21 2024       |
| MMMM D, YYYY        | January 21, 2024       |
| ddd, MMMM D YYYY    | Sun, January 21 2024   |
| YYYY-MM-DD          | 2024-01-21     |
