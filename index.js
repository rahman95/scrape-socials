import getTwitterFollowers from './lib/twitter';
import getInstagramFollowers from './lib/instagram';

async function run() {
  const twFollowers = await getTwitterFollowers('rahman_younus');
  const igFollowers = await getInstagramFollowers('rahman_younus');

  console.log(`You currently have ${twFollowers} twitter followers, and ${igFollowers} instagram followers`)
}

run();