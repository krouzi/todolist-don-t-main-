import {TodolistType} from "../App";
import {v1} from "uuid";


export type ActionType = {
    type: string
    [key: string]: any
}

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType):Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' : {
            return state.filter(t => t.id != action.id)
        }
        case'ADDED-TODOLIST' : {
            return [...state, {
                id:v1(),
                title:action.title,
                filter:'all'
            }]

        }
        case 'CHANGE-TODOLIST-TITLE' : {
            return
        }
        default:
            throw new Error("I don't understand you")
    }
}