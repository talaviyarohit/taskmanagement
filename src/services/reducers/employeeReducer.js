/* eslint-disable no-case-declarations */
import generateUniqueId from "generate-unique-id";
import { setData } from "../setData";
import { getData } from "../getData";

const initialState = {
    employees: getData("database"),
    employee: null,
}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            const data = {
                ...action.payload,
                id: generateUniqueId({
                    length: 4,
                    useLetters: false,
                }),
            };

            const newData = [...state.employees, data];

            setData("database", newData);

            return {
                ...state,
                employees: newData,
            };

        case "FETCH":
            let lastData = [
                ...state.employees,
            ]

            let fetchedId = lastData.find((record) => {

                return record.id == action.payload;
            })

            return {
                ...state,
                employee: fetchedId
            }

        case "UPDATE":

            const fetchedData = [
                ...state.employees,
            ]

            const updatedData = fetchedData.map((record) => {
                if (record.id == action.payload.id) {
                    return {
                        ...record,
                        ...action.payload
                    }
                }
                else {
                    return record
                }
            })

            setData("database", updatedData);

            return {
                ...state,
                employees: updatedData,
                employee: null
            }

        default:
            return state;
    }
}

export default employeeReducer;