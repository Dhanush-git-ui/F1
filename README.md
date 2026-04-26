# VORTEX AI: 2026 Formula 1 Predictive Analytics Platform

<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg" width="200" alt="F1 Logo" />
  <p><i>The Future of High-Performance Kinetic Computing</i></p>
</div>





## 🏎️ Overview
**VORTEX AI** is a high-performance analytics platform designed for the 2026 Formula 1 technical era. It integrates real-time telemetry processing with Machine Learning to predict race strategies, tire degradation, and overtake probabilities. 

This project demonstrates a full-stack engineering approach to **Big Data in Motorsports**, combining a reactive 3D frontend with a robust Python predictive engine.

## 🧠 AI/ML Implementation (The "Brain")
This project is built to demonstrate production-grade AI/ML workflows:
- **Predictive Strategy Engine:** Uses a **Random Forest Regressor** trained on historical Fast-F1 data to predict optimal pit-stop windows (Lap Delta).
- **Aero-Dynamic Logic:** Simulates 2026 "Active Aero" (X-Mode/Z-Mode) transitions based on sector-specific velocity delta analysis.
- **Data Pipeline:** Processes raw HDF5/Parquet telemetry streams from the **Fast-F1 API** and converts them into normalized features for real-time inference.

## 🛠️ Technology Stack
- **Frontend:** React 18, TypeScript, Tailwind CSS (Design System).
- **Animations:** GSAP (Entrance sequences), Three.js (Procedural 3D background).
- **Backend:** FastAPI (Python), Uvicorn (ASGI Server).
- **Data Science:** Fast-F1, Pandas, NumPy, Scikit-learn.

## 🚀 Key Features
- **2026 Regulation HUD:** Real-time monitoring of the 350kW ERS deployment and 100% sustainable fuel metrics.
- **The Grand Roster:** A complete database of the 2026 grid, including the Audi F1 Team and Red Bull Ford Powertrains.
- **Kinetic Telemetry:** High-frequency graphing of speed, throttle, and energy recovery.

## 📁 Installation & Setup
1. **Clone the Repo:** `git clone https://github.com/Dhanush-git-ui/F1_GVV.git`
2. **Backend:** 
   - `cd backend`
   - `pip install -r requirements.txt`
   - `python main.py`
3. **Frontend:**
   - `npm install`
   - `npm run dev`

---
*Created by GP Dhanush as a showcase of AI/ML integration in High-Performance Computing.*
