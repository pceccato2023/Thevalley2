Toca ahora crear la estructura de nuestros banners:

Identificamos en cada uno de los cuatro banners:

- un bloque con un título y un texto
- Una imagen

```html
<section>
      <div>
          <h3>Disfruta de Netflix en tu TV.</h3>
          <p>Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores Blu-ray y muchos más.</p>
      </div>
      <img src="./assets/banner-1.png" alt="">
</section>
```

Le asignamos estilos:

```html
<section class="banner">
      <!-- metemos un div para limitar el ancho y que flex no nos ponga todos los textos en una linea -->
      <div class="banner-info">
            <h3 class="banner-title">Disfruta de Netflix en tu TV.</h3>
            <p class="banner-text">Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores Blu-ray y muchos más.</p>
      </div>
      <img class="banner-image" src="./assets/banner-1.png" alt="">
</section>
```

```css
.banner {
  display: flex;
  justify-content: center;
  padding: 70px 0;
  border-bottom: 8px solid #222;
  align-items: center;
}

.banner-info {
  max-width: 500px;
  margin: 0px 70px;
}

.banner-title {
  font-size: 50px;
  margin-top: 0px;
}

.banner-text {
  font-size: 26px;
}

.banner-image {
  width: 500px;
  height: auto;
  /* podemos añadir también padding a la imagen */
}
```

A partir de aquí podemos crear los otros 3 banners que tienen la misma estructura salvo el posicionamiento de las imagenes en el segundo y el cuarto banner.
