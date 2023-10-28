Llega el momento de la sección de FAQs donde vamos a aprender una nueva etiqueta que nos va a permitir hacer el desplegable:

```html
<details>
	<summary>TÍTULO</summary>
	<p>DESCRIPCIÓN</p>
</details>
```

Creamos la estructura de este bloque:

```html
<section>
	<h2>Preguntas frecuentes</h2>
	<details>
	    <summary>¿Qué es Netflix?</summary>
	    <p>Netflix es un servicio de streaming que ofrece una amplia variedad de series, películas, títulos de anime, documentales y otros contenidos premiados en miles de dispositivos conectados a internet.</p>
	    <p>Puedes ver todo el contenido que quieras, cuando quieras y sin un solo anuncio por una tarifa mensual reducida. ¡Siempre hay algo nuevo que descubrir, y cada semana se añaden nuevas series y películas!</p>
	</details>			
	<!-- Maquetamos un desplegable y luego ya añadimos los otros -->
</section>
```

Aplicamos estilos:

```html
<section class="faqs">
	<h2 class="faqs-title">Preguntas frecuentes</h2>
	<details class="faq">
	    <summary>¿Qué es Netflix?</summary>
	    <p>Netflix es un servicio de streaming que ofrece una amplia variedad de series, películas, títulos de anime, documentales y otros contenidos premiados en miles de dispositivos conectados a internet.</p>
	    <p>Puedes ver todo el contenido que quieras, cuando quieras y sin un solo anuncio por una tarifa mensual reducida. ¡Siempre hay algo nuevo que descubrir, y cada semana se añaden nuevas series y películas!</p>
	</details>
</section>
```

```css
.faqs {
  padding: 50px 0;
  border-bottom: 8px solid #222;
}

.faqs-title {
  margin-top: 0;
  font-size: 50px;
  text-align: center;
}

.faq {
  max-width: 900px;
  padding: 20px;
  font-size: 26px;
  background: #333;
  margin: 5px auto; /* auto (pequeño truco para centrar) */
}
```

Creamos el resto de faqs.
