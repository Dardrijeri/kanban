const board = [
  {
    user: {
      name: 'Harold',
      image: '/images/harold-03.png',
      department: 'it'
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
              priority: 'critical',
              date: {week: 2, year: 2024}
            },
            {
                id: 3,
                title: 'Another card',
                description: 'Smth smth',
                priority: 'high-priority',
                date: {week: 1, year: 2024}
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
                    priority: 'medium-priority',
                    date: {week: 1, year: 2024}
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
                  priority: 'low-priority',
                  date: {week: 1, year: 2024}
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
                  priority: 'low-priority',
                  date: {week: 1, year: 2024}
              },
          ]
        }
      ]
    }
  },
  {
    user: {
      name: 'David',
      image: '/images/harold-02.png',
      department: 'hr'
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
              description: 'Card of different user',
              date: {week: 1, year: 2024}
            },
            {
                id: 3,
                title: 'Another card',
                description: 'Idk what to write here',
                date: {week: 1, year: 2024}
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
                    description: 'BarBar',
                    date: {week: 1, year: 2024}
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
                  description: 'FooFoo',
                  date: {week: 1, year: 2024}
              },
          ]
        },
        {
          id: 4,
          title: 'Finished',
          cards: [
            {
              id: 5,
              description: 'Something something did good',
              date: {week: 1, year: 2024}
            },
          ]
        }
      ]
    }
  },
  {
    user: {
      name: 'John',
      image: '/images/harold-01.png',
      department: 'rtd'
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
              description: 'Card of different user',
              date: {week: 1, year: 2024},
              priority: 'high-priority'
            },
            {
                id: 3,
                title: 'Another card',
                description: 'Idk what to write here',
                date: {week: 1, year: 2024},
                priority: 'critical'
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
                    description: 'BarBar',
                    date: {week: 1, year: 2024}
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
                  description: 'FooFoo',
                  date: {week: 1, year: 2024}
              },
          ]
        },
        {
          id: 4,
          title: 'Finished',
          cards: [
              {
                id: 5,
                description: 'Testing tests',
                date: {week: 1, year: 2024}
              },
          ]
        }
      ]
    }
  }
]


export default board;