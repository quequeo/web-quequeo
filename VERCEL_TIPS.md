# 💡 Tips y Mejores Prácticas para Vercel

## 🚀 Optimizaciones de Performance

### 1. Imágenes Optimizadas

Tu carpeta `public/` tiene varias imágenes. Para mejorar el rendimiento:

```bash
# Considera usar formatos modernos como WebP
# Comprime las imágenes antes de subirlas
```

**Herramientas recomendadas**:
- [TinyPNG](https://tinypng.com/) - Compresión de imágenes
- [Squoosh](https://squoosh.app/) - Conversión a WebP

### 2. Code Splitting

React ya hace code splitting automáticamente, pero puedes mejorarlo:

```javascript
// Lazy loading de componentes
import React, { lazy, Suspense } from 'react';

const WorkExperience = lazy(() => import('./pages/WorkExperience'));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <WorkExperience />
    </Suspense>
  );
}
```

### 3. Caché de Dependencias

Vercel cachea automáticamente `node_modules`, pero puedes optimizarlo:

```json
// En vercel.json, ya configurado:
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ]
}
```

---

## 🔒 Seguridad

### 1. Variables de Entorno

✅ **NUNCA** expongas claves secretas en el código
✅ Usa variables de entorno para todo lo sensible
✅ Rota las claves regularmente

### 2. CORS en el Backend

Asegúrate de que tu backend solo acepte requests desde dominios conocidos:

```javascript
// Ejemplo en Express.js
const allowedOrigins = [
  'https://web-quequeo.vercel.app',
  'https://tudominio.com',
  'http://localhost:3001' // solo para desarrollo
];
```

---

## 📊 Monitoreo

### 1. Analytics de Vercel

Vercel ofrece analytics gratuitos:

1. Ve a tu proyecto
2. Click en "Analytics"
3. Activa "Web Analytics"

Verás:
- Visitantes únicos
- Page views
- Tiempo de carga
- Core Web Vitals

### 2. Logs en Tiempo Real

```bash
# Instala Vercel CLI
npm install -g vercel

# Ver logs
vercel logs [deployment-url]
```

---

## 🌐 Dominios y DNS

### Configurar Dominio Personalizado

**Opción 1: Dominio comprado en otro registrar**

1. Ve a Settings → Domains en Vercel
2. Agrega tu dominio
3. Configura estos DNS records:

```
Tipo: A
Nombre: @
Valor: 76.76.21.21

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

**Opción 2: Comprar dominio en Vercel**

1. Ve a Settings → Domains
2. Click en "Buy a domain"
3. Vercel configura todo automáticamente

---

## 🔄 CI/CD y Workflows

### Preview Deployments

Cada PR genera un preview deployment automático:

```bash
# URL de preview
https://web-quequeo-git-[branch-name]-[tu-usuario].vercel.app
```

**Ventajas**:
- ✅ Prueba cambios antes de mergear
- ✅ Comparte con el equipo
- ✅ No afecta producción

### Protección de Branch

Recomendación en GitHub:

1. Settings → Branches → Add rule
2. Branch name pattern: `main`
3. Activa:
   - ✅ Require pull request reviews
   - ✅ Require status checks (Vercel)

---

## 💰 Límites del Plan Gratuito

**Plan Hobby (Gratis)**:
- ✅ 100 GB bandwidth/mes
- ✅ Deployments ilimitados
- ✅ 100 GB-hours serverless execution
- ✅ 1 concurrent build

**¿Cuándo actualizar a Pro ($20/mes)?**
- Si superas 100 GB bandwidth
- Si necesitas más de 1 build concurrente
- Si necesitas analytics avanzados
- Si necesitas protección DDoS

---

## 🐛 Debugging

### Ver Logs de Build

1. Ve a tu proyecto en Vercel
2. Click en el deployment
3. Click en "Building"
4. Revisa los logs completos

### Errores Comunes

**"Module not found"**
```bash
# Limpia cache y reinstala
rm -rf node_modules package-lock.json
npm install
npm run build
```

**"Build exceeded maximum duration"**
- Optimiza el build
- Reduce dependencias innecesarias
- Considera actualizar a Pro

**"Environment variable undefined"**
- Verifica que estén configuradas en Vercel
- Deben tener el prefijo `REACT_APP_`
- Haz redeploy después de agregar variables

---

## 🎯 Mejores Prácticas

### 1. Branches Strategy

```
main → Producción (auto-deploy)
develop → Preview (auto-deploy)
feature/* → Preview (auto-deploy)
```

### 2. Semantic Versioning

```bash
git tag v1.0.0
git push origin v1.0.0
```

### 3. Rollback Rápido

Si algo sale mal:
1. Ve a Deployments
2. Encuentra el último deployment estable
3. Click en "..." → "Promote to Production"

---

## 📱 PWA (Progressive Web App)

Tu app ya tiene `manifest.json`. Para mejorarla:

1. Agrega Service Worker
2. Configura offline support
3. Optimiza para instalación

```javascript
// En src/index.js
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Cambia de unregister() a register()
serviceWorkerRegistration.register();
```

---

## 🔗 Recursos Útiles

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs) (si migras a Next.js)
- [Vercel Discord](https://vercel.com/discord)
- [Vercel GitHub](https://github.com/vercel/vercel)

---

## ✅ Checklist Post-Deploy

Después de deployar, verifica:

- [ ] App carga correctamente
- [ ] Todas las rutas funcionan
- [ ] API calls funcionan
- [ ] Imágenes se cargan
- [ ] Dark mode funciona
- [ ] Responsive design OK
- [ ] No hay errores en consola
- [ ] Performance es buena (Lighthouse)
- [ ] SEO básico configurado

---

## 🎉 ¡Felicidades!

Tu app está en producción sin costo y con deploy automático. Ahora puedes enfocarte en desarrollar features en lugar de administrar servidores. 🚀

