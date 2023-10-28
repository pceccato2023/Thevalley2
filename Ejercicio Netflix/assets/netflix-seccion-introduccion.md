Empezamos con el primer bloque. Ya tenemos creado nuestro proyecto y nuestros archivos HTML y CSS preparados.

Lo primero que haremos será crear una sección que contenga:

- Header, donde incluiremos el logo y el botón de iniciar sesión.
- H1 con el título “Todas las películas y series que desees, y mucho más.”
- H2 con el subtítulo “Disfruta donde quieras. Cancela cuando quieras.”
- P con el texto “¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.”
- FORM con el INPUT para introducir el email y el INPUT del botón

 

```html
<section>
        <header>
            <img src="./assets/logo.png" alt="Logo Netflix">
            <button>Iniciar sesión</button>
        </header>

        <h1>Todas las películas y series que desees, y mucho más.</h1>
        <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
        <p>¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</p>

        <form action="">
            <input type="text" name="" id="" placeholder="Dirección de correo">
            <input type="button" value="Empezar >">
        </form>
</section>
```

 

Tras estructurar la sección vamos a empezar a aplicarle estilos. Después del análisis que hemos hecho nos fijamos:

- En que los textos de toda la web están en blanco.
- Que el fondo, salvo la imagen de esta primera sección es negro.
- Que la letra se parece más a una sans-serif que a la que tiene por defecto.

Este tipo de propiedades se heredan, por lo que podemos ponerle al padre estas propiedades y las tendrán sus hijos. Así que se las asignamos al body:

```css
body {
  background: #000;
  color: #fff;
  font-family: sans-serif;
}
```

Ya podemos seguir con nuestra sección. Creamos una clase para ella con el objetivo de poner la imagen de fondo y ya de paso alineamos los textos al centro y ponemos el border-bottom de la sección:

```css
.intro {
  background-image: url("./assets/fondo.png");
  background-size: cover;
  text-align: center; /* Asi alineamos todos los textos de dentro */
  border-bottom: 8px solid #222; /* */ 
}
```

 

```html
<section class="intro">
        <header>
            <img src="./assets/logo.png" alt="Logo Netflix">
            <button>Iniciar sesión</button>
        </header>

        <h1>Todas las películas y series que desees, y mucho más.</h1>
        <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
        <p>¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</p>

        <form action="">
            <input type="text" name="" id="" placeholder="Dirección de correo">
            <input type="button" value="Empezar >">
        </form>
</section>
```

 

Vamos ahora con el HEADER. Tenemos que 

- Adaptar el tamaño del logo
- Dar formato al botón
- Posicionarlos uno a cada lado y centrados horizontalmente.

 

```css
.header {
  padding: 40px;
  display: flex;
  /* Para que no tengan todos los hijos la misma altura y salgan centrados verticalmente */
  align-items: center;
  /* para separar los elementos a la izquierda y derecha con espacio en medio */
  justify-content: space-between;
}

.logo {
  width: 170px;
  height: auto;
}

.login-button {
  background: #e50914;
  border-radius: 5px;
  padding: 7px 17px;
  border: none;
  color: #fff;
  font-size: 16px;
}
```

 

```html
<section class="intro">
        <header class="header">
            <img class="logo" src="./assets/logo.png" alt="Logo Netflix">
            <button class="login-button">Iniciar sesión</button>
        </header>

        <h1>Todas las películas y series que desees, y mucho más.</h1>
        <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
        <p>¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</p>

        <form action="">
            <input type="text" name="" id="" placeholder="Dirección de correo">
            <input type="button" value="Empezar >">
        </form>
</section>
```

 

Vamos ahora a retocar el tamaño de los títulos y textos. Aprovechamos también para fijarles un ancho máximo, utilizando el truco de margin auto para centrarlos horizontalmente en la página.

```css
.intro-title {
  font-size: 64px;
  max-width: 700px;
  margin: 30px auto; /* auto (pequeño truco para centrar) */
}

.intro-subtitle {
  font-size: 26px;
  max-width: 700px;
  margin: 30px auto; /* auto (pequeño truco para centrar) */
}

.intro-text {
  font-size: 16px;
  max-width: 800px;
  margin: 30px auto; /* auto (pequeño truco para centrar) */
}
```

 

```html
<section class="intro">
        <header class="header">
            <img class="logo" src="./assets/logo.png" alt="Logo Netflix">
            <button class="login-button">Iniciar sesión</button>
        </header>

        <h1 class="intro-title">Todas las películas y series que desees, y mucho más.</h1>
        <h2 class="intro-subtitle">Disfruta donde quieras. Cancela cuando quieras.</h2>
        <p class="intro-text">¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</p>

        <form action="">
            <input type="text" name="" id="" placeholder="Dirección de correo">
            <input type="button" value="Empezar >">
        </form>
</section>
```

 

Por último maquetamos el formulario:

```css
.subscribe-form {
  max-width: 600px;
  display: flex;
  justify-content: center;
  margin: 30px auto; /* auto (pequeño truco para centrar) */
}

.subscribe-input {
  background: #fff;
  color: #8c8c8c;
  border: none;
  padding: 20px 5px;
  font-size: 16px;
  width: 500px;
}

.subscribe-button {
  background: #e50914;
  padding: 7px 17px;
  border: none;
  color: #fff;
  font-size: 30px;
}
```

 

```html
<section class="intro">
        <header class="header">
            <img class="logo" src="./assets/logo.png" alt="Logo Netflix">
            <button class="login-button">Iniciar sesión</button>
        </header>

        <h1 class="intro-title">Todas las películas y series que desees, y mucho más.</h1>
        <h2 class="intro-subtitle">Disfruta donde quieras. Cancela cuando quieras.</h2>
        <p class="intro-text">¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</p>

        <form class="subscribe-form" action="">
            <input class="subscribe-input" type="text" name="" id="" placeholder="Dirección de correo">
            <input class="subscribe-button" type="button" value="Empezar >">
        </form>
</section>
```

 
