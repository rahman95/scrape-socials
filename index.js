import getTwitterFollowers from './lib/twitter';
import getInstagramFollowers from './lib/instagram';
import chalk from 'chalk';

async function run() {
  const username = 'rahman_younus';
  const [twFollowers, igFollowers] = await Promise.all([getTwitterFollowers(username), getInstagramFollowers(username)])

  console.log(`You currently have ${chalk.hex('#1EA1F3').bold(twFollowers)} twitter followers, and ${chalk.hex('#C7028D').bold(igFollowers)} instagram followers`)
}

run();