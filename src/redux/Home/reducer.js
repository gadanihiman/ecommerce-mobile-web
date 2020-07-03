import { fromJS } from 'immutable'
import {
  LOAD_HOMEPAGE_DATA,
  LOAD_HOMEPAGE_DATA_SUCCESS,
  LOAD_HOMEPAGE_DATA_ERROR,
  CHANGE_SEARCH_TEXT,
  LOAD_SEARCH_DATA_SUCCESS,
  PURCHASE_PRODUCT,
  WISHLIST_PRODUCT,
} from './constant'

const initialState = fromJS({
  loading: false,
  error: false,
  homepageData: {
    category: [],
    productPromo: []
  },
  searchText: null,
  searchData: [],
  purchasedProduct: [],
  wishlistProduct: [],
})

export default (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_PRODUCT:
      return state.set('purchasedProduct', state.get('purchasedProduct').push(action.payload))

    case WISHLIST_PRODUCT: {
      const wishlistedProduct = state.get('wishlistProduct');
      const isExistProduct = !!wishlistedProduct.find(item => item.id === action.payload.id);
      if (isExistProduct) {
        const filteredWishlistedProd = wishlistedProduct.filter(item => item.id !== action.payload.id);
        return state.set('wishlistProduct', filteredWishlistedProd)
      }
      const newWishlistedProduct = wishlistedProduct.push(action.payload);
      return state.set('wishlistProduct', newWishlistedProduct)
    }

    case CHANGE_SEARCH_TEXT:
      return state.set('searchText', action.payload)

    case LOAD_SEARCH_DATA_SUCCESS:
      return state
        .set('searchData', fromJS(action.payload))

    case LOAD_HOMEPAGE_DATA:
      return state.set('loading', true)

    case LOAD_HOMEPAGE_DATA_SUCCESS:
      return state
        .set('loading', false)
        .set('homepageData', fromJS(action.homepageData))

    case LOAD_HOMEPAGE_DATA_ERROR:
      return state.set('loading', false).set('error', action.error)

    default:
      return state
  }
}
