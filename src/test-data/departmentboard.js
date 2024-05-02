const board = {
    "columns": [
        {
            "id": 1,
            "title": "Backlog",
            "cards": [
                {
                    "id": 1,
                    "description": "Установить обновления безопасности на всех серверах.",
                    "priority": "critical",
                    "date": {"week": 3, "year": 2024}
                },
                {
                    "id": 2,
                    "description": "Настроить правила брандмауэра для развертывания нового приложения.",
                    "priority": "high-priority",
                    "date": {"week": 2, "year": 2024}
                },
                {
                    "id": 3,
                    "description": "Настроить доступ через VPN для удаленных сотрудников.",
                    "priority": "medium-priority",
                    "date": {"week": 4, "year": 2024}
                },
                {
                    "id": 4,
                    "description": "Оптимизировать индексы базы данных для улучшения производительности.",
                    "priority": "low-priority",
                    "date": {"week": 1, "year": 2024}
                },
                {
                    "id": 5,
                    "description": "Съешь ещё этих мягких французских булок, да выпей же чаю.",
                    "priority": "high-priority",
                    "date": {"week": 5, "year": 2024},
                    "employee": "Джон",
                    "employeePic": "/images/harold-01.png"
                }
            ]
        },
        {
            "id": 2,
            "title": "To-Do",
            "cards": [
                {
                    "id": 6,
                    "description": "Провести аудит безопасности сетевой инфраструктуры.",
                    "priority": "high-priority",
                    "date": {"week": 3, "year": 2024},
                    "employee": "Джон",
                    "employeePic": "/images/harold-01.png"
                },
                {
                    "id": 7,
                    "description": "Обновить операционную систему на критических серверах.",
                    "priority": "medium-priority",
                    "date": {"week": 5, "year": 2024},
                    "employee": "Дэвид",
                    "employeePic": "/images/harold-02.png"
                },
                {
                    "id": 8,
                    "description": "Внедрить многофакторную аутентификацию (MFA) для учетных записей пользователей.",
                    "priority": "low-priority",
                    "date": {"week": 2, "year": 2024},
                    "employee": "Джон",
                    "employeePic": "/images/harold-01.png"
                }
            ]
        },
        {
            "id": 3,
            "title": "Review",
            "cards": [
                {
                    "id": 9,
                    "description": "Развернуть новое решение мониторинга состояния инфраструктуры.",
                    "priority": "high-priority",
                    "date": {"week": 4, "year": 2024},
                    "employee": "Гарольд",
                    "employeePic": "/images/harold-03.png"
                },
                {
                    "id": 10,
                    "description": "Пересмотреть и обновить процедуры аварийного восстановления.",
                    "priority": "critical",
                    "date": {"week": 1, "year": 2024},
                    "employee": "Дэвид",
                    "employeePic": "/images/harold-02.png"
                },
                {
                    "id": 11,
                    "description": "Оптимизировать SQL-запросы для производительности базы данных.",
                    "priority": "medium-priority",
                    "date": {"week": 4, "year": 2024},
                    "employee": "Джон",
                    "employeePic": "/images/harold-01.png"
                }
            ]
        },
        {
            "id": 4,
            "title": "Finished",
            "cards": [
                {
                    "id": 12,
                    "description": "Настроить расписание резервного копирования критических данных.",
                    "priority": "low-priority",
                    "date": {"week": 3, "year": 2024},
                    "employee": "Джон",
                    "employeePic": "/images/harold-01.png"
                },
                {
                    "id": 13,
                    "description": "Настроить систему обнаружения вторжений (IDS) в сети.",
                    "priority": "high-priority",
                    "date": {"week": 2, "year": 2024},
                    "employee": "Гарольд",
                    "employeePic": "/images/harold-03.png"
                },
                {
                    "id": 14,
                    "description": "Провести тренинг по осведомленности о безопасности для сотрудников.",
                    "priority": "medium-priority",
                    "date": {"week": 5, "year": 2024},
                    "employee": "Дэвид",
                    "employeePic": "/images/harold-02.png"
                }
            ]
        },
        {
            "id": 5,
            "title": "Dropped",
            "cards": [
            ]
        }
    ]
}


export default board;