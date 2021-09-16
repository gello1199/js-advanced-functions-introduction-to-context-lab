// Your code here

// let twoRows = [
//     ["moe", "sizlak", "barkeep", 2],
//     ["bartholomew", "simpson", "scamp", 3]
//   ]

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
    return array.map(arr => {
        // debugger 
        return createEmployeeRecord(arr)
        })
}

function createTimeInEvent(record, date) {
     let [fullDate, hour] = date.split(" ")

    record.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: fullDate,
        
    })
    return record
}

function createTimeOutEvent(record, date) {
    let [fullDate, hour] = date.split(" ")

    record.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: fullDate,
    })
    return record
}

// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
// updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
// updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")

function hoursWorkedOnDate(record, date) {
    let timeIn = record.timeInEvents.find(time => {
        return time.date === date;
    })
    let timeOut = record.timeOutEvents.find(time => {
        return time.date === date;
    })
    return (timeOut.hour - timeIn.hour) / 100
    // debugger
}

function wagesEarnedOnDate(record, date) {
    let hoursWorked = hoursWorkedOnDate(record, date)
    let payRate = record.payPerHour

    return hoursWorked * payRate
}

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
        // Earns 324
        updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
        updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
        // Earns 54
        updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
        updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
        // 324 + 54

function allWagesFor(record) {
    // grab all dates that employee worked
    let timeWorked = record.timeInEvents.map(time => time.date)
    let timeReduce = timeWorked.reduce(function(accumulator, date) {
       return accumulator + wagesEarnedOnDate(record, date)
    }, 0)
    // debugger
    // take all dates and total wages earned on those dates
    return timeReduce
}

function findEmployeeByFirstName(array, firstName) {
    let findEmployee = array.find(name => {
        return name.firstName === firstName
    })
    return findEmployee
}

function calculatePayroll(record) {
    let timeReducer = record.reduce(function(accumulator, record) {
       return accumulator + allWagesFor(record)
    }, 0)
    // debugger
    return timeReducer

}