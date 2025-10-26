# 🚀 Guía de Deployment en Vercel

## ¿Por qué Vercel?

- ✅ **Gratis** para proyectos personales (mucho más económico que AWS EC2)
- ✅ **Deploy automático** con cada push a GitHub
- ✅ **CDN global** incluido
- ✅ **HTTPS** automático
- ✅ **Preview deployments** para cada PR
- ✅ **Sin configuración de servidores**

---

## 📋 Pasos para Deployar

### 1. Preparar tu Repositorio

Tu código ya está listo! Los archivos necesarios ya fueron creados:
- ✅ `vercel.json` - Configuración de Vercel
- ✅ `.vercelignore` - Archivos a ignorar

### 2. Subir Cambios a GitHub

```bash
# Asegúrate de que todos los cambios estén en GitHub
git add .
git commit -m "Configuración para Vercel"
git push origin main
```

### 3. Crear Cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Sign Up"
3. Selecciona "Continue with GitHub"
4. Autoriza a Vercel para acceder a tus repositorios

### 4. Importar tu Proyecto

1. En el dashboard de Vercel, haz clic en **"Add New Project"**
2. Busca y selecciona el repositorio `web-quequeo`
3. Haz clic en **"Import"**

### 5. Configurar el Proyecto

Vercel detectará automáticamente que es una app React. Verifica que:

- **Framework Preset**: `Create React App`
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### 6. Agregar Variables de Entorno

**MUY IMPORTANTE**: Antes de deployar, agrega tus variables de entorno:

1. En la sección "Environment Variables", agrega:

   ```
   REACT_APP_API_BASE_URL
   ```
   Valor: La URL de tu backend API (ej: `https://api.tudominio.com/api`)

   ```
   REACT_APP_WEB_QUEQUEO_SECRET_KEY
   ```
   Valor: Tu clave secreta actual

2. Asegúrate de seleccionar todos los ambientes: **Production**, **Preview**, y **Development**

### 7. Deploy!

1. Haz clic en **"Deploy"**
2. Espera 2-3 minutos mientras Vercel construye tu app
3. ¡Listo! Tu app estará disponible en una URL como:
   ```
   https://web-quequeo.vercel.app
   ```

---

## 🔄 Deployments Automáticos

Desde ahora:

- **Push a `main`** → Deploy automático a producción
- **Pull Request** → Preview deployment con URL única
- **Rollback** → Puedes volver a versiones anteriores con un clic

---

## 🌐 Agregar Dominio Personalizado (Opcional)

Si tienes un dominio propio:

1. Ve a tu proyecto en Vercel
2. Click en **"Settings"** → **"Domains"**
3. Agrega tu dominio (ej: `quequeo.com`)
4. Configura los DNS según las instrucciones:
   - Tipo: `A` o `CNAME`
   - Valor: El que Vercel te indique
5. Espera la propagación DNS (5-30 minutos)

---

## 🛠️ Comandos Útiles

### Ver logs en tiempo real
```bash
vercel logs
```

### Deployar desde la terminal
```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy a preview
vercel

# Deploy a producción
vercel --prod
```

### Ver todas tus deployments
```bash
vercel ls
```

---

## 📊 Comparación de Costos

| Servicio | Costo Mensual |
|----------|---------------|
| AWS EC2 (t2.micro) | ~$10-15 USD |
| Vercel (Hobby) | **$0 USD** |
| Vercel (Pro) | $20 USD (solo si necesitas más) |

**Plan Hobby incluye:**
- 100 GB bandwidth
- Deployments ilimitados
- Dominios personalizados
- HTTPS automático

---

## ❓ Troubleshooting

### Error: "Build failed"
- Verifica que `npm run build` funcione localmente
- Revisa los logs en Vercel para ver el error específico

### Error: "API calls failing"
- Verifica que las variables de entorno estén configuradas correctamente
- Asegúrate de que tu backend API acepte requests desde el dominio de Vercel

### Error: "404 on refresh"
- Ya está solucionado con el `vercel.json` que creamos
- Todas las rutas redirigen a `index.html` para que React Router funcione

### CORS errors
- Configura tu backend para aceptar requests desde tu dominio de Vercel
- Agrega `https://web-quequeo.vercel.app` a los orígenes permitidos

---

## 📞 Soporte

- [Documentación de Vercel](https://vercel.com/docs)
- [Comunidad de Vercel](https://github.com/vercel/vercel/discussions)
- [Discord de Vercel](https://vercel.com/discord)

---

## ✅ Checklist Final

Antes de deployar, asegúrate de:

- [ ] Código subido a GitHub
- [ ] Variables de entorno listas
- [ ] Backend API accesible desde internet
- [ ] CORS configurado en el backend
- [ ] `npm run build` funciona localmente

---

¡Listo! Tu app estará en producción en minutos y sin costo alguno. 🎉

