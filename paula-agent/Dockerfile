FROM python:3.11-slim

# System-Abhängigkeiten für Audio/Video-Plugins
RUN apt-get update && apt-get install -y \
    build-essential \
    libasound2-dev \
    portaudio19-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Abhängigkeiten installieren
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Turn Detector Modell vorab herunterladen
RUN python -c "from livekit.plugins.turn_detector.multilingual import MultilingualModel; MultilingualModel.load()"

# Code kopieren
COPY . .

# Startbefehl: Shell-Form für bessere Kompatibilität mit Koolify
# Build forced: 2026-01-10 - Ensure Turn Detector model is downloaded
CMD python agent.py start
