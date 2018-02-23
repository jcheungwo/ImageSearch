import axios from 'axios'

const ADD_IMAGES = 'ADD_IMAGES'
const NEW_SEARCH = 'NEW_SEARCH'

const defaultImages = {
  images: []
}

const addImages = (images) => {
 return {type: ADD_IMAGES, images}
}

const newSearch = (images) => {
 return {type: NEW_SEARCH, images}
}

export const fetchAddImages = (search, page) => {
  return function(dispatch) {
    let searchRequest = search.split(' ').join('+')
    let searchURL = `${searchRequest}&image_type=photo&pretty=true&page=${page}`
    axios.get(`http://pixabay.com/api/?key=8118928-e3af9d4a6e7f2178b3811919d&q=${searchURL}`)
    .then(res => res.data)
    .then(images => dispatch(addImages(images)))
    .catch(err => console.log(err))
  }
}

export const fetchNewSearch = (search) => {
  return function(dispatch) {
    let searchRequest = search.split(' ').join('+')
    let searchURL = `${searchRequest}&image_type=photo&pretty=true`
    axios.get(`http://pixabay.com/api/?key=8118928-e3af9d4a6e7f2178b3811919d&q=${searchURL}`)
    .then(res => res.data)
    .then(images => dispatch(newSearch(images)))
    .catch(err => console.log(err))
  }
}

export default function(state = defaultImages, action) {
  switch(action.type) {
    case ADD_IMAGES:
      return state.concat(action.images)
    case NEW_SEARCH:
      return action.images
    default:
      return state;
  }
}