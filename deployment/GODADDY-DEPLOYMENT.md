# Despliegue completo en GoDaddy

## Requisito del alojamiento

Este paquete está preparado para **GoDaddy Node.js Hosting** y requiere Node.js
22.13 o superior. No se debe extraer directamente en `public_html` de un plan
Managed WordPress o de un hosting cPanel tradicional: la aplicación necesita
un proceso Node.js activo.

Si el producto actual no muestra una sección **Node.js Hosting**, conserve el
WordPress vigente y active Node.js Hosting en GoDaddy antes de continuar. Una
alternativa es un VPS; convertir el proyecto a HTML estático sería un trabajo
distinto.

## Archivos preparados

- Paquete: `promotora-senderos-godaddy-node.zip`
- Entrada: `server.js`
- Comando de compilación: `npm run build`
- Comando de inicio: `npm start`
- Puerto: la aplicación usa automáticamente `process.env.PORT`.

## 1. Respaldo del sitio vigente

Antes de modificar el dominio:

1. En GoDaddy, abra el producto actual y cree/descargue un respaldo completo.
2. Si el sitio actual es WordPress, descargue tanto los archivos como la base de
   datos. Un respaldo de archivos sin la base de datos no permite una
   restauración completa.
3. Anote o capture los DNS actuales: registros `A`, `CNAME`, `MX`, `TXT` y
   cualquier subdominio.
4. No elimine el alojamiento ni la base de datos anteriores durante el
   lanzamiento.

## 2. Cargar el sitio nuevo sin afectar producción

1. Entre a GoDaddy y abra **Node.js Hosting**.
2. Cree una aplicación o seleccione la aplicación de prueba.
3. Cargue `promotora-senderos-godaddy-node.zip`.
4. Configure:
   - Node.js: 22.13 o superior.
   - Build command: `npm run build`.
   - Start command: `npm start`.
5. Espere a que el estado indique que la aplicación está activa.
6. Abra primero la URL de vista previa de GoDaddy. No asigne todavía el dominio
   principal.

## 3. Lista de verificación en la URL de vista previa

Compruebe en computador y teléfono:

- `/`, `/nosotros`, `/proyectos`, `/enfoque-vis`, `/servicios`,
  `/sostenibilidad`, `/novedades` y `/contacto`.
- Logo, favicon, menús, navegación móvil y pie de página.
- Todas las galerías y animaciones de proyectos.
- Enlaces de WhatsApp, correo, Google Maps y Waze.
- Formulario de contacto. Verifique a qué servicio se envían los datos; si el
  formulario es solamente visual, no anuncie recepción de mensajes.
- Ausencia de errores 404 en imágenes o recursos.
- Respuesta correcta al recargar directamente una ruta interna.

## 4. Cambio del dominio

Programe el cambio en un horario de poco tráfico:

1. En Node.js Hosting, use **Publish** o **Custom domain**.
2. Agregue `promotorasenderos.com` y `www.promotorasenderos.com`.
3. Siga exactamente los registros DNS que muestre GoDaddy para esa aplicación.
4. No cambie ni borre registros `MX`, `TXT`, SPF, DKIM o DMARC; pertenecen al
   correo y no al sitio web.
5. Active/verifique SSL para ambos nombres.
6. Defina un nombre canónico (recomendado: `https://www.promotorasenderos.com`)
   y redirija HTTP a HTTPS y el otro nombre hacia el canónico.

## 5. Validación posterior

Después de publicar:

1. Abra el sitio desde datos móviles y desde otra red.
2. Revise `https://promotorasenderos.com` y
   `https://www.promotorasenderos.com`.
3. Repita la lista de rutas y acciones de la vista previa.
4. Confirme que el correo corporativo continúa enviando y recibiendo.
5. Revise los logs de Node.js Hosting por errores 5xx.
6. Conserve el alojamiento anterior y el respaldo por al menos 7 días.

## 6. Reversión

Si aparece un problema crítico:

1. Quite temporalmente el dominio personalizado de la aplicación nueva o
   restaure los registros `A`/`CNAME` anotados.
2. Vuelva a conectar el dominio al alojamiento anterior.
3. Si el contenido antiguo fue alterado, restaure archivos y base de datos.
4. No cambie los registros de correo durante la reversión.

## Actualizaciones futuras

Cada nueva versión debe pasar por: `npm run build`, prueba local, regeneración
del paquete standalone, carga a una vista previa y publicación solamente
después de aprobar la lista de verificación.
