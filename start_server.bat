::This is to run it on your own!


@echo off
cd %~dp0

start "" "http://localhost:8000"
python -m http.server 8000 


pause
