const GROUPMETOKEN = process.env['GROUPMETOKEN'];
const GIPHYTOKEN = process.env['GIPHYTOKEN'];
const GROUP = process.env['GROUP'];
const URL = process.env['URL'];
const natural = require('natural');
const _ = require('underscore');
const util = require('util');
const request = require('request');

var tokenizer = new natural.WordTokenizer();

var config =  { token:GROUPMETOKEN,
                name: "giphybot",
                group: GROUP,
                url: URL
              };

const AVATAR = process.env['AVATAR'];
if (AVATAR) {
  config.avatar_url = AVATAR;
}

var giphy = require('giphy-wrapper')(GIPHYTOKEN);
var bot = require('fancy-groupme-bot')(config);

bot.on('botRegistered', function() {
  console.log("online");
});

bot.on('botMessage', function(bot, message) {
  console.log('incoming');
  if (message.name != 'giphybot') {
    var tokens = tokenizer.tokenize(message.text);

    tokens = _.map(tokens, function(t) { return t.toLowerCase(); });

    if (tokens.indexOf('giphybot') >= 0 || tokens.indexOf('g') >= 0) {
      tokens = _.without(tokens, 'giphybot');
      console.log("searching for " + tokens);
      giphy.search(escape(tokens.join('+')), 20, 0, function(err, data) {
        if (err) console.error(err);
        console.log("giphy returned " + util.inspect(data));
        if (data.data.length) {
          data = _.shuffle(data.data);
          var id = data[0].id;
          var imageUrl = "http://media3.giphy.com/media/" + id + "/giphy.gif";
          bot.message(imageUrl);
        }
      });
    }
  }
});

bot.serve(process.env['PORT'] || 3000);
