from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="F1 Analytics & Insights API")

# Enable CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# 2026 Season Data
DRIVERS_DATA = [
    {"name": "Kimi Antonelli", "team": "Mercedes", "number": 12, "points": 68, "rank": 1},
    {"name": "Max Verstappen", "team": "Red Bull Racing", "number": 1, "points": 62, "rank": 2},
    {"name": "Lewis Hamilton", "team": "Ferrari", "number": 44, "points": 55, "rank": 3},
    {"name": "Charles Leclerc", "team": "Ferrari", "number": 16, "points": 48, "rank": 4},
    {"name": "George Russell", "team": "Mercedes", "number": 63, "points": 42, "rank": 5},
    {"name": "Lando Norris", "team": "McLaren", "number": 4, "points": 38, "rank": 6},
    {"name": "Oscar Piastri", "team": "McLaren", "number": 81, "points": 35, "rank": 7},
]

CALENDAR_2026 = [
    {
        "round": 1, "gp": "Australian Grand Prix", "circuit": "Albert Park Circuit", "date": "March 8", 
        "length": "5.278km", "turns": 14, "status": "Completed", "winner": "Kimi Antonelli",
        "mapImage": "https://images.unsplash.com/photo-1542362567-b0526a62db15?auto=format&fit=crop&q=80&w=800"
    },
    {
        "round": 2, "gp": "Chinese Grand Prix", "circuit": "Shanghai International Circuit", "date": "March 15", 
        "length": "5.451km", "turns": 16, "status": "Completed", "winner": "Max Verstappen",
        "mapImage": "https://images.unsplash.com/photo-1542362567-b0526a62db15?auto=format&fit=crop&q=80&w=800"
    },
    {
        "round": 3, "gp": "Japanese Grand Prix", "circuit": "Suzuka Circuit", "date": "March 29", 
        "length": "5.807km", "turns": 18, "status": "Completed", "winner": "Lewis Hamilton",
        "mapImage": "https://images.unsplash.com/photo-1542362567-b0526a62db15?auto=format&fit=crop&q=80&w=800"
    },
    {
        "round": 4, "gp": "Bahrain Grand Prix", "circuit": "Bahrain International Circuit", "date": "April 12", 
        "length": "5.412km", "turns": 15, "status": "Completed", "winner": "Kimi Antonelli",
        "mapImage": "https://images.unsplash.com/photo-1542362567-b0526a62db15?auto=format&fit=crop&q=80&w=800"
    },
    {
        "round": 5, "gp": "Miami Grand Prix", "circuit": "Miami International Autodrome", "date": "May 3", 
        "length": "5.412km", "turns": 19, "status": "Upcoming", "winner": None,
        "mapImage": "https://images.unsplash.com/photo-1542362567-b0526a62db15?auto=format&fit=crop&q=80&w=800"
    },
    {
        "round": 16, "gp": "Spanish Grand Prix", "circuit": "Madrid Street Circuit", "date": "Sept 13", 
        "length": "5.470km", "turns": 20, "status": "Upcoming", "winner": None,
        "mapImage": "/assets/images/madrid_street_circuit_2026_1777566799281.png"
    },
]

REGULATIONS_2026 = {
    "power_unit": {
        "title": "Hybrid Revolution 2.0",
        "description": "A 50:50 power split between the internal combustion engine (ICE) and electrical energy. Removal of MGU-H.",
        "specs": ["535hp ICE", "475hp MGU-K", "100% Sustainable Fuel"]
    },
    "aerodynamics": {
        "title": "Active Aero System",
        "description": "Z-Mode for high downforce in corners and X-Mode for low drag on straights. Fully active front and rear wings.",
        "specs": ["Moveable Front Wing", "Moveable Rear Wing", "Manual Override Available"]
    },
    "chassis": {
        "title": "Nimble Design",
        "description": "Smaller, lighter cars designed for closer racing.",
        "specs": ["-30kg Weight Reduction", "-200mm Wheelbase", "-100mm Width"]
    }
}

@app.get("/api/drivers")
async def get_drivers():
    return DRIVERS_DATA

@app.get("/api/regulations")
async def get_regulations():
    return REGULATIONS_2026

@app.get("/api/calendar")
async def get_calendar():
    return CALENDAR_2026

@app.get("/api/telemetry/{name}")
async def get_telemetry(name: str):
    # Mock telemetry points
    import random
    return [
        {"time": i, "speed": 290 + random.randint(-15, 40), "throttle": random.randint(85, 100), "energy": random.randint(60, 100)}
        for i in range(20)
    ]

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

