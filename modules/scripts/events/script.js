module.exports.config = {
  name: 'Random',
  author: 'Carl James Valdez',
  version: '1.0',
  description: 'Random Event lol',
  selfListen: false,
};

let enter = false;
module.exports.run = async function({ event, args }) {
  if (event.type === 'message' && !enter) {
    api.graph({
      recipient: {
        id: event.sender.id
      },
      message: {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'generic',
            elements: [
              {
                title: 'Hello new TiteAI user!', // The title of the generic message
                subtitle: 'Thank you for using TiteAI as your personal assistant!', // The subtitle of the message
                image_url: 'https://i.ibb.co/MS4sz7Q/FB-IMG-1735631799997.jpg', // The image URL
                buttons: [
                  {
                    type: 'web_url',
                    url: 'https://www.facebook.com/cjcamehome251',
                    title: 'Check my Profile'
                  },
                  {
                    type: 'postback',
                    title: `${PREFIX}help`,
                    payload: 'HELP_PAYLOAD'
                  }
                ]
              }
            ]
          }
        }
      }
    });
    enter = true;
  };

  /** EVENT TYPES
   * postback
   * quick_reply
   * message_reaction
   * message_reply
   * message
   * mark_as_seen
   * @YanMaglinte **/
};