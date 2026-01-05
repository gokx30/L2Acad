@echo off
echo Starting L2 Academy Local Server...
echo DO NOT CLOSE THIS WINDOW while using the website.
echo.
echo Opening http://localhost:8000 in your browser...
start http://localhost:8000
python -m http.server 8000
pause
