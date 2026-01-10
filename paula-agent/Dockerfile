FROM python:3.11-slim

# System-Abhängigkeiten für Audio/Video-Verarbeitung
RUN apt-get update && apt-get install -y \
    build-essential \
    libasound2-dev \
    portaudio19-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 1. Abhängigkeiten installieren
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 2. Den gesamten Code kopieren
COPY . .

# 3. KI-Modelle vorab laden (verhindert Download-Fehler zur Laufzeit)
RUN python agent.py download-files

# Startbefehl: Zurück zum Worker-Modus.
# Die Metadaten im Token-Service ("agent: true") sollten den Dispatch auslösen.
CMD ["python", "agent.py", "start"]