const line = require('@line/bot-sdk');
const { messageList } = require('./messageList');

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};
const client = new line.Client(config);

async function webhook(req, res) {
  if (!req.body.events.length) return res.sendStatus(200);

  const { replyToken, type, message, source } = req.body.events[0];

  if (type === 'message') {
    let msg;

    switch (message.text) {
      case 'อัลปาก้า':
        msg = messageList.alpaca;
        break;
      case 'สมัครรับข้อมูล':
        const { pictureUrl, displayName, statusMessage } = await client.getProfile(source.userId);
        const { register } = messageList;
        const DateNow = new Date(Date.now()).toDateString();

        register.contents.hero.url = pictureUrl;
        register.contents.body.contents[1].contents[0].contents[1].text = displayName;
        register.contents.body.contents[1].contents[2].contents[1].text = DateNow;

        if (statusMessage) {
          register.contents.body.contents[1].contents[1].contents[1].text = statusMessage;
        } else {
          register.contents.body.contents[1].contents[1].contents[1].text = '-';
        }

        msg = messageList.register;
        break;
      default:
        msg = messageList.default;
    }

    await client.replyMessage(replyToken, msg);
  }

  return res.sendStatus(200);
}

module.exports = { webhook };
