## Portafolio Web | :eye:[Live Preview][v1] 

Pagina web para mostrar todos (o casi todos) mis proyectos : [kevinbasilio.com](https://kevinbasilio.com/)

Tecnologias:
- Angular 16, Bootstrap, HTML, CSS, Javascript, Typescript.

|  |  |
| ----------- | ----------- |
| ![][img_1] | ![][img_2] |

[v1]: https://kevinbasilio.com/
[img_1]: ./src/assets/proyectos/proy_14/p14_img1.webp
[img_2]: ./src/assets/proyectos/proy_14/p14_img2.webp

### Migrate Firebase Hosting to Azure Static Web App

1. Elimina todos los archivos de Firebase dentro de tu proyecto.
2. Crea un Static Web App:  
    a. Free  
    b. Source: github  
    c. Seleccionas tu proyecto  
    d. App location: /  
    e. Api location: NADA  
    f. Output location: dist/algo (el valor esta en tu angular.json / outputPath)  
    g. En la siguiente pagina deployment selecciona token no github  
3. Configura tu dominio:
[Microsoft - Custom Domain External](https://learn.microsoft.com/en-us/azure/static-web-apps/custom-domain-external)
4. Eliminar proyecto en Firebase, dentro del proyecto entras en configuracion y la remueves.
5. Agregar Google Analytics:
    a. Creas un ACCOUNT, luego una PROPERTIE, y luego un STREAM con un nombre (tu app web, movil, etc).
    b. Te proporcionara un script que tendras que agregar a tu proyecto y listo.