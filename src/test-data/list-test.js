const list = [
    {
        title: 'Backlog',
        id: 1,
        departments: [
            {
                label: 'IT',
                value: 'it',
                cards: [
                    {
                        "id": 6,
                        "description": "Perform security audit for network infrastructure.",
                        "priority": "high-priority",
                        "date": {"week": 3, "year": 2024},
                        "employee": "John",
                        "employeePic": "/images/harold-01.png"
                    },
                ]
            },
            {
                label: 'R&D',
                value: 'rtd',
                cards: []
            },
            {
                label: 'HR',
                value: 'hr',
                cards: []
            }
        ]
    },
    {
        title: 'To-Do',
        id: 2,
        departments: [
            {
                label: 'IT',
                value: 'it',
                cards: []
            },
            {
                label: 'R&D',
                value: 'rtd',
                cards: []
            },
            {
                label: 'HR',
                value: 'hr',
                cards: []
            }
        ]
    },
    {
        title: 'Review',
        id: 3,
        departments: [
            {
                label: 'IT',
                value: 'it',
                cards: []
            },
            {
                label: 'R&D',
                value: 'rtd',
                cards: []
            },
            {
                label: 'HR',
                value: 'hr',
                cards: []
            }
        ]
    },
    {
        title: 'Finished',
        id: 4,
        departments: [
            {
                label: 'IT',
                value: 'it',
                cards: []
            },
            {
                label: 'R&D',
                value: 'rtd',
                cards: []
            },
            {
                label: 'HR',
                value: 'hr',
                cards: []
            }
        ]
    },
    {
        title: 'Dropped',
        id: 5,
        departments: [
            {
                label: 'IT',
                value: 'it',
                cards: []
            },
            {
                label: 'R&D',
                value: 'rtd',
                cards: []
            },
            {
                label: 'HR',
                value: 'hr',
                cards: []
            }
        ]
    }
]

export default list;