export const addEmployee = (data) => {
    return {
        type: "ADD",
        payload: data
    }
}

export const fetchEmployee = (id) => {
    return {
        type: "FETCH",
        payload: id
    }
}

export const updateEmployee = (record) => {
    return {
        type: "UPDATE",
        payload: record
    }
}