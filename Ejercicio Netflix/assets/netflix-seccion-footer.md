Por último el footer. Tenemos:

- Un mensaje con ‘¿Preguntas?….’
- Muuuuuuchos enlaces divididos en 4 columnas.

Estructuramos primero el HTML

```html
<footer>
	<p>¿Preguntas? Llama al 900 822 376</p>
	<div>
		<div>
			<a href="#">Preguntas frecuentes</a>
			<a href="#">Inversores</a>
			<a href="#">Formas de ver</a>
			<a href="#">Información corporativa</a>
			<a href="#">Avisos legales</a>
		</div>
    <!-- Resto de columnas con enlaces -->
	</div>
</footer>
```

Aplicamos estilos. Lo importante es ver que necesitamos posicionar en líneas diferentes los enlaces y que el bloque que contiene esos enlaces podemos darle estilo con un display flex.


```html
<footer class="footer">
	<p class="footer-msg">¿Preguntas? Llama al 900 822 376</p>
	<div class="footer-links">
		<div class="footer-links-column">
		  <a class="footer-link" href="#">Preguntas frecuentes</a>
		  <a class="footer-link" href="#">Inversores</a>
		  <a class="footer-link" href="#">Formas de ver</a>
		  <a class="footer-link" href="#">Información corporativa</a>
		  <a class="footer-link" href="#">Avisos legales</a>
		</div>
	</div>	
<!-- Resto de columnas con enlaces -->
</footer>
```

```css
.footer {
  max-width: 900px;
  margin: 50px auto;
}

.footer-msg {
  margin-bottom: 40px;
  color: #737373;
  font-size: 15px;
}

.footer-links{
  display: flex;
}

.footer-links-column{
  margin-right: 98px;
}

.footer-link {
  color: #737373;
  text-decoration: none;
  font-size: 13px;
  display: block;
  margin-bottom: 20px;
}
```
