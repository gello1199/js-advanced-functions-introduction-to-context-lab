// Your code here

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord)
}

function createTimeInEvent(record, date) {
    
    record.timeInEvents.push({
        type: "TimeIn",
        
    })
    return record
}

function createTimeOutEvent(record, date) {
    record.timeOutEvents.push({
        type: "TimeOut",
    })
    return record
}

// function hoursWorkedOnDate(record, date) {

// }

// function wagesEarnedOnDate(record, date) {

// }

// function allWagesFor(record) {

// }

// function findEmployeeByFirstName(array, firstName) {

// }

// function calculatePayroll(array) {

// }