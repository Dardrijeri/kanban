const board = [
  {
    user: {
      name: 'Harold',
      image: '/images/harold-03.png'
    },
    board: {
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
    }
  },
  {
    user: {
      name: 'David',
      image: '/images/harold-02.png'
    },
    board: {
      columns: [
        {
          id: 1,
          title: 'Backlog',
          cards: [
            {
              id: 1,
              title: 'Add card',
              description: 'Card of different user'
            },
            {
                id: 3,
                title: 'Another card',
                description: 'Idk what to write here'
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
                    description: 'BarBar'
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
                  description: 'FooFoo'
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
    }
  },
  {
    user: {
      name: 'John',
      image: '/images/harold-01.png'
    },
    board: {
      columns: [
        {
          id: 1,
          title: 'Backlog',
          cards: [
            {
              id: 1,
              title: 'Add card',
              description: 'Card of different user'
            },
            {
                id: 3,
                title: 'Another card',
                description: 'Idk what to write here'
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
                    description: 'BarBar'
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
                  description: 'FooFoo'
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
    }
  }
]


export default board;