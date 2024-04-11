const board = {
    columns: [
      {
        id: 1,
        title: 'Backlog',
        cards: [
          {
            id: 1,
            title: 'Add card',
            description: 'Add capability to add a card in a column'
          },
          {
              id: 3,
              title: 'Another card',
              description: 'Smth smth'
          },
        ]
      },
      {
          id: 2,
          title: 'To-do',
          cards: [
              {
                  id: 2,
                  title: 'Foo',
                  description: 'Bar'
              },
          ]
      },
      {
        id: 3,
        title: 'Review',
        cards: [
            {
                id: 4,
                title: 'Foo',
                description: 'Bar'
            },
        ]
      },
      {
        id: 4,
        title: 'Finished',
        cards: [
            {

            },
        ]
      }
    ]
  };

  export default board;