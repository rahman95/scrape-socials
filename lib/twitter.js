import axios from 'axios';
import cheerio from 'cheerio';

const URL = 'https://twitter.com';

async function getProfile(username) {
  return await axios.get(`${URL}/${username}`)
    .then((res) => res.data);
}

async function getFollowerCount(username) {
  const html = await getProfile(username);
  const $ = cheerio.load(html);
  const el = $(`[href="/${username}/followers"] .ProfileNav-value`)

  return el.data('count');
}

export default getFollowerCount;