// Any Helper you'll use in App

import { moderateScale } from "./Scalling";

export const reducer = (acc, cv) => acc + cv;

export const fixedNumber = (number) => {
  if (Number.isInteger(number)) {
    return number;
  } else {
    let lengthDecimalPart =
      number.toString().length - (number.toString().indexOf(".") + 1);

    let ReturnedValue = lengthDecimalPart > 1 ? 2 : 1;
    return number.toFixed(ReturnedValue);
  }
};

export function objectIsEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export const hitSlop = (value) => ({
  right: moderateScale(value),
  left: moderateScale(value),
  top: moderateScale(value),
  bottom: moderateScale(value),
});
