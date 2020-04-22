const driver = {};

function updateDriverWithKeyAndValue(driver, address, value) {
  const newDriver = Object.assign({}, driver, {address: value})
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver)
  // const newDriver = driver (this won't work. is destructive)
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}