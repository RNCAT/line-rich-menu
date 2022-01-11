module.exports.messageList = {
  alpaca: {
    type: 'template',
    altText: 'สายพันธุ์อัลปาก้า',
    template: {
      type: 'carousel',
      columns: [
        {
          thumbnailImageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/c/c6/Suri-alpaca.jpg?w=auto',
          title: 'สายพันธุ์ซูริ (suri) ',
          text: 'ให้เส้นใยที่ยาวและนุ่มเหมือนเส้นไหม มีลักษณะเหมือนเส้นดินสอ',
          actions: [
            {
              type: 'uri',
              label: 'ดูเพิ่มเติม',
              uri: 'https://www.alpacahill.com/alpaca-profile/',
            },
          ],
        },
        {
          thumbnailImageUrl:
            'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/jcqwb3gd7mpvagnns67z/Alpaca',
          title: 'สายพันธุ์ฮัวคายา (huacaya)',
          text: 'ให้เส้นใยที่สั้น หนาแน่น เหมือนขนแกะ ให้ความรู้สึกผ้าขนสัตว์',
          actions: [
            {
              type: 'uri',
              label: 'ดูเพิ่มเติม',
              uri: 'https://www.alpacahill.com/alpaca-profile/',
            },
          ],
        },
      ],
    },
  },
  register: {
    type: 'flex',
    altText: 'Q1. Which is the API to create chatbot?',
    contents: {
      type: 'bubble',
      hero: {
        type: 'image',
        url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_3_movie.png',
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover',
      },
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'md',
        contents: [
          {
            type: 'text',
            text: 'สมัครสมาชิกสำเร็จ',
            wrap: true,
            weight: 'bold',
            gravity: 'center',
            size: 'xl',
            align: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            margin: 'lg',
            spacing: 'sm',
            contents: [
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'Name',
                    color: '#aaaaaa',
                    size: 'sm',
                    flex: 1,
                  },
                  {
                    type: 'text',
                    text: 'Monday 25, 9:00PM',
                    wrap: true,
                    size: 'sm',
                    color: '#666666',
                    flex: 4,
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'Status',
                    color: '#aaaaaa',
                    size: 'sm',
                    flex: 1,
                  },
                  {
                    type: 'text',
                    text: '7 Floor, No.3',
                    wrap: true,
                    color: '#666666',
                    size: 'sm',
                    flex: 4,
                  },
                ],
              },
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'Date',
                    color: '#aaaaaa',
                    size: 'sm',
                    flex: 1,
                  },
                  {
                    type: 'text',
                    text: 'C Row, 18 Seat',
                    wrap: true,
                    color: '#666666',
                    size: 'sm',
                    flex: 4,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
  default: {
    type: 'text',
    text: '$ อัลปาก้างง',
    emojis: [
      {
        index: 0,
        productId: '5ac21a18040ab15980c9b43e',
        emojiId: '075',
      },
    ],
  },
};
