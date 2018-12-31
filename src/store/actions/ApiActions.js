import axios from 'axios';

// @ @ @

// API ACTIONS

// @ @ @

export const searchInput = data => ({
  type: 'SEARCH_INPUT',
  payload: data
});

export const chooseGenderCategory = id => ({
  type: 'CHOOSE_GENDER',
  payload: id
});

export const chooseNameCategory = name => ({
  type: 'CHOOSE_CATEGORY',
  payload: name
});

export const setOffset = offset => ({
  type: 'UPDATE_OFFSET',
  payload: offset
});

export const searchProducts = () => {
  return (dispatch, getState) => {
    //
    const { apiReducer } = getState();

    const {
      selectedCategoryName = null,
      chooseGender = null,
      searchInput = null,
      apiOffset = 0
    } = apiReducer;

    // wait for state to have category or search info then make call
    if (selectedCategoryName || searchInput) {
      axios
        .get(
          `https://api.asos.com/product/search/v1/?q=${searchInput}${selectedCategoryName}+${chooseGender}&store=1&lang=en-GB&sizeschema=EU&currency=EUR&sort=freshness&channel=mobile-app&offset=${apiOffset}&limit=50`
        )
        .then(res => {
          const results = res.data.products;
          dispatch(setResultstoState(results));
        })
        .catch(error => {
          // handle error
          // dispatch error action
        });
    }
  };
};

export const setResultstoState = results => ({
  type: 'API_RESULTS',
  payload: results
});

export const searchProduct = id => {
  return (dispatch, getState) => {
    //
    axios
      .get(
        `https://api.asos.com/product/catalogue/v2/products/${id}?store=COM&lang=en-GB&sizeSchema=EU&currency=EUR`
      )
      .then(res => {
        const results = res.data;
        dispatch(setResultToState(results));
        console.log(res);
      })
      .catch(error => {
        // handle error
        // dispatch error action
        console.log(error);
      });
  };
};

export const setResultToState = results => ({
  type: 'API_RESULT',
  payload: results
});

export const clearStateInput = () => ({
  type: 'CLEAR_STATE_INPUT'
});

export const clearStateCategory = () => ({
  type: 'CLEAR_STATE_CATEGORY'
});

export const clearStateOffset = () => ({
  type: 'CLEAR_STATE_OFFSET'
});

export const clearStateApiResults = () => ({
  type: 'CLEAR_STATE_API_RESULTS'
});
