const test_Personal = {
    columns: [
        {
            id: 1,
            title: 'Backlog',
            cards: [
                {
                    id: 1,
                    description: 'Configure VLANs on switches for a new department.',
                    priority: 'critical',
                    date: {week: 1, year: 2024}
                },
                {
                    id: 2,
                    description: "Install and configure antivirus software on all company devices.",
                    priority: "critical",
                    date: {week: 2, year: 2024}
                },
                {
                    id: 3,
                    description: "Update SSL certificates for company websites.",
                    priority: "medium-priority",
                    date: {week: 1, year: 2024}
                },
            ]
        },
        {
            id: 2,
            title: 'To-Do',
            cards: [
                {
                    id: 4,
                    description: "Conduct security training sessions for employees.",
                    priority: "high-priority",
                    date: {week: 4, year: 2024}
                },
                {
                    id: 5,
                    description: "Set up VPN access for remote contractors.",
                    priority: "critical",
                    date: {week: 1, year: 2024}
                },
            ]
        },
        {
            id: 3,
            title: 'Review',
            cards: [
                {
                    id: 6,
                    description: "Upgrade network switches firmware to latest version.",
                    priority: "medium-priority",
                    date: {week: 2, year: 2024}
                },
                {
                    id: 7,
                    description: "Implement two-factor authentication for company email accounts.",
                    priority: "critical",              
                    date: {week: 1, year: 2024}
                },
            ]
        },
        {
            id: 4,
            title: 'Finished',
            cards: [
                {
                    id: 8,
                    description: "Optimize database queries for improved performance.",
                    priority: "high-priority",
                    date: {week: 3, year: 2024}
                },
                {
                    id: 9,
                    description: "Configure backup schedule for critical server data.",
                    priority: "high-priority",
                    date: {week: 2, year: 2024}
                },
            ]
        },
        {
            id: 5,
            title: 'Dropped',
            cards: [
                {
                    id: 10,
                    description: "Set up monitoring alerts for server resource utilization.",
                    priority: "low-priority",
                    date: {week: 4, year: 2024}
                },
            ]
        }
    ]
}

export default test_Personal;