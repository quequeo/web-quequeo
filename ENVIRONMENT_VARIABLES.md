# 🔐 Variables de Entorno para Vercel

## Variables Requeridas

Cuando configures tu proyecto en Vercel, necesitas agregar estas variables de entorno:

### 1. REACT_APP_API_BASE_URL

**Descripción**: URL base de tu API backend

**Ejemplo**:
```
https://api.quequeo.com/api
```
o
```
http://localhost:3000/api
```

**¿Dónde encontrarla?**
- Si tu backend está en producción, usa esa URL
- Si aún está en desarrollo local, necesitarás deployar el backend primero o usar una URL temporal

---

### 2. REACT_APP_WEB_QUEQUEO_SECRET_KEY

**Descripción**: Clave secreta para autenticar requests al backend

**Ejemplo**:
```
tu_clave_secreta_super_segura_123
```

**¿Dónde encontrarla?**
- Revisa tu archivo `.env` local actual
- O genera una nueva clave segura para producción

---

## 📝 Cómo Agregar Variables en Vercel

### Opción 1: Durante el Setup Inicial

1. Cuando importes el proyecto, verás la sección "Environment Variables"
2. Haz clic en "Add" para cada variable
3. Ingresa el nombre y valor
4. Selecciona los ambientes: **Production**, **Preview**, **Development**

### Opción 2: Después del Deploy

1. Ve a tu proyecto en Vercel
2. Click en **"Settings"**
3. Click en **"Environment Variables"** en el menú lateral
4. Click en **"Add New"**
5. Ingresa nombre, valor y selecciona ambientes
6. Click en **"Save"**
7. **Importante**: Necesitas hacer un nuevo deploy para que los cambios surtan efecto

---

## 🔄 Actualizar Variables de Entorno

Si necesitas cambiar una variable:

1. Ve a Settings → Environment Variables
2. Encuentra la variable que quieres cambiar
3. Click en los tres puntos (...) → **"Edit"**
4. Actualiza el valor
5. Click en **"Save"**
6. Haz un nuevo deploy o click en **"Redeploy"** en el último deployment

---

## 🌍 Ambientes en Vercel

Vercel tiene 3 tipos de ambientes:

- **Production**: Para tu branch principal (main/master)
- **Preview**: Para pull requests y branches
- **Development**: Para desarrollo local con Vercel CLI

**Recomendación**: Agrega las variables a los 3 ambientes para evitar problemas.

---

## ⚠️ Importante

- ❌ **NUNCA** subas archivos `.env` a GitHub
- ✅ Las variables en Vercel están encriptadas y seguras
- ✅ Cada ambiente puede tener valores diferentes
- ✅ Las variables solo están disponibles en build time (porque es React)

---

## 🔍 Verificar Variables

Para verificar que tus variables están configuradas correctamente:

1. Haz un deploy
2. Revisa los logs del build
3. Si hay errores de "undefined", las variables no están configuradas
4. Verifica que los nombres tengan el prefijo `REACT_APP_`

---

## 📋 Checklist

Antes de deployar, verifica:

- [ ] `REACT_APP_API_BASE_URL` configurada
- [ ] `REACT_APP_WEB_QUEQUEO_SECRET_KEY` configurada
- [ ] Variables agregadas a los 3 ambientes
- [ ] Backend API accesible desde internet
- [ ] CORS configurado en el backend para aceptar el dominio de Vercel

---

## 🆘 Troubleshooting

### "Cannot read property of undefined"
→ Las variables de entorno no están configuradas o tienen nombres incorrectos

### "Network Error" o "Failed to fetch"
→ Verifica que `REACT_APP_API_BASE_URL` sea correcta y que el backend esté corriendo

### "CORS Error"
→ Configura tu backend para aceptar requests desde `https://web-quequeo.vercel.app`

---

¿Necesitas ayuda? Revisa el archivo `DEPLOY_VERCEL.md` para más información.

