import os
import pandas as pd
# Import your preferred AI client here (Gemini or OpenAI)

class F1InsightsEngine:
    def __init__(self, api_key: str = None):
        self.api_key = api_key

    def calculate_consistency_score(self, lap_times: list):
        """
        Calculates driver consistency based on lap time variance.
        Lower variance = Higher consistency.
        """
        if not lap_times:
            return 0
        df = pd.Series(lap_times)
        # Using Coefficient of Variation (CV) as a proxy for consistency
        cv = df.std() / df.mean() if df.mean() != 0 else 0
        score = max(0, 100 - (cv * 1000))  # Scale to 0-100
        return round(score, 2)

    def generate_ai_summary(self, driver_name: str, performance_data: dict):
        """
        Generates a natural language summary using Gemini/OpenAI.
        """
        # Placeholder for LLM integration logic
        prompt = f"Summarize {driver_name}'s weekend based on these metrics: {performance_data}"
        return f"AI Summary for {driver_name}: Showing exceptional pace in S2 but losing time in pit exits."

insights_engine = F1InsightsEngine()
