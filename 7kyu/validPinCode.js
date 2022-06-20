// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.




function validatePIN (pin) {
  return pin.match(/^[0-9]+$/) != null && pin.length === 4 || pin.match(/^[0-9]+$/) != null && pin.length === 6
}