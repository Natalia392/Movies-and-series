# Movies-and-series
App where you can register, navigate through movies and series, and save favorites

## Explorar y guardar series y películas

### Proyecto de creación de una página que permite al usuario registrarse e iniciar sesión en una página donde puede explorar series y películas

Este proyecto consiste en el front-end de una página que permite al usuario navegar a través de una página de películas. 
Se utilizó la api de [The Movie db](https://developer.themoviedb.org/docs/getting-started) para la obtención de series y películas.

Por otro lado, para la autenticación de usuarios, se creó un backend con node.js, express, postgre SQL y Sequelize.

El link al repositorio del frontend se puede encontrar [Aquí](https://github.com/Natalia392/Movies-and-series).

Para probar la aplicación, hay que seguir los siguientes pasos:
- Instalar PostreSQL. Aquí hay una guía para instalarla en Windows, que viene con links para instalarla en mac o Linux: [Instalar PostgreSQL](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/)
- Clonar el repositorio de backend y en el terminal, ingresar npm install y luego npm start para iniciar el servidor.
- Abrir postgre y [conectar con la base de datos](https://www.postgresqltutorial.com/postgresql-getting-started/connect-to-postgresql-database/).
- Clonar el repositorio de front-end y en el terminal ingresar npm install y luego npm start para iniciar la aplicación.

Siguiendo estos pasos, se podrá acceder a la interfaz de registro de usuario e inicio de sesión.
Primero hay que registrarse con nombre de usuario y contraseña y luego iniciar sesión.
Se puede navegar o bien por películas o bien por series y se pueden buscar películas o series por nombres.
Los resultados corresponderán a series o películas, dependiendo de si te encuentras en una u otra tab.
Puedes guardar películas (próximamente podrás guardar series, por ahora la característica no está disponible)
Al dar click en el botón de "Mis películas favoritas" se podrá acceder a la lista de películas que has guardado.
Por ahora sólo se pueden ver los ids de las películas guardadas.

Aún queda mucho por mejorar, pero esa es la aplicación al día 11 de marzo de 2024 :)
Aprendí mucho haciendo esta aplicación y comencé a conocer y entender un poquito más sobre cómo crear un backend. 
Sin duda ha resultado desafiante, pero realmente muy entretenido.

¡Muchas gracias!
