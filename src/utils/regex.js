export const phoneRegExp = /^[6-9][0-9]{9}$/;
export const gstRegexp = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d[Z]{1}[A-Z\d]{1}$/;
export const gstNumberRegExp = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d[Z]{1}[A-Z\d]{1}$/;
export const AlphabetSpecialCharRegExp =
  /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/;
export const salaryIntRegexp = /^[\d,]+$/;
// export const urlRegExp = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/i;
// export const urlRegExp =
//    /^(?=.{4,2048}$)((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]{1,63}(\.[a-zA-Z]{1,63}){1,5}(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;
export const pincodeRegExp = /^\d{6}$/;
// export const urlRexExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
// export const urlRegExp =
//   /^(?=.{4,2048}$)((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]{1,63}(\.[a-zA-Z]{1,63}){1,5}(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;
export const urlRegExp =
  /((www\.|(http|https|ftp|news|file):\/\/)?[a-zA-Z0-9\-]+\.[a-zA-Z0-9\/_:@=.+?,%&~\-!]+[^.|'#()? ><;,]+)$/;

export const integerRegExp =
  /^[a-zA-Z0-9\s~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?\/]+$/;
export const alphabetsRegExp = /^[a-zA-Z\s]+$/;
export const otpRegExp = /^[0-9]+$/;
export const firstNameRegExp = /^[A-Za-z\s]+$/;
export const cityRegExp = /^[A-Za-z\s]+$/;
export const companyRegExp = /^[A-Za-z\s]+$/;
export const commonRegExp = /^[A-Za-z\s]+$/;
export const letterSpaceHyphenUnderscoreRegex = /^[A-Za-z\s\-_]+$/;
export const jobDescriptionRegExp = /^[A-Za-z0-9 ]+$/;
export const jobTitleRegExp = /^[a-zA-Z0-9 ]+$/;
export const projectDescriptionsRegExp =
  /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s]+$/;
export const profileheadlineRegExp = /^[a-zA-Z0-9\s]+$/;
export const alphanumericRegExp = /^[a-zA-Z0-9\s]+$/;
export const alphabetnumRegExp = /^[a-zA-Z0-9\s]+$/;
export const slugRegExp =
  /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
