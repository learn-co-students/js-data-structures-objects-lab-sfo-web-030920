// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver, key, value){
let new_driver = {...driver}
new_driver[key] = value;
return new_driver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    let new_driver = {...driver}
    delete new_driver[key]
    return new_driver

}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}