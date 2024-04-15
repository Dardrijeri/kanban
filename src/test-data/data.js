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
              description: 'Add capability to add a card in a column',
              priority: 'critical'
            },
            {
                id: 3,
                title: 'Another card',
                description: 'Smth smth',
                priority: 'high-priority'
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
                    description: 'Bar',
                    priority: 'medium-priority'
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
                  description: 'Bar',
                  priority: 'low-priority'
              },
          ]
        },
        {
          id: 4,
          title: 'Finished',
          cards: [
              {
                  id: 5,
                  description: 'Looks like finished',
                  priority: 'low-priority'
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
              id: 5,
              description: 'Something something did good'
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
                id: 5,
                description: 'Testing tests'
              },
          ]
        }
      ]
    }
  }
]


export default board;