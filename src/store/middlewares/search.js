export const searchLowerCase = store => next => action => {
    if (action.type === 'search/toggleSearchText') {
        action.payload = action.payload.toLowerCase()
    }
    return next(action)
}

export const ignoreSpaceInSearch = store => next => action => {
    if(action.type === 'search/toggleSearchText' && action.payload.at(-1) === ' ') {
      return
    }
    return next(action)
}