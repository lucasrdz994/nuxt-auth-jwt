# nuxt-auth-jwt

Sistema de autenticación de usuarios desarrollado con Nuxt SSR
Permite registrar usuarios mediante email y contraseña, iniciar sesión con la cuenta registrada validando que los datos sean correctos. La validación del usuario se realiza mediante tokens de seguridad que expiran cada 1 hora y se actualizan automáticamente durante 24 horas mediante un Refresh token.

Recursos y utilidades
- Nuxt
  - @nuxt/axios
  - @nuxt/auth
- Buefy
- Express
- MongoDB
- Bcrypt
- Jsonwebtoken

## Build Setup

Es necesario configurar las variables de entorno para `MONGO_URI` y `TOKEN_SECRET`

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

```