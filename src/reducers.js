const initialState = {
  todos: []
};

function rootReducer(store = initialState, action) {
  const storeCopy = JSON.parse(JSON.stringify(store))
  switch(action.type){
    case 'ADD':
      if(storeCopy){
        console.log("storeCopy", storeCopy)
        storeCopy.todos.push(action.payload)
      }
      return storeCopy
    default:
      return storeCopy
  }
}

export default rootReducer;
