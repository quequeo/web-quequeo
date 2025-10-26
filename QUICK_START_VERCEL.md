# ⚡ Quick Start - Deploy en Vercel

## 🎯 Pasos Rápidos (5 minutos)

### 1️⃣ Sube los cambios a GitHub
```bash
git add .
git commit -m "Configuración para Vercel"
git push origin main
```

### 2️⃣ Ve a Vercel
👉 [vercel.com](https://vercel.com) → Sign up con GitHub

### 3️⃣ Importa el proyecto
- Click en "Add New Project"
- Selecciona `web-quequeo`
- Click en "Import"

### 4️⃣ Agrega Variables de Entorno
Antes de deployar, agrega estas 2 variables:

```
REACT_APP_API_BASE_URL = [URL de tu backend]
REACT_APP_WEB_QUEQUEO_SECRET_KEY = [Tu clave secreta]
```

### 5️⃣ Deploy!
Click en "Deploy" y espera 2-3 minutos.

---

## ✅ ¡Listo!

Tu app estará en: `https://web-quequeo.vercel.app`

---

## 📚 Más Información

- **Guía completa**: Ver `DEPLOY_VERCEL.md`
- **Variables de entorno**: Ver `ENVIRONMENT_VARIABLES.md`
- **Documentación oficial**: [vercel.com/docs](https://vercel.com/docs)

---

## 💰 Costo

**$0 USD** con el plan gratuito (Hobby)

Incluye:
- ✅ Deployments ilimitados
- ✅ 100 GB bandwidth
- ✅ HTTPS automático
- ✅ Dominio personalizado
- ✅ Preview deployments

---

## 🔄 Desde Ahora

Cada vez que hagas `git push` a `main`, Vercel deployará automáticamente! 🚀

