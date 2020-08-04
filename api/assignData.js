import API from './api';

/**
 * Performs a GET request at the given endpoint
 * @param {String} endpoint URL endpoint after base URL 
 * @returns an axios promise
 */
const getPromise = async (endpoint) => {
  const promise = await API.get(endpoint);
  return promise;
}

/**
 * Performs GET request to endpoint and assigns data with given function
 * 
 * @param {String} endpoint URL endpoint after base URL 
 * @param {Function} setDataFunction set state function
 * @param {Array|any} constants constant data to set to if request fails
 */
const assignData = (endpoint, setDataFunction, constants) => {
  // Perform GET request to given endpoint
  const promise = getPromise(endpoint);

  // Set data if successful or set to constants if unsuccessful
  promise.then(response => {
    console.log(`GET request to ${endpoint} was successful`);
    setDataFunction(response.data);
  })
  .catch(error => {
    console.log(error);
    // If error occurs, fetch data from constants
    setDataFunction(constants);
  });
}

export default assignData;