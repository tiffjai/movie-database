const initialState = {
    movies: [],
    selectedMovie: null,
    favorites: [],
    loading: false,
    error: null
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES_REQUEST':
      case 'FETCH_MOVIE_DETAILS_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_MOVIES_SUCCESS':
        return { ...state, loading: false, movies: action.payload };
      case 'FETCH_MOVIE_DETAILS_SUCCESS':
        return { ...state, loading: false, selectedMovie: action.payload };
      case 'FETCH_MOVIES_FAILURE':
      case 'FETCH_MOVIE_DETAILS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'ADD_TO_FAVORITES':
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  