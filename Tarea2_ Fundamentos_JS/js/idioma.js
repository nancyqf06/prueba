


//declaracion de constantes usando el metodo querySelector

//permite guardar el enlace el selecto <a> del html
const link = document.querySelectorAll('a');


const langEl = document.querySelector('.langWrap');
const logoText = document.querySelector('.logoText');
const tp2 = document.querySelector('.tp2');
const menuHome = document.querySelector('.menuHome');
const menuSectionOne = document.querySelector('.menuSectionOne');
const menuSectionTwo = document.querySelector('.menuSectionTwo');
const menuSectionThree = document.querySelector('.menuSectionThree');
const designOne = document.querySelector('.designOne');
const designTwo = document.querySelector('.designTwo');
const designThree = document.querySelector('.designThree');
const viewPdf = document.querySelector('.viewPdf');
const additional = document.querySelector('.additional');
const contact = document.querySelector('.contact');
const description = document.querySelector('.description');
const clickHere = document.querySelector('.clickHere');
const descriptionTwo = document.querySelector('.descriptionTwo');
const clickHereTwo = document.querySelector('.clickHereTwo');
const languageBase = document.querySelector('.languageBase');
const languageHtml = document.querySelector('.languageHtml');
const clickHereThree = document.querySelector('.clickHereThree');
const languageCss = document.querySelector('.languageCss');
const clickHereFour = document.querySelector('.clickHereFour');
const languageJs = document.querySelector('.languageJs');
const clickHereFive = document.querySelector('.clickHereFive');
const rights = document.querySelector('.rights');
const textB= document.querySelector('.textB');



//recorrido del ciclo for-Each usando la funcion flecha
//link parece ser una colección de elementos HTML, obtenida mediante el uso de querySelectorAll.
/*El ciclo forEach se utiliza para aplicar en cada elemento en la colección .
Para cada elemento r, se agrega un event listener que espera un click (addEventListener('click', ...)).*/
/*dentro del addEeventListener, se obtiene el valor del atributo language del elemento actual mediante getAttribute('language') 
y se almacena en la constante attr.*/


link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        //permite acceder a un objeto changeLanguage con diferentes traducciones
        //usando la const de attr, el código accede a las propiedades logoText, tp2 y menuHome del objeto changeLanguage y asi sucesivamente...
        //textContent permite actualizar los contenidos de los elementos HTML        
        logoText.textContent = changeLanguage[attr].logoText;
        tp2.textContent = changeLanguage[attr].tp2;
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuSectionOne.textContent = changeLanguage[attr].menuSectionOne;
        menuSectionTwo.textContent = changeLanguage[attr].menuSectionTwo;
        menuSectionThree.textContent = changeLanguage[attr].menuSectionThree;
        designOne.textContent = changeLanguage[attr].designOne;
        designTwo.textContent = changeLanguage[attr].designTwo;
        designThree.textContent = changeLanguage[attr].designThree;
        viewPdf.textContent = changeLanguage[attr].viewPdf;
        additional.textContent = changeLanguage[attr].additional;
        contact.textContent = changeLanguage[attr].contact;
        description.textContent = changeLanguage[attr].description;
        clickHere.textContent = changeLanguage[attr].clickHere;
        descriptionTwo.textContent = changeLanguage[attr].descriptionTwo;
        clickHereTwo.textContent = changeLanguage[attr].clickHereTwo;
        languageBase.textContent = changeLanguage[attr].languageBase;
        languageHtml.textContent = changeLanguage[attr].languageHtml;
        clickHereThree.textContent = changeLanguage[attr].clickHereThree;
        languageCss.textContent = changeLanguage[attr].languageCss;
        clickHereFour.textContent = changeLanguage[attr].clickHereFour;
        languageJs.textContent = changeLanguage[attr].languageJs;
        clickHereFive.textContent = changeLanguage[attr].clickHereFive;
        rights.textContent = changeLanguage[attr].rights;
        textB.textContent = changeLanguage[attr].textB;
        
    });
});


//objeto de json que asigna los valores a cada clase en español usando el atributo "espanish"
let changeLanguage = {

    "espanish":
    {
        "logoText": "Empresa XYZ",
        "tp2": "DESARROLLO WEB 2023",
        "menuHome": "Inicio",
        "menuSectionOne": "Sección1",
        "menuSectionTwo": "Sección2",
        "menuSectionThree": "Sección3",
        "designOne": "Diseño1",
        "designTwo": "Diseño2",
        "designThree": "Diseño3",
        "viewPdf": "Ver PDF",
        "additional": "Extras",
        "contact": "Contacto",
        "description": "Es un marco de desarrollo que permite crear sitios web responsivos compatibles con dispositivos moviles.",
        "clickHere": "Click aquí",
        "descriptionTwo": "Desarrollo de sitios web responsivos compatibles con dispositivos moviles Smartphone y Tablet.",
        "clickHereTwo": "Click aquí",
        "languageBase": "Lenguajes Base?",
        "languageHtml": "Lenguaje HTML5",
        "clickHereThree": "Click aquí",
        "languageCss": "Lenguaje CSS",
        "clickHereFour": "Click aquí",
        "languageJs": "Lenguaje JAVA SCRIPT",
        "clickHereFive": "Click aquí",
        "rights": "Derechos Reservados",
        "textB": "Tiene distintas opciones de diseños propios sin necesidad de css",
    },

  //objeto de json que asigna los valores a cada clase en ingles usando el atributo "english"
    "english":
    {
        "logoText": "Company XYZ",
        "tp2": "WEB DEVELOPMENT 2023",
        "menuHome": "Home",
        "menuSectionOne": "Section1",
        "menuSectionTwo": "Section2",
        "menuSectionThree": "Section3",
        "designOne": "Design1",
        "designTwo": "Design2",
        "designThree": "Design2",
        "viewPdf": "View PDF",
        "additional": "Additional features",
        "contact": "Contact",
        "description": "It is a development framework that allows you to create responsive websites that are compatible with mobile devices.",
        "clickHere": "Click here",
        "descriptionTwo": "Responsive website development Compatible with Smartphone and Tablet mobile devices.",
        "clickHereTwo": "Click here",
        "languageBase": "Base languages?",
        "languageHtml": "language HTML5",
        "clickHereThree": "Click here",
        "languageCss": "language CSS",
        "clickHereFour": "Click here",
        "languageJs": "language JAVA SCRIPT",
        "clickHereFive": "Click here",
        "rights": "All rights reserved",
        "textB": "It has various options for custom designs without the need for CSS.",
    }
}