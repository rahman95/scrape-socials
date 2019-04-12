import getTwitterFollowers from './lib/twitter';

async function run() {
  const twFollowers = await getTwitterFollowers('rahman_younus');

  console.log(twFollowers);
}

run();