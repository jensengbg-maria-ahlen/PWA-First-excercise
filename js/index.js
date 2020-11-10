if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(reg => {
        console.log('Registration succeeded. Scope is ' + reg.scope);
    });
}


const items = [
	{
        name: 'Array length',
        description: 'Get the length of an array',
        category: 'Array',
        code: 'let length = array.length;'
    },
    {
        name: 'For each',
        description: 'Calls a function once for each element in an array, in order',
        category: 'Array', 
        code: 'array.forEach( item => { /* do things with item */ } );'
    },
    {
        name: 'document.querySelector',
        description: 'Väljer alla från ett specifikt element från DOM.',
        category: 'DOM',
        code: `let list = document.querySelectorAll('.list');`
    },
    {
        name: 'document.getElementById',
        description: 'Väljer specifikt ett ID från DOM',
        category: 'DOM',
        code: 'const button = document.getElementById("button");'
    },
    {
        name: 'document.getElementsByClassName',
        description: 'Väljer alla med klassnamnet från DOM',
        category: 'DOM',
        code: 'const ul = document.getElementsByClassName("list");'
    },
    {
        name: 'element.querySelector',
        description: 'Väljer det första elementet som är en ättling till valt element',
        category: 'Element',
        code: 'var container = list.querySelector("#test");'
    },
    {
        name: 'element.addEventListener',
        description: 'Lägga på en händelse på elementet, t.ex ett klick',
        category: 'Element',
        code: 'button.addEventListener("click", event => {});'
    },
    {
        name: 'Window load-händelsen',
        description: 'Något som ska hända när hela sidan laddas om',
        category: 'Window',
        code: 'window.addEventListener("load", (event) => {});'
    },
    {
        name: 'element.innerText',
        description: 'Hämtar och returnerar innehållet i elementet och alla dess ättlingar.',
        category: 'Element',
        code: 'let x = document.getElementById("myBtn").innerText;'
    },
    {
        name: 'element.innerHTML',
        description: 'Ändrar innehållet på valt element till något annat.',
        category: 'Element',
        code: 'let content = button.innerHTML'
    },
    {
        name: 'document.createElement',
        description: 'Skapar upp ett element i DOM',
        category: 'DOM',
        code: 'let button = document.createElement("button")'
    },
    {
        name: 'element.appendChild',
        description: 'Lägga till ett barn till valt element',
        category: 'Element',
        code: 'let button = document.createElement("button")' + 
              'buttonElem.appendChild(button);'
    },
    {
        name: 'Find',
        description: 'Returnera första valda värdet i arrayen',
        category: 'Search',
        code: 'let found = items.find( ({ name }) => name === "for each");'
    },
    {
        name: 'Filter',
        description: 'Skapar en ny array av valda värden, här vill vi bara få ut alla namn som är längre än 10 tecken',
        category: 'Search',
        code: 'let result = items.filter( item => item.length > 10 )'
    },
    {
        name: 'Map',
        description: 'Skapar en ny array genom att omvandla varje element i arrayen',
        category: 'Search',
        code: 'let result = items.map(item => item.name);'
    },
    {
        name: 'Reduce',
        description: 'Jämför värden med varandra och slår ihop dom, tex om vi ska ha en total summa på en hel array',
        category: 'Search',
        code: 'let allItems = items.reduce((acc, item) => acc + item.name.length, 0);'
    },
    {
        name: 'Async',
        description: 'Tillåter att en funktion blir asyncron, dvs. att den kan vänta in annan kod innan den körs vidare.',
        category: 'Function',
        code: 'async function newFunction() {};'
    },
    {
        name: 'Await',
        description: 'Inväntar kod från en annan funktion',
        category: 'Function',
        code: 'let result = await anotherfunction();'
    }
]

const addButton = document.getElementById('addButton');
const inputName = document.getElementById('name');
const inputDescription = document.getElementById('description');
const inputCategory = document.getElementById('category');
const inputCode = document.getElementById('code');



function allItems(value) {
    let ulElem = document.getElementById('list');
    let values = items;

    for(value of values) {
        let liElem = document.createElement("li")
        liElem.innerHTML +=
            '<h2>' + value.name + '</h2>' +
            '<p>' + value.description + '</p>' + 
            '<code>' + value.code + '</code>'
        ulElem.appendChild(liElem);

        //xxx.splice()
    }
}


function addItemToList() {
    addButton.addEventListener('click', () => {
        let newItem = {
            name: inputName.value,
            description: inputDescription.value,
            category: inputCategory.value,
            code: inputCode.value
        }
        items.push(newItem);
        allItems();
    });
}

addItemToList();
allItems();