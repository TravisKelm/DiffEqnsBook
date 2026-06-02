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
  "body": " Chapter 1  Differential Equations   An equation relating an unknown function and one or more of its derivatives is called a differential equation (or DE for short).  A DE in one independent variable is called an ordinary differential equation (short, ODE). A DE in several independent variables is called a partial differential equation (or PDE).  The order of a differential equation is the order of the highest derivative of the unknown function in the equation.     Examples of Differential Equations     is a first-order ODE in independent variable .   is a first-order PDE in two independent variables, and .   is a third-order ODE in independent variable .   is a second-order PDE in three independent variables , and (this is a two-dimensional heat equation ).      Notations for Derivatives  The prior examples demonstrate various notations for derivatives.   Recall the following. Let be a function of , so .  For first derivatives, the notations and are equivalent.  For higher order derivatives, the notations and are equivalent.    Let be a function of and . So . Then we may represent the partial derivatives by, for example: or, equivalently    This book only deals with ODEs  For the remainder of this textbook, we will only consider ordinary differential equations.   The most general form of an -order ordinary differential equation with independent variable and unknown function (or dependent variable) is where is a function of the variables.  An -order differential equation solved relative to the highest derivative (which may not be possible) is said to be in standard (or normal ) form: where is a function of the variables .  Thus, in the prior examples, is in standard form and is not.   Solution of a Differential Equation   A function is called a solution solution of differential equation on an interval if it is times differentiable on and for all .  The function is also said to satisfy satisfy differential equation on the interval .      For any , the function is a solution of the DE on the interval     "
},
{
  "id": "def-DifferentialEquation",
  "level": "2",
  "url": "sec-chpt1.html#def-DifferentialEquation",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "Differential Equations   An equation relating an unknown function and one or more of its derivatives is called a differential equation (or DE for short).  A DE in one independent variable is called an ordinary differential equation (short, ODE). A DE in several independent variables is called a partial differential equation (or PDE).  The order of a differential equation is the order of the highest derivative of the unknown function in the equation.   "
},
{
  "id": "example-DEs",
  "level": "2",
  "url": "sec-chpt1.html#example-DEs",
  "type": "Example",
  "number": "1.1.2",
  "title": "Examples of Differential Equations.",
  "body": " Examples of Differential Equations     is a first-order ODE in independent variable .   is a first-order PDE in two independent variables, and .   is a third-order ODE in independent variable .   is a second-order PDE in three independent variables , and (this is a two-dimensional heat equation ).    "
},
{
  "id": "note-deriv-notations",
  "level": "2",
  "url": "sec-chpt1.html#note-deriv-notations",
  "type": "Note",
  "number": "1.1.3",
  "title": "Notations for Derivatives.",
  "body": " Notations for Derivatives  The prior examples demonstrate various notations for derivatives.  "
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
  "body": " Exercises for Chapter 1   Verify the solution in .  Give an example of a differential equation whose solution is .  Give an example of a differential equation and its solution.   "
},
{
  "id": "sec-Intro-to-first-order",
  "level": "1",
  "url": "sec-Intro-to-first-order.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to First-Order Differential Equations",
  "body": " Introduction to First-Order Differential Equations   Particular, General, and Singular Solutions   Particular, General, and Singular Solutions   A function is said to be a solution of differential equation on an interval provided it is differentiable on and   A one-parameter family of solutions of differential equation containing an arbitrary constant is called a general solution .  Any particular choice of a specific value for yields a particular solution .  A first-order differential equation may have both a general solution involving an arbitrary constant and particular solutions that cannot be obtained from it by any choice of . Such exceptional solutions are called singular solutions (see Examples in Section ).  To solve is to find all of its solutions.     Since a differentiable function is necessarily continuous, every solution of on an interval must be continuous on .   For a first-order equation of the form   where is a continuous function on an interval , a general solution on is   where is an antiderivative of on . By the Fundamental Theorem of Calculus (see, e.g., ), we can set   where is a fixed point in .     The one-parameter family ( ) is a general solution of the equation.   on .    The one-parameter family ( ) is the general solution of the equation.   on each of the intervals and .       Initial Value Problems    Initial Value Problem  A first-order differential equation is often accompanied by a condition of the form:   where and are specified values. Such a condition is called an initial condition (IC) and such a problem   is called an initial value problem (IVP).  A solution of the initial value problem is a function satisfying both the differential equation on some interval containing and the initial condition.    One way to solve initial value problem is to     first find the general solution of the equation, which, provided the differential equation is of the form   can be done via indefinite integration   and    then, plug and into the general solution, and solve for .       Solve the initial value problem    Solution: Considering that the initial -value 1 is in the interval , where , we obtain the unique solution of the IVP from the general solution of the equation on by substituting the values and into it:   which yields .  Thus, the unique solution to the IVP on is       An alternative definite-integral approach to solving an initial value problem of the form   which bypasses finding the general solution of the differential equation, is based on the Fundamental Theorem of Calculus and, provided the function is continuous on an interval containing , gives the unique solution of the IVP by the formula   In the following examples, we will compare the two approaches to solving initial value problem . Solve the following initial value problems.    .   Solution: (indefinite integral approach)  First, we find the general solution of the equation   Next, we need to determine the value of for which the solution we have obtained will satisfy the IVP.  Substituting in the initial condition gives     which we solve to find . The unique solution is, therefore,     or        .   Solution: (definite-integral approach)  The desired solution is given by the formula   Integrating by parts, with     we have:   Therefore, the solution is       Exercises for Section  Find a general solution of the following equations.                     Solve the following initial value problems.                      "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#def-",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Particular, General, and Singular Solutions.",
  "body": " Particular, General, and Singular Solutions   A function is said to be a solution of differential equation on an interval provided it is differentiable on and   A one-parameter family of solutions of differential equation containing an arbitrary constant is called a general solution .  Any particular choice of a specific value for yields a particular solution .  A first-order differential equation may have both a general solution involving an arbitrary constant and particular solutions that cannot be obtained from it by any choice of . Such exceptional solutions are called singular solutions (see Examples in Section ).  To solve is to find all of its solutions.   "
},
{
  "id": "subsec-Part-general-singular-3",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#subsec-Part-general-singular-3",
  "type": "Note",
  "number": "2.1.2",
  "title": "",
  "body": " Since a differentiable function is necessarily continuous, every solution of on an interval must be continuous on .  "
},
{
  "id": "subsec-Part-general-singular-6",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#subsec-Part-general-singular-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solution "
},
{
  "id": "subsec-Part-general-singular-11",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#subsec-Part-general-singular-11",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "   The one-parameter family ( ) is a general solution of the equation.   on .    The one-parameter family ( ) is the general solution of the equation.   on each of the intervals and .    "
},
{
  "id": "sec-Intro-to-first-order-3-2",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#sec-Intro-to-first-order-3-2",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": "  Initial Value Problem  A first-order differential equation is often accompanied by a condition of the form:   where and are specified values. Such a condition is called an initial condition (IC) and such a problem   is called an initial value problem (IVP).  A solution of the initial value problem is a function satisfying both the differential equation on some interval containing and the initial condition.   "
},
{
  "id": "EXMP2",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#EXMP2",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  Solve the initial value problem    Solution: Considering that the initial -value 1 is in the interval , where , we obtain the unique solution of the IVP from the general solution of the equation on by substituting the values and into it:   which yields .  Thus, the unique solution to the IVP on is      "
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
