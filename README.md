<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# TesloDB API


1. Clonar proyecto
2. Instalar dependencias
```
yarn install
```
3. Clonar el archivo del ```env.template``` y renombrarlo por ```.env```
4. Cambiar las varibales de entorno
5. Levantar la base de datos
```
docker compose up -d
```

6. Ejecutar SEED (LLenar la base de datos de información)
```
http://localhost:3000/api/seed
```

7. Levantar en modo desarrollo
```
yarn start:dev
```