const got = require('got');
const promiseRetry = require('promise-retry');

module.exports = async (url) => {
  try {
    const response = await got(url, {retries: 5});
    return response.body;
  }
  catch (e) {
    console.error(`error retrieving artifact. ${e} URL: ${url}`);
    return null;
  }
};
