const characters = [
    {
        "id": 0,
        "name": "Dialogue Box"
    },

    {
        "id": 1,
        "name": "Player",
        "health": 40,
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
        "health": 60,
        "sprite": "resources/doggo2.png",
        "actions": [
            {
                "name": "Bark",
                "description": "<strong>Doggo</strong> barks loudly.",
                "maxDamage": 7
            },

            {
                "name": "Bite",
                "description": "<strong>Doggo</strong> bites you.",
                "maxDamage": 15
            },

            {
                "name": "Distracted",
                "description": "<strong>Doggo</strong> gets distracted by a squirrel.",
                "maxDamage": 0
            },

            {
                "name": "Fall",
                "description": "<strong>Doggo</strong> trips and falls to the ground.",
                "maxDamage": 0
            }
        ]
    },

    {
        "id": 3,
        "name": "Strange Apple",
        "health": 60,
        "sprite": "resources/apple.png",
        "actions": [
            {
                "name": "Action1",
                "description": "<strong>Strange Apple</strong> stares at you intensly.",
                "maxDamage": 7
            },

            {
                "name": "Action2",
                "description": "<strong>Strange Apple</strong> spills juice on you.",
                "maxDamage": 15
            },

            {
                "name": "Think",
                "description": "<strong>Strange Apple</strong> thinks about its tree.",
                "maxDamage": 0
            },

            {
                "name": "Meal",
                "description": "<strong>Strange Apple</strong> divoures a worm.",
                "maxDamage": 0
            }
        ]
    },

    {
        "id": 4,
        "name": "Cat?",
        "health": 60,
        "sprite": "resources/cat.png",
        "actions": [
            {
                "name": "Bump",
                "description": "<strong>Cat?</strong> bumps into you.",
                "maxDamage": 7
            },

            {
                "name": "Scratch",
                "description": "<strong>Cat?</strong> scratches you violently.",
                "maxDamage": 15
            },

            {
                "name": "Float",
                "description": "<strong>Cat?</strong> starts floating in the air.",
                "maxDamage": 0
            },

            {
                "name": "Laser",
                "description": "<strong>Cat?</strong> gets distracted by a laser pointer.",
                "maxDamage": 0
            }
        ]
    }
]
