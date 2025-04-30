const characters = [
    {
        "id": 0,
        "name": "Dialogue Box"
    },

    {
        "id": 1,
        "name": "Player",
        "health": 20,
        "actions": [
            {
                "name": "Bat",
                "description": "You swing your bat at your opponent!",
                "maxDamage": 15,
            },

            {
                "name": "Fall",
                "description": "You stumble and fall to the ground!",
                "maxDamage": 0
            }
        ],
        "comeback": [
            {
                "name": "PK Fire",
                "description": "You use PK Fire on your opponent!",
                "maxDamage": 20,
            },

            {
                "name": "PK Thunder",
                "description": "You use PK Thunder on on your opponent!",
                "maxDamage": 20
            }
        ]
    },

    {
        "id": 2,
        "name": "Doggo",
        "health": 100,
        "sprite": "resources/doggo2.png",
        "actions": [
            {
                "name": "Bark",
                "description": "Doggo barks loudly.",
                "maxDamage": 10
            },

            {
                "name": "Bite",
                "description": "Doggo bites you.",
                "maxDamage": 15
            },

            {
                "name": "Distracted",
                "description": "Doggo gets distracted by a squirrel.",
                "maxDamage": 0
            },

            {
                "name": "Fall",
                "description": "Doggo trips and falls to the ground.",
                "maxDamage": 0
            }
        ]
    },

    {
        "id": 3,
        "name": "Strange Apple",
        "health": 100,
        "sprite": "resources/apple.png",
        "actions": [
            {
                "name": "Action1",
                "description": "Enemy1 barks loudly.",
                "maxDamage": 10
            },

            {
                "name": "Action2",
                "description": "Enemy1 bites you.",
                "maxDamage": 15
            },

            {
                "name": "Distracted",
                "description": "Enemy1 gets distracted by a squirrel.",
                "maxDamage": 0
            },

            {
                "name": "Distracted",
                "description": "Enemy1 gets distracted by a squirrel.",
                "maxDamage": 0
            }
        ]
    },

    {
        "id": 4,
        "name": "Cat?",
        "health": 100,
        "sprite": "resources/cat.png",
        "actions": [
            {
                "name": "Action1",
                "description": "Cat? barks loudly.",
                "maxDamage": 10
            },

            {
                "name": "Action2",
                "description": "Cat? bites you.",
                "maxDamage": 15
            },

            {
                "name": "Distracted",
                "description": "Cat? gets distracted by a squirrel.",
                "maxDamage": 0
            },

            {
                "name": "Distracted",
                "description": "Cat? gets distracted by a squirrel.",
                "maxDamage": 0
            }
        ]
    }
]
