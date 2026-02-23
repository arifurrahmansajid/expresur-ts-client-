@echo off
echo ================================
echo Starting Next.js Development Server
echo ================================
echo.

cd /d "%~dp0"
echo Current directory: %CD%
echo.

echo Installing dependencies (if needed)...
call npm install
echo.

echo Starting Next.js dev server...
echo Server will be available at http://localhost:3000
echo.
call npm run dev

pause
