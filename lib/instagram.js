import axios from 'axios';
import cheerio from 'cheerio';

const URL = 'https://instagram.com';

async function getProfile(username) {
  return await axios.get(`${URL}/${username}`)
    .then((res) => res.data);
}

async function getFollowerCount(username) {
  const html = await getProfile(username);
  const $ = cheerio.load(html);
  const el = $(`[type="application/ld+json"]`).html()
  const data = JSON.parse(el);

  return data.mainEntityofPage.interactionStatistic.userInteractionCount;
}

export default getFollowerCount;