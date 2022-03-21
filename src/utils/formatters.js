export function cardNumberFormatter(value) {
  return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').substring(0, 19)
}

export function expirationDateFormatter(value) {
  return value.replace(
    /[^0-9]/g, '' 
  ).replace(
    /^([2-9])$/g, '0$1' 
  ).replace(
    /^(1{1})([3-9]{1})$/g, '0$1/$2' 
  ).replace(
    /^0{1,}/g, '0' 
  ).replace(
    /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2'
  );
}

export function deleteSpaces(value) {
  return value.replace(/\s/g, '')
}

export function replaceNumbers(str) {
  return str.replace(/./gm, '*').slice(4) + str.slice(-4)
};