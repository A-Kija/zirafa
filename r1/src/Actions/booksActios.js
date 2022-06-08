import { filter_more_13, get_from_server, reload, show_all, sort_by_default, sort_by_name } from "../Constants/books"

export function sortByName() {
    return {
        type: sort_by_name
    }
}

export function sortByDefault() {
    return {
        type: sort_by_default
    }
}

export function filterMore13() {
    return {
        type: filter_more_13
    }
}

export function showAll() {
    return {
        type: show_all
    }
}

export function reloadAction() {
    return {
        type: reload
    }
}

export function getFromServer(books) {
    return {
        type: get_from_server,
        payload: books
    }
}