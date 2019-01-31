import axios from 'axios';
// navigation off screen or component
// two other parts of this are at:
// the import and on index.js
import * as NavigationService from '../../navigation/NavigationService';
import get from 'lodash.get';

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

export const chooseNameCategory = description => ({
  type: 'CHOOSE_CATEGORY',
  payload: description
});

export const chooseBrandName = name => ({
  type: 'CHOOSE_BRAND',
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
      selectBrandName = null,
      apiOffset = 0
    } = apiReducer;

    // wait for state to have category or search info then make call
    if (selectedCategoryName || searchInput || chooseBrandName) {
      axios
        .get(
          `https://api.asos.com/product/search/v1/?q=${searchInput}${selectedCategoryName}${selectBrandName}+${chooseGender}&store=1&lang=en-GB&sizeschema=EU&currency=EUR&sort=freshness&channel=mobile-app&offset=${apiOffset}&limit=50`
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
  return dispatch => {
    //
    axios
      .get(
        `https://api.asos.com/product/catalogue/v2/products/${id}?store=COM&lang=en-GB&sizeSchema=EU&currency=EUR`
      )
      .then(res => {
        const results = res.data;
        dispatch(setResultToState(results));
      })
      .then(() => {
        NavigationService.push('Product');
      })
      .catch(error => {
        // handle error
        // dispatch error action
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

export const clearStateApiResult = () => ({
  type: 'CLEAR_STATE_API_RESULT'
});

export const getSimilar = () => {
  return (dispatch, getState) => {
    //
    const { apiReducer } = getState();

    const associatedProductGroups = get(
      apiReducer,
      'apiResult.associatedProductGroups',
      null
    );

    let itemURL = null;
    if (associatedProductGroups) {
      associatedProductGroups.map(item => {
        itemURL = item.url;

        axios
          .get(`https://${itemURL}`)
          .then(res => {
            const results = res.data.products;
            results.map(product => {
              let item = product.product;
              dispatch(setItemsToState(item));
            });
          })
          .catch(error => {
            // handle error
            // dispatch error action
          });
      });
    }
  };
};

export const setItemsToState = results => ({
  type: 'SIMILAR_ITEMS',
  payload: results
});

export const clearStateSimilarItems = () => ({
  type: 'CLEAR_STATE_SIMILAR_ITEMS'
});

export const clearBrands = () => ({
  type: 'CLEAR_BRANDS'
});

export const addToCart = (
  id,
  image = null,
  name = null,
  size = null,
  price = null,
  qty = null
) => ({
  type: 'ADD_TO_CART',
  payload: {
    id,
    image,
    name,
    size,
    price,
    qty
  }
});

export const deleteCartItem = (id) => ({
  type: 'DELETE_CART_ITEM',
  payload: id
})