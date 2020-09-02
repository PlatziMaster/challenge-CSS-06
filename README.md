reto flexbox 06

<!DOCToYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>flexboxRetos6</title>
       <style>
            .container
            {
                color:#abc0d4;
                background-color:white;
                display: flex;
                flex-direction: column;
                height: 235px;
                width: 300px;
                border-radius: 10px;
                border: 1px solid black;
		box-shadow: 0 0 10px;
            }
            h4 strong
            {
                color:#026fff;
                margin: 40px;
            }
            h3
            {
                color:rgb(116,30,240);
            }
            .top
            {
                display: flex;
                justify-content: flex-start;
            }
            .mid
            {
                display: flex;
                justify-content: center;
            }
            .agreement
            {
                display: flex;
                justify-content: space-around;
            }
       </style>
    </head>
 <body>
    <div class="container">
            <div class="top">
                <h4>
                    <strong>location service?</strong>
                </h4>
            </div>
            <div class="mid">
                <p>
                    let us help apps determine <br>location. this means sending <br> anonymous location data to us, <br> even when no apps are running
                </p>
            </div>
            <div class="agreement">
                    <h3>
                        Disagree
                    </h3>
                    <h3>
                        Agree
                    </h3>
            </div>
    </div>
 </body>
</html>

# 🐸 Challenge CSS 06

Flexbox: Dialogs

## 🐸 ¿En qué consiste?

La idea de este reto es que repliques el siguiente componente usando Flexbox. En Flexbox tenemos diferentes propiedades para los elementos padres y para los elementos hijos, por lo que la clave principal para resolver este reto es poder identificar qué elementos tenemos y que "rol" juegan, para así, identificar qué propiedades se le deben aplicar (recueda que hay hijos que también son padres).

<kbd>
<img width="500" src="https://i.ibb.co/BsH6Xb5/4.png" alt="componente para replicar" />
</kbd>

> [Fuente de la imagen | Material Design](https://material.io/components/dialogs)

Te dejo la siguiente documentación útil para resolver el reto:

* [Flexbox Froggy | Juego](http://flexboxfroggy.com/#es)
* [A guide to Flexbox | CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flexbox in CSS | CSS Reference](https://cssreference.io/flexbox/)
* [Flexbox help](https://flexbox.help/)

## 🐸 Pasos a seguir:

1. Hacer un "Fork" de este proyecto.
2. Revolver el reto.
3. Crear un Pull Request hacia este repositorio.

## 🐸 ¿Cómo contribuir?

Si quieres agregar o mejorar algo, te invito a colaborar directamente en este repositorio: [challenge-html-07](https://github.com/platzimaster/challenge-html-07/)

## 🐸 Licencia

challenge-html-06 se lanza bajo la licencia [MIT](https://opensource.org/licenses/MIT).
