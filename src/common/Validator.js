// Any Common Validation Here

import i18n from "@locale";

export const GetCardType = (number) => {
  // visa
  var re = new RegExp("^4");
  if (number.match(re) != null) return "Visa";

  // Mastercard
  re = new RegExp("^5[1-5]");
  if (number.match(re) != null) return "Mastercard";

  // AMEX
  re = new RegExp("^3[47]");
  if (number.match(re) != null) return "AMEX";

  // Discover
  re = new RegExp(
    "^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"
  );
  if (number.match(re) != null) return "Discover";

  // Diners
  re = new RegExp("^36");
  if (number.match(re) != null) return "Diners";

  // Diners - Carte Blanche
  re = new RegExp("^30[0-5]");
  if (number.match(re) != null) return "Diners - Carte Blanche";

  // JCB
  re = new RegExp("^35(2[89]|[3-8][0-9])");
  if (number.match(re) != null) return "JCB";

  // Visa Electron
  re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
  if (number.match(re) != null) return "Visa Electron";

  return "";
};

export const validateEmail = (email) => {
  let mailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return !mailReg.test(String(email).toLowerCase())
    ? i18n.t("validate.emailError")
    : null;
};

export const ValidateComplain = (email, message, Subjecttext) => {
  let EmailValidate = validateEmail(email);
  let addressErr =
    message?.length == 0 || !message ? i18n.t("topictitle") : null;
  let Subjecttextrr =
    Subjecttext?.length == 0 || !Subjecttext ? i18n.t("Subjecttext") : null;
  return EmailValidate || addressErr || Subjecttextrr;
};
export const isPaymentCard = (value) => {
  let MastercardNo = /^(?:5[1-5][0-9]{14})$/,
    Visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

  if (value.match(MastercardNo)) {
    return "master";
  } else if (value.match(Visa)) {
    return "visa";
  } else {
    return "Not Accepted";
  }
};

export const validatePhone = (phone) => {
  if (phone.length == 0) {
    return i18n.t("validate.enterCorrectPhone");
  } else if (phone.length < 9) {
    return i18n.t("PhoneLength");
  } else {
    return null;
  }
};

export const validateCode = (code) => {
  // console.log("code, correctCode", code, correctCode);
  if (code.length !== 4) {
    return i18n.t("validate.enterCorrectCode");
  }
  // else if (`${code}` !== `${correctCode}`) {
  //   return i18n.t("validate.codeNotCorrect");
  // }
  else {
    return null;
  }
};

export const validateDateAndTime = ({ date, time }) => {
  if (date.length == 0) {
    return i18n.t("validate.selectDate");
  } else if (time.length == 0) {
    return i18n.t("validate.selectTime");
  } else {
    return null;
  }
};

export const validateLogin = (phone, password) => {
  if (phone.length == 0) return i18n.t("validate.enterPhone");
  else if (phone.length <= 9) return i18n.t("PhoneLength");
  else if (password.length == 0) return i18n.t("validate.enterPassword");
  else if (password.length < 6) return i18n.t("PasswordLength");
  else if (phone.length > 0 && password.length > 0) return null;
};

export const validateRegisterInputs = (inputs) => {
  const {
    name,
    phone,
    email,
    country_id,
    city_id,
    country_code,
    lat,
    lng,
    password,
    confirmPassword,
  } = inputs;
  if (
    name.length > 0 &&
    phone.length > 0 &&
    country_code &&
    email.length > 0 &&
    validateEmail(email) == null &&
    country_id &&
    city_id &&
    lat &&
    lng &&
    password &&
    confirmPassword
  ) {
    return false;
  } else {
    return true;
  }
};

export const validateConfirmPassword = (inputs) => {
  const { password, confirmPassword } = inputs;
  if (password.length == 0)
    if (password == confirmPassword) {
      return null;
    } else {
      return i18n.t("validate.passwordNotMatch");
    }
};

export const validateEditPassword = (inputs) => {
  const { password, confirmPassword, newPassword } = inputs;
  if (password.length > 0 && newPassword == confirmPassword) {
    return null;
  } else if (password.length == 0) {
    return i18n.t("validate.enterCurrentPassword");
  } else if (confirmPassword != newPassword) {
    return i18n.t("validate.passwordNotMatch");
  } else return null;
};

export const validatePayment = (inputs) => {
  const { name, bank_name, account_num, amount, transfer_image } = inputs;
  if (name.length > 0) {
    return null;
  } else if (bank_name.length > 0) {
    return null;
  } else if (account_num.length > 0) {
    return null;
  } else if (amount.length > 0) {
    return null;
  } else if (transfer_image.length > 0) {
    return null;
  } else {
    return i18n.t("validate.allInputRequired");
  }
};

export const validateResetPassword = (inputs) => {
  const { password, confirmPassword, code } = inputs;
  if (code.length == 0 || code.length < 4) {
    return i18n.t("validate.enterCvc");
  }
  if (password == confirmPassword) {
    return null;
  } else {
    return i18n.t("validate.passwordNotMatch");
  }
};

export const validateUpdatePassword = (inputs) => {
  const { new_password, password, old_password } = inputs;
  if (old_password.length == 0) {
    return i18n.t("validate.enterCurrentPassword");
  } else if (password != new_password) {
    return i18n.t("validate.passwordNotMatch");
  } else {
    return false;
  }
};

export const validateUpdateProfile = (inputs) => {
  let error = {};
  const { phone, email, name, country_id, city_id } = inputs;
  let emailError = validateEmail(email);
  if (emailError) {
    error.emailError = emailError;
  }
  if (phone.length == 0) {
    error.phoneError = i18n.t("validate.enterCorrectPhone");
  }
  if (country_id.length == 0) {
    error.countryError = i18n.t("validate.countryError");
  }
  if (city_id.length == 0) {
    error.cityError = i18n.t("validate.cityError");
  }
  if (name.length == 0) {
    error.nameError = i18n.t("validate.enterYourName");
  }
  return error;
};

export const validateName = (name) =>
  name.length == 0
    ? i18n.t("nameErr")
    : name.length < 2
    ? i18n.t("nameLength")
    : null;

export const validatePassword = (Password) =>
  Password === ""
    ? i18n.t("PasswordErr")
    : Password?.length < 6
    ? i18n.t("PasswordLength")
    : null;

export const validateTwoPasswords = (password, confirmPassword) => {
  return confirmPassword == ""
    ? i18n.t("ConfirmPasswordErr")
    : password != confirmPassword
    ? i18n.t("validate.passwordNotMatch")
    : null;
};

export const validateAddress = (Address) =>
  Address === "" ? i18n.t("AddrressErr") : null;

export const validateCity = (City) => (City === "" ? i18n.t("CityErr") : null);

export const VaildateResetPassword = (inputes) => {
  let { code, password, confirmPassword } = inputes;
  let CodeErr = validateCode(code);
  let PasswordValidate = validatePassword(password);
  let ConfirmPasswordValidate = validateTwoPasswords(password, confirmPassword);

  return CodeErr || PasswordValidate || ConfirmPasswordValidate;
};

export const VaildateRegisterUser = ({
  name,
  phone,
  email,
  city_id,
  address,
  password,
  confirmPassword,
}) => {
  let NameValidate = validateName(name);
  let PhoneValidate = validatePhone(phone);
  let emailValidate = validateEmail(email);
  let CityValidate = validateCity(city_id);
  let AddressValidate = validateAddress(address);
  let PasswordValidate = validatePassword(password);
  let ConfirmPasswordValidate = validateTwoPasswords(password, confirmPassword);

  return (
    NameValidate ||
    PhoneValidate ||
    emailValidate ||
    CityValidate ||
    AddressValidate ||
    PasswordValidate ||
    ConfirmPasswordValidate
  );
};

export const VaildateRegisterProvider = ({
  name,
  phone,
  email,
  category_id,
  restaurant_name_ar,
  restaurant_name_en,
  cities,
  address,
  password,
  confirmPassword,
}) => {
  let NameValidate = validateName(name);
  let PhoneValidate = validatePhone(phone);
  let EmailValidate = validateEmail(email);
  let category_idValidate = category_id == "" ? i18n.t("DepValidate") : null;
  let storArErr = restaurant_name_ar == "" ? i18n.t("storeArValidate") : null;
  let storEnErr = restaurant_name_en == "" ? i18n.t("storeEnValidate") : null;
  let CityValidate = cities?.length == 0 ? i18n.t("CityErr") : null;
  let AddressValidate = validateAddress(address);
  let PasswordValidate = validatePassword(password);
  let ConfirmPasswordValidate = validateTwoPasswords(password, confirmPassword);

  return (
    NameValidate ||
    PhoneValidate ||
    EmailValidate ||
    CityValidate ||
    AddressValidate ||
    category_idValidate ||
    storArErr ||
    storEnErr ||
    PasswordValidate ||
    ConfirmPasswordValidate
  );
};

export const VaildateRegisterDelgate = ({
  name,
  phone,
  email,
  city_id,
  address,
  password,
  confirmPassword,
}) => {
  let NameValidate = validateName(name);
  let PhoneValidate = validatePhone(phone);
  let EmailValidate = validateEmail(email);
  let CityValidate = validateCity(city_id);
  let AddressValidate = validateAddress(address);
  let PasswordValidate = validatePassword(password);
  let ConfirmPasswordValidate = validateTwoPasswords(password, confirmPassword);

  return (
    NameValidate ||
    PhoneValidate ||
    CityValidate ||
    AddressValidate ||
    EmailValidate ||
    PasswordValidate ||
    ConfirmPasswordValidate
  );
};

export const validateChangePassword = (
  Password,
  newPassword,
  confirmPassword
) => {
  let err =
    Password.length == 0
      ? i18n.t("validate.enterCurrentPassword")
      : Password?.length < 6
      ? i18n.t("PasswordLength")
      : newPassword.length == 0
      ? i18n.t("enternewPassword")
      : newPassword?.length < 6
      ? i18n.t("PasswordLength")
      : confirmPassword.length == 0
      ? i18n.t("enterconfirmNewPass")
      : confirmPassword != newPassword
      ? i18n.t("validate.passwordNotMatch")
      : null;
  return err;
};

export const ValidateAddProduct = (input) => {
  let err =
    input.ProductAr == "" || input.ProductAr.length < 2
      ? i18n.t("ProdenameArErr")
      : input.ProductEn == "" || input.ProductEn.length < 2
      ? i18n.t("ProdnameEnErr")
      : input?.license?.length == 0
      ? i18n.t("ProdPiceErr")
      : input.Availablenumber == ""
      ? i18n.t("EnteravailableQuantity")
      : input.ProductPrice == ""
      ? i18n.t("ProdPricErr")
      : input.productspecification == ""
      ? i18n.t("ProductDescAr")
      : input.ProductDescEn == ""
      ? i18n.t("ProductDescEn")
      : null;
  return err;
};
