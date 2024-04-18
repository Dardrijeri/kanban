const board = {
    columns: [
        {
            id: 1,
            title: 'Backlog',
            cards: [
                {
                    "id": 1,
                    "description": "Install security patches on all servers.",
                    "priority": "critical",
                    "date": {"week": 3, "year": 2024}
                },
                {
                    "id": 2,
                    "description": "Configure firewall rules for new application deployment.",
                    "priority": "high-priority",
                    "date": {"week": 2, "year": 2024}
                },
                {
                    "id": 3,
                    "description": "Set up VPN access for remote employees.",
                    "priority": "medium-priority",
                    "date": {"week": 4, "year": 2024}
                },
                {
                    "id": 4,
                    "description": "Optimize database indexes for improved performance.",
                    "priority": "low-priority",
                    "date": {"week": 1, "year": 2024}
                },
                {
                    "id": 5,
                    "description": "Review and update disaster recovery plan.",
                    "priority": "high-priority",
                    "date": {"week": 5, "year": 2024},
                    "employee": "John",
                    "employeePic": "/images/harold-01.png"
                }
            ]
        },
        {
            id: 2,
            title: 'To-Do',
            cards: [
                {
                    "id": 6,
                    "description": "Perform security audit for network infrastructure.",
                    "priority": "high-priority",
                    "date": {"week": 3, "year": 2024},
                    "employee": "John",
                    "employeePic": "/images/harold-01.png"
                },
                {
                    "id": 7,
                    "description": "Upgrade operating system on critical servers.",
                    "priority": "medium-priority",
                    "date": {"week": 5, "year": 2024},
                    "employee": "David",
                    "employeePic": "/images/harold-02.png"
                },
                {
                    "id": 8,
                    "description": "Implement multi-factor authentication (MFA) for user accounts.",
                    "priority": "low-priority",
                    "date": {"week": 2, "year": 2024},
                    "employee": "John",
                    "employeePic": "/images/harold-01.png"
                },
            ]
        },
        {
            id: 3,
            title: 'Review',
            cards: [
                {
                    "id": 9,
                    "description": "Deploy new monitoring solution for infrastructure health.",
                    "priority": "high-priority",
                    "date": {"week": 4, "year": 2024},
                    "employee": "Harold",
                    "employeePic": "/images/harold-03.png"
                },
                {
                    "id": 10,
                    "description": "Review and update disaster recovery procedures.",
                    "priority": "critical",
                    "date": {"week": 1, "year": 2024},
                    "employee": "David",
                    "employeePic": "/images/harold-02.png"
                },
                {
                    "id": 11,
                    "description": "Optimize SQL queries for database performance.",
                    "priority": "medium-priority",
                    "date": {"week": 4, "year": 2024},
                    "employee": "John",
                    "employeePic": "/images/harold-01.png"
                },
            ]
        },
        {
            id: 4,
            title: 'Finished',
            cards: [
                {
                    "id": 12,
                    "description": "Configure backup schedule for critical data.",
                    "priority": "low-priority",
                    "date": {"week": 3, "year": 2024},
                    "employee": "John",
                    "employeePic": "/images/harold-01.png"
                },
                {
                    "id": 13,
                    "description": "Set up intrusion detection system (IDS) on network.",
                    "priority": "high-priority",
                    "date": {"week": 2, "year": 2024},
                    "employee": "Harold",
                    "employeePic": "/images/harold-03.png"
                },
                {
                    "id": 14,
                    "description": "Conduct security awareness training for employees.",
                    "priority": "medium-priority",
                    "date": {"week": 5, "year": 2024},
                    "employee": "David",
                    "employeePic": "/images/harold-02.png"
                },
            ]
        },
        {
            id: 5,
            title: 'Dropped',
            cards: [
                {
                    "id": 15,
                    "description": "Implement file encryption for sensitive data.",
                    "priority": "low-priority",
                    "date": {"week": 1, "year": 2024}
                }
            ]
        }
    ]
}

export default board;