const initialState = {
  todos: []
};

function rootReducer(store = initialState, action) {
  let storeCopy = JSON.parse(JSON.stringify(store))
  switch(action.type){
    case 'ADD':
      if(storeCopy){
        console.log("storeCopy", storeCopy)
        storeCopy.todos.push(action.payload)
      }
      return storeCopy
    case 'DELETE':
        const deleteTask = storeCopy.todos.filter((element,index) => {
          return index !== action.payload;
        })
        storeCopy.todos = deleteTask;
    default:
      return storeCopy
  }
}

export default rootReducer;
