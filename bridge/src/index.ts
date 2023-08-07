// Bridge é bom para transmissão de lives, envetos ao pelo youtube, twitch, facebook e etc...
import IPlatform from "./platforms/IPlatform";
import YouTube from "./platforms/YouTube";
import Live from "./transmissions/Live";
import Twitch from './platforms/Twitch';
import AdvancedLive from "./transmissions/AdvancedLive";

function startLive(platform: IPlatform)  {
  console.log('aguarde...')
  const live = new Live(platform)
  live.broadcasting()
  live.result()
}

// startLive(new YouTube())
// startLive(new Twitch())

function startAdvancedLive(platform: IPlatform)  {
  console.log('aguarde...')
  const live = new AdvancedLive(platform)
  live.subtitles()
  live.comments()
  live.broadcasting()
  live.result()
}

startAdvancedLive(new YouTube())
startAdvancedLive(new Twitch())