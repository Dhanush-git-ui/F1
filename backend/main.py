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
# Mock Data
DRIVERS_DATA = [
    {"name": "Max Verstappen", "team": "Red Bull Racing", "number": 1, "points": 51, "rank": 1},
    {"name": "Sergio Perez", "team": "Red Bull Racing", "number": 11, "points": 36, "rank": 2},
    {"name": "Charles Leclerc", "team": "Ferrari", "number": 16, "points": 28, "rank": 3},
    {"name": "Carlos Sainz", "team": "Ferrari", "number": 55, "points": 20, "rank": 4},
    {"name": "Lando Norris", "team": "McLaren", "number": 4, "points": 18, "rank": 5},
]

@app.get("/api/drivers")
async def get_drivers():
    return DRIVERS_DATA
@app.get("/api/telemetry/{name}")
async def get_telemetry(name: str):
    # Mock telemetry points
    import random
    return [
        {"time": i, "speed": 280 + random.randint(-20, 20), "throttle": random.randint(80, 100)}
        for i in range(10)
    ]

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

