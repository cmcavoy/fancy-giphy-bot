# Fancy Giphybot

A bot for [Groupme](http://group.me) that let's your group inject
hilarious animated gif's from [Giphy](http://giphy.com) into your
super serious khaki pants groupme chat.

## Heroku Setup

The bot is easy to set up on [Heroku](http://heroku.com). The bot
itself uses the
[Fancy Groupme Bot](http://github.com/cmcavoy/fancy-groupme-bot) Node
module to do its business.

### Get your credentials

Your bot needs a few things, a name, a room to connect to and a Groupme Token (you need to [create an application](https://dev.groupme.com/applications/new) to get a token).

**The Steps**

1. Go ahead and set up a [Heroku account](https://devcenter.heroku.com/articles/quickstart).

2. `git clone git@github.com:cmcavoy/fancy-giphy-bot.git`

3. `cd fancy-giphy-bot`

4. `heroku create` and make note of the url that Heroku creates.

5. The bot expects a few enviroment variables to be set on Heroku, all of which you can do from the command line.

```
heroku config:set GIPHYTOKEN=dc6zaTOxFJmzC # this is the beta app token from [Giphy API](https://github.com/giphy/GiphyAPI). It may change in the future.
heroku config:set GROUP=[the room id you want the bot to connect to]
heroku config:set GROUPMETOKEN=[the groupme token you got when you registered an [application](https://dev.groupme.com/applications/new)]
heroku config:set URL=[the url that heroku created for your app]
```

6. Push the code to heroku `git push heroku master`

7. Have fun! Giphybot should join your group. Any phrase that includes the single letter 'g' or the word 'giphybot' will ask the bot to search for something on Giphy. `giphybot fancy robots` will search for `fancy robots`, `fancy robots g` will also search for `fancy robots`.

![symphony](http://media0.giphy.com/media/jBPDJckRvgU9y/giphy.gif)

probably Wil Smith, but Fancy Giphybot just returns Gifs, it doesn't write symphonies....YET.

![soon](http://media.giphy.com/media/NIkVbQ0SOl356/giphy.gif)
