import API from '@/api'

const GET_BEERS = 'GET_BEERS'
const GET_BEERS_SUCCESS = 'GET_BEERS_SUCCESS'
const GET_BEERS_FAILED = 'GET_BEERS_FAILED'

// Enable the module to be namespaced
const namespaced = true

// Initial state of the module
const state = {
  all: [],
  loading: false
}

const mutations = {
  [GET_BEERS] (state) {
    state.loading = true
  },

  [GET_BEERS_SUCCESS] (state, beers) {
    state.loading = false
    state.all = beers
  },

  [GET_BEERS_FAILED] (state) {
    state.loading = false
  }
}

const actions = {
  // all fetches the beer list from the api with possible query parameters
  async all ({ commit }, query) {
    let response

    commit(GET_BEERS)

    try {
      response = await API.beers.list(query)
    } catch (err) {
      response = err
    }

    return new Promise((resolve, reject) => {
      if (response.status >= 400) {
        commit(GET_BEERS_FAILED)
        reject(response)
      } else {
        commit(GET_BEERS_SUCCESS, response.data)
        resolve(response.data)
      }
    })
  }
}

const getters = {
  // beerList returns a list of beer
  beerList: state => {
    return state.all
  },

  // loading returns the loading state
  loading: state => {
    return state.loading
  }
}

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations
}
