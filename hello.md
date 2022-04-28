<!-- HEADINGS -->

# mi titulo  h1  con # mi titulo h1
## mi titulo h2 salio con  : "## mi titulo h2"
##### mi titulo h4  salio con : "# mi titulo h4" 
tantas # como numero h quieras escribir

<!-- ITALICA -->
this is an *italic* text
this is an **strong text**

this is an ~~text~~ tachado

<!-- ul -->
* apple
* orange
* etc

1. apple
2. orange
3. etc


<!-- meter un item en un ul -->
## Meter un item dentro de una lista
* apple
    * item
    * otro item
* orange
* etc

1. apple
    1. otra tipo
    2. otra mas
2. orange
3. etc

<!-- links   -->
[google](http://google.com "titulo a mostrarse") 
[google](http://google.com "titulo")


>esto es una cita

## para separar :
---
___ 

`console.log("hello world");`
```javascript
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
  
const rta1 = orders.map(order => order.customerName);
const rta2 = orders.map(order => {
    order.tax = .19*order.total;
     return order});
const rta3 = orders.map(order => {
    return {...order, tax: .19*order.total}
})
```

## tabla:
|Tables     | Area  | Cool  |
|-          |-      |-      | 
|col 3 is|Area| Cool|
|leonardo|moreno|faberon|


Xavier López 🇸🇻, [27/04/2022 01:16]
<!-- tablas -->
|Nomres|Apellidos|Celulares|
|-|-|-|
|Xavier|Lopez|0101-0101|
|Leonardo|Faberón|1010-1010|

![visual](img/imagendeVSCode.png "hola")
![visual]()


[youtube](https://www.youtube.com/watch?v=oxaH9CFpeEE&ab_channel=FaztCode "youtube")


- [x] opcion1
- []  opcion2
- []  opcion3
- []  opcion4
- []  opcion5