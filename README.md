# Weather Web

Este proyecto es una aplicación web sencilla que permite consultar el clima actual de una ciudad específica, seleccionando el país correspondiente. Utiliza la API de OpenWeatherMap para obtener los datos meteorológicos en tiempo real.

## ¿Qué hace?

- Permite al usuario ingresar el nombre de una ciudad y seleccionar un país de una lista.
- Consulta la temperatura actual, máxima y mínima de la ciudad ingresada.
- Muestra los resultados en grados Celsius.
- Si la ciudad no existe o hay un error en la consulta, muestra un mensaje de error amigable.
- Incluye un spinner de carga mientras se obtienen los datos.

## ¿Cómo se hizo?

- **HTML**: Estructura principal de la aplicación, con un formulario para ingresar la ciudad y seleccionar el país.
- **CSS**: Se usaron estilos personalizados y la librería Tailwind CSS para el diseño y la disposición responsiva. Además, se incluyeron fuentes personalizadas (Geist-Regular y Geist-Bold).
- **JavaScript**: Toda la lógica de validación de formularios, consumo de la API y renderizado dinámico de resultados se encuentra en `scripts/script.js`.
- **API**: Se utiliza la API pública de OpenWeatherMap para obtener los datos del clima.
- **Recursos**: El proyecto incluye imágenes (favicon) y fuentes personalizadas para mejorar la apariencia visual.

Este proyecto fue realizado con tecnologías web puras (HTML, CSS, JS) y está pensado como ejemplo educativo o base para proyectos más avanzados de consumo de APIs.
