# Iniciar el backend y frontend en modo desarrollo
# Este script inicia tanto el servidor backend como el frontend vite

# Instalar dependencias adicionales en el backend
Write-Host "🔧 Instalando dependencias necesarias para manejo de imágenes..." -ForegroundColor Cyan
Set-Location "c:\Users\perxa\Desktop\7mo\EDA2\Estructuras2\Qubo\Backend"
npm install multer cloudinary uuid

# Iniciar el backend (en una nueva ventana)
Write-Host "🚀 Iniciando servidor backend..." -ForegroundColor Green
Start-Process powershell.exe -ArgumentList "-Command", "Set-Location 'c:\Users\perxa\Desktop\7mo\EDA2\Estructuras2\Qubo\Backend' ; npm run dev"

# Volver al directorio raíz
Set-Location "c:\Users\perxa\Desktop\7mo\EDA2\Estructuras2\Qubo\anuel"

# Iniciar el frontend (en la ventana actual)
Write-Host "🚀 Iniciando cliente frontend..." -ForegroundColor Green
npm run dev
