var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-chpt1",
  "level": "1",
  "url": "sec-chpt1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Chapter 1",
  "body": " Chapter 1  Differential Equations   An equation relating an unknown function and one or more of its derivatives is called a differential equation }(or DE for short).  A DE in one independent variable is called an ordinary differential equation (short, ODE). A DE in several independent variables is called a partial differential equation (or PDE).  The order of a differential equation is the order of the highest derivative of the unknown function in the equation.     Some Examples     is a first-order ODE in independent variable .   is a first-order PDE in two independent variables, and .   is a third-order ODE in independent variable .   is a second-order PDE in three independent variables , and (this is a two-dimensional heat equation ).      Note  The prior examples demonstrate various notations for derivatives.   Recall the following. Let be a function of , so .  For first derivatives, the notations and are equivalent.  For higher order derivatives, the notations and are equivalent.    Let be a function of and . So . Then we may represent the partial derivatives by, for example: or, equivalently    This book only deals with ODEs  For the remainder of this textbook, we will only consider ordinary differential equations.   The most general form of an -order ordinary differential equation with independent variable and unknown function (or dependent variable) is where is a function of the variables.  An -order differential equation solved relative to the highest derivative (which may not be possible) is said to be in standard (or normal ) form: where is a function of the variables .  Thus, in Example the prior examples, is in standard form and is not.   Solution of a Differential Equation   A function is called a solution solution of differential equation on an interval if it is times differentiable on and for all .  The function is also said to satisfy satisfy differential equation on the interval .      For any , the function is a solution of the DE on the interval     "
},
{
  "id": "def-DifferentialEquation",
  "level": "2",
  "url": "sec-chpt1.html#def-DifferentialEquation",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "Differential Equations   An equation relating an unknown function and one or more of its derivatives is called a differential equation }(or DE for short).  A DE in one independent variable is called an ordinary differential equation (short, ODE). A DE in several independent variables is called a partial differential equation (or PDE).  The order of a differential equation is the order of the highest derivative of the unknown function in the equation.   "
},
{
  "id": "example-DEs",
  "level": "2",
  "url": "sec-chpt1.html#example-DEs",
  "type": "Example",
  "number": "1.1.2",
  "title": "Some Examples.",
  "body": " Some Examples     is a first-order ODE in independent variable .   is a first-order PDE in two independent variables, and .   is a third-order ODE in independent variable .   is a second-order PDE in three independent variables , and (this is a two-dimensional heat equation ).    "
},
{
  "id": "note-deriv-notations",
  "level": "2",
  "url": "sec-chpt1.html#note-deriv-notations",
  "type": "Note",
  "number": "1.1.3",
  "title": "Note.",
  "body": " Note  The prior examples demonstrate various notations for derivatives.  "
},
{
  "id": "warning-only-ODEs",
  "level": "2",
  "url": "sec-chpt1.html#warning-only-ODEs",
  "type": "Warning",
  "number": "1.1.4",
  "title": "This book only deals with ODEs.",
  "body": " This book only deals with ODEs  For the remainder of this textbook, we will only consider ordinary differential equations.  "
},
{
  "id": "sec-chpt1-9",
  "level": "2",
  "url": "sec-chpt1.html#sec-chpt1-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard normal "
},
{
  "id": "def-solution",
  "level": "2",
  "url": "sec-chpt1.html#def-solution",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Solution of a Differential Equation.",
  "body": " Solution of a Differential Equation   A function is called a solution solution of differential equation on an interval if it is times differentiable on and for all .  The function is also said to satisfy satisfy differential equation on the interval .   "
},
{
  "id": "example-iex",
  "level": "2",
  "url": "sec-chpt1.html#example-iex",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  For any , the function is a solution of the DE on the interval    "
},
{
  "id": "sec-exercises-chpt1",
  "level": "1",
  "url": "sec-exercises-chpt1.html",
  "type": "Section",
  "number": "1.2",
  "title": "Exercises for Chapter 1",
  "body": " Exercises for Chapter 1   Verify the solution in Example .  Give an example of a differential equation whose solution is on .  Give an example of a differential equation and its solution.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
