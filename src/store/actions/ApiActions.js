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

export const searchProducts = () => {
  return (dispatch, getState) => {
    //
    const { apiReducer } = getState();

    const {
      selectedCategoryName = null,
      chooseGender = null,
      searchInput = null
    } = apiReducer;

    // wait for state to have category info then make call
    if (selectedCategoryName) {
      axios
        .get(
          `https://api.asos.com/product/search/v1/?q=${selectedCategoryName}+${chooseGender}${searchInput}&store=1&lang=en-GB&sizeschema=EU&currency=EUR&sort=freshness&channel=mobile-app&offset=0&limit=50`
        )
        .then(res => {
          const results = res.data.products;
          dispatch(setResultstoState(results));
          console.log(res);
        })
        .catch(error => {
          // handle error
          // dispatch error action
          console.log(error);
        });
    }
  };
};

const setResultstoState = results => ({
  type: 'API_RESULTS',
  payload: results
});
