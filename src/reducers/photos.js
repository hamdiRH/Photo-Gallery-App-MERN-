const photosReducer = (state = {photos:[],loading:false}, action) => {
    switch (action.type) {
      case 'LOADING':
      return {...state,loading:true}
      case 'LOAD_PHOTOS':
        return {photos:action.photos,loading:false};
      default:
        return state;
    }
  };
  
  export default photosReducer;