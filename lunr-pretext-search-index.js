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
  "id": "exercises-Chapter-1",
  "level": "1",
  "url": "exercises-Chapter-1.html",
  "type": "Exercises",
  "number": "1.2",
  "title": "Exercises for Chapter 1",
  "body": " Exercises for Chapter 1    Verify the solution in .      Give an example of a differential equation whose solution is .      Give an example of a differential equation and its solution.    "
},
{
  "id": "exercises-Chapter-1-2",
  "level": "2",
  "url": "exercises-Chapter-1.html#exercises-Chapter-1-2",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "  Verify the solution in .   "
},
{
  "id": "exercises-Chapter-1-3",
  "level": "2",
  "url": "exercises-Chapter-1.html#exercises-Chapter-1-3",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "  Give an example of a differential equation whose solution is .   "
},
{
  "id": "exercises-Chapter-1-4",
  "level": "2",
  "url": "exercises-Chapter-1.html#exercises-Chapter-1-4",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": "  Give an example of a differential equation and its solution.   "
},
{
  "id": "sec-Intro-to-first-order",
  "level": "1",
  "url": "sec-Intro-to-first-order.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to First-Order Differential Equations",
  "body": " Introduction to First-Order Differential Equations        Particular, General, and Singular Solutions   Particular, General, and Singular Solutions   A function is said to be a solution of differential equation on an interval provided it is differentiable on and   A one-parameter family of solutions of differential equation containing an arbitrary constant is called a general solution .  Any particular choice of a specific value for yields a particular solution .  A first-order differential equation may have both a general solution involving an arbitrary constant and particular solutions that cannot be obtained from it by any choice of . Such exceptional solutions are called singular solutions (see Examples in Section ).  To solve is to find all of its solutions.     Since a differentiable function is necessarily continuous, every solution of on an interval must be continuous on .   For a first-order equation of the form   where is a continuous function on an interval , a general solution on is   where is an antiderivative of on . By the Fundamental Theorem of Calculus (see, e.g., ), we can set   where is a fixed point in .      The one-parameter family ( ) is a general solution of the equation.   on .    The one-parameter family ( ) is the general solution of the equation.   on each of the intervals and .             Initial Value Problems   Initial Value Problem   A first-order differential equation is often accompanied by a condition of the form:   where and are specified values. Such a condition is called an initial condition (IC) and such a problem   is called an initial value problem (IVP).  A solution of the initial value problem is a function satisfying both the differential equation on some interval containing and the initial condition.    One way to solve initial value problem is to     first find the general solution of the equation, which, provided the differential equation is of the form   can be done via indefinite integration   and    then, plug and into the general solution, and solve for .       Solve the initial value problem    Solution: Considering that the initial -value 1 is in the interval , where , we obtain the unique solution of the IVP from the general solution of the equation on by substituting the values and into it:   which yields .  Thus, the unique solution to the IVP on is       An alternative definite-integral approach to solving an initial value problem of the form   which bypasses finding the general solution of the differential equation, is based on the Fundamental Theorem of Calculus and, provided the function is continuous on an interval containing , gives the unique solution of the IVP by the formula   In the following two examples, we will compare the two approaches to solving initial value problem .   Indefinite Integral Approach   Solve the differential equation     First, we find the general solution of the equation   Using substitution ( , so ), we obtain   Next, we need to determine the value of for which the solution we have obtained will satisfy the IVP.  Substituting in the initial condition gives   which we solve to find . The unique solution is, therefore,   or      Definite Integral Approach   Solve the differential equation     The desired solution is given by the formula   Integrating by parts, with   we have:   Therefore, the solution is            Exercises for   Solve Generally   Find a general solution of the following equations.                          Initial Value Problems   Solve the following initial value problems.                          "
},
{
  "id": "def-Particular-general-singular",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#def-Particular-general-singular",
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
  "id": "subsec-Part-general-singular-5",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#subsec-Part-general-singular-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solution "
},
{
  "id": "subsec-Part-general-singular-8",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#subsec-Part-general-singular-8",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "    The one-parameter family ( ) is a general solution of the equation.   on .    The one-parameter family ( ) is the general solution of the equation.   on each of the intervals and .     "
},
{
  "id": "def-Initial-value-problem",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#def-Initial-value-problem",
  "type": "Definition",
  "number": "2.1.4",
  "title": "Initial Value Problem.",
  "body": " Initial Value Problem   A first-order differential equation is often accompanied by a condition of the form:   where and are specified values. Such a condition is called an initial condition (IC) and such a problem   is called an initial value problem (IVP).  A solution of the initial value problem is a function satisfying both the differential equation on some interval containing and the initial condition.   "
},
{
  "id": "example-IVP-reciprocal",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#example-IVP-reciprocal",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  Solve the initial value problem    Solution: Considering that the initial -value 1 is in the interval , where , we obtain the unique solution of the IVP from the general solution of the equation on by substituting the values and into it:   which yields .  Thus, the unique solution to the IVP on is      "
},
{
  "id": "subsec-IVP-6",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#subsec-IVP-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "definite-integral approach "
},
{
  "id": "subsec-IVP-9",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#subsec-IVP-9",
  "type": "Example",
  "number": "2.1.6",
  "title": "Indefinite Integral Approach.",
  "body": " Indefinite Integral Approach   Solve the differential equation     First, we find the general solution of the equation   Using substitution ( , so ), we obtain   Next, we need to determine the value of for which the solution we have obtained will satisfy the IVP.  Substituting in the initial condition gives   which we solve to find . The unique solution is, therefore,   or    "
},
{
  "id": "subsec-IVP-10",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#subsec-IVP-10",
  "type": "Example",
  "number": "2.1.7",
  "title": "Definite Integral Approach.",
  "body": " Definite Integral Approach   Solve the differential equation     The desired solution is given by the formula   Integrating by parts, with   we have:   Therefore, the solution is    "
},
{
  "id": "sec-Intro-to-first-order-4-2-3",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#sec-Intro-to-first-order-4-2-3",
  "type": "Exercise",
  "number": "2.1.3.1",
  "title": "",
  "body": "      "
},
{
  "id": "sec-Intro-to-first-order-4-2-4",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#sec-Intro-to-first-order-4-2-4",
  "type": "Exercise",
  "number": "2.1.3.2",
  "title": "",
  "body": "      "
},
{
  "id": "sec-Intro-to-first-order-4-2-5",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#sec-Intro-to-first-order-4-2-5",
  "type": "Exercise",
  "number": "2.1.3.3",
  "title": "",
  "body": "      "
},
{
  "id": "sec-Intro-to-first-order-4-3-3",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#sec-Intro-to-first-order-4-3-3",
  "type": "Exercise",
  "number": "2.1.3.4",
  "title": "",
  "body": "      "
},
{
  "id": "sec-Intro-to-first-order-4-3-4",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#sec-Intro-to-first-order-4-3-4",
  "type": "Exercise",
  "number": "2.1.3.5",
  "title": "",
  "body": "      "
},
{
  "id": "sec-Intro-to-first-order-4-3-5",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#sec-Intro-to-first-order-4-3-5",
  "type": "Exercise",
  "number": "2.1.3.6",
  "title": "",
  "body": "      "
},
{
  "id": "sec-Separable",
  "level": "1",
  "url": "sec-Separable.html",
  "type": "Section",
  "number": "2.2",
  "title": "Separable Differential Equations",
  "body": " Separable Differential Equations        Motivating Example: Home Loan  Suppose you want to take out a 30-year loan to purchase a house. If interest rates are 4.75% and you know that you can afford at most $1,250 per month, you would like to determine the most expensive house that you can purchase in order pay off the loan on time. To do this, define as the amount that you owe after years. Since you can afford $1,250 per month, your annual payments will be . The balance due will gain 4.75% interest, so that amount added to the balance annually is . Thus, the rate of change in the amount of money due is given by the difference between the amount the loan increases and the amount that you pay on the loan, or . The initial condition is , because you want the entire loan to be paid off by the end of the 30 years. This gives the initial value problem   This is a separable equation, as we will see momentarily (also a linear equation, as we will see in Section ). The solution to is   The size of the loan you should take is the amount you owe at the beginning, or , which is $239,839.43.         Definition and Examples   Separable Differential Equation   A first-order differential equation   whose right-hand side can be factored into , i.e., it can written in the form   is called separable .  There are two special cases of separable equations:       is separable.     is separable.    The exponential differential equation where is separable (and autonomous).    The logistic differential equation where ( are constants) is separable (and autonomous).     is separable.     is not separable. As we will see in Section , this equation is also linear .     is not separable.          Method of Separation of Variables  Consider a separable differential equation   Observe that, if there is such a such that , then the constant function is a so-called equilibrium solution of the equation. The method of separation of variables is used for solving these differential equations.        How Separation of Variables Works  The method of separation of variables works as follows:     Find all equilibrium solutions from the equation     Separate the variables:     Integrate both sides:     Solve the resulting equation for , whenever possible, obtaining a general solution. The equilibrium solutions that are not included in this general solution give the singular solutions.       The separable differential equation has a general solution of ( ) and the singular equilibrium solution not included in the general solution.     If it is impossible (or impractical) to solve the resulting equation for , the general solution is said to be an implicit general solution .    Solving a Separable Differential Equation   Solve the differential equation     To solve this separable DE, we apply the method of separation of variables.     Find the equilibrium solutions from the equation   Clearly, there is only one: .    Separate the variables:     Integrate both sides:     Solve the resulting equation for :   Renaming to simply , we obtain the general solution    Question: What is the reason for the requirement that ?  Observe that the equilibrium solution is attained when .              Why Separation of Variables Works  The method of separation of variables is based on the substitution rule for indefinite integrals .  Indeed, let be a nonequilibrium solution of a separable equation on an interval .  Then, for all ,   Dividing both sides of differential equation by and integrating, we obtain   Using the substitution , we obtain   Thus, any nonequilibrium solution of differential equation satisfies integral equation .  Conversely, a function , implicitly defined by integral equation on the interval , solves on . Indeed, differentiating relative to by the chain rule (considering ), we arrive at for all .          Exercises for    Determine which of the following first order differential equations are separable.                                   Apply the method of separation of variables to verify .     Solve Generally   Find a general solution for each of the following equations.                                        Initial Value Problems   Solve the following initial value problems.                                                      "
},
{
  "id": "def-Separable",
  "level": "2",
  "url": "sec-Separable.html#def-Separable",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Separable Differential Equation.",
  "body": " Separable Differential Equation   A first-order differential equation   whose right-hand side can be factored into , i.e., it can written in the form   is called separable .  There are two special cases of separable equations:    "
},
{
  "id": "sec-Separable-3-3",
  "level": "2",
  "url": "sec-Separable.html#sec-Separable-3-3",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  is separable.  "
},
{
  "id": "sec-Separable-3-4",
  "level": "2",
  "url": "sec-Separable.html#sec-Separable-3-4",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  is separable.  "
},
{
  "id": "sec-Separable-3-5",
  "level": "2",
  "url": "sec-Separable.html#sec-Separable-3-5",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": " The exponential differential equation where is separable (and autonomous).  "
},
{
  "id": "sec-Separable-3-6",
  "level": "2",
  "url": "sec-Separable.html#sec-Separable-3-6",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": " The logistic differential equation where ( are constants) is separable (and autonomous).  "
},
{
  "id": "sec-Separable-3-7",
  "level": "2",
  "url": "sec-Separable.html#sec-Separable-3-7",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": "  is separable.  "
},
{
  "id": "sec-Separable-3-8",
  "level": "2",
  "url": "sec-Separable.html#sec-Separable-3-8",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": "  is not separable. As we will see in Section , this equation is also linear .  "
},
{
  "id": "sec-Separable-3-9",
  "level": "2",
  "url": "sec-Separable.html#sec-Separable-3-9",
  "type": "Example",
  "number": "2.2.8",
  "title": "",
  "body": "  is not separable.  "
},
{
  "id": "subsec-Separation-of-variables-3",
  "level": "2",
  "url": "sec-Separable.html#subsec-Separation-of-variables-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium solution "
},
{
  "id": "example-Singular",
  "level": "2",
  "url": "sec-Separable.html#example-Singular",
  "type": "Example",
  "number": "2.2.9",
  "title": "",
  "body": "  The separable differential equation has a general solution of ( ) and the singular equilibrium solution not included in the general solution.   "
},
{
  "id": "subsubsec-How-separation-works-5",
  "level": "2",
  "url": "sec-Separable.html#subsubsec-How-separation-works-5",
  "type": "Remark",
  "number": "2.2.10",
  "title": "",
  "body": " If it is impossible (or impractical) to solve the resulting equation for , the general solution is said to be an implicit general solution .  "
},
{
  "id": "example-Separable-worked-out",
  "level": "2",
  "url": "sec-Separable.html#example-Separable-worked-out",
  "type": "Example",
  "number": "2.2.11",
  "title": "Solving a Separable Differential Equation.",
  "body": " Solving a Separable Differential Equation   Solve the differential equation     To solve this separable DE, we apply the method of separation of variables.     Find the equilibrium solutions from the equation   Clearly, there is only one: .    Separate the variables:     Integrate both sides:     Solve the resulting equation for :   Renaming to simply , we obtain the general solution    Question: What is the reason for the requirement that ?  Observe that the equilibrium solution is attained when .      "
},
{
  "id": "exercises-Separable-2",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-2",
  "type": "Exercise",
  "number": "2.2.4.1",
  "title": "",
  "body": "  Determine which of the following first order differential equations are separable.                                "
},
{
  "id": "exercises-Separable-3",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-3",
  "type": "Exercise",
  "number": "2.2.4.2",
  "title": "",
  "body": "  Apply the method of separation of variables to verify .   "
},
{
  "id": "exercises-Separable-4-3",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-4-3",
  "type": "Exercise",
  "number": "2.2.4.3",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Separable-4-4",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-4-4",
  "type": "Exercise",
  "number": "2.2.4.4",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Separable-4-5",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-4-5",
  "type": "Exercise",
  "number": "2.2.4.5",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Separable-4-6",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-4-6",
  "type": "Exercise",
  "number": "2.2.4.6",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Separable-4-7",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-4-7",
  "type": "Exercise",
  "number": "2.2.4.7",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Separable-5-3",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-5-3",
  "type": "Exercise",
  "number": "2.2.4.8",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Separable-5-4",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-5-4",
  "type": "Exercise",
  "number": "2.2.4.9",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Separable-5-5",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-5-5",
  "type": "Exercise",
  "number": "2.2.4.10",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Separable-5-6",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-5-6",
  "type": "Exercise",
  "number": "2.2.4.11",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Separable-5-7",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-5-7",
  "type": "Exercise",
  "number": "2.2.4.12",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Separable-5-8",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-5-8",
  "type": "Exercise",
  "number": "2.2.4.13",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Separable-5-9",
  "level": "2",
  "url": "sec-Separable.html#exercises-Separable-5-9",
  "type": "Exercise",
  "number": "2.2.4.14",
  "title": "",
  "body": "      "
},
{
  "id": "sepapp",
  "level": "1",
  "url": "sepapp.html",
  "type": "Section",
  "number": "2.3",
  "title": "Applications of Separable Equations",
  "body": " Applications of Separable Equations        Radiocarbon Dating  Carbon-14 is a radioactive isotope of carbon produced in the upper atmosphere by radiation from the sun. Plants absorb carbon dioxide from the air, and living organisms eat plants. The ratio of normal carbon (Carbon-12) to Carbon-14 in the air and living things is nearly constant. When a living creature dies, the Carbon-14 begins to decrease due to radioactive decay. By comparing the amounts of Carbon-12 and Carbon-14, the amount of Carbon-14 that has decayed can be determined.        Mathematical Model  Let amount of Carbon-14 present at time after death.  The model of radioactive decay we'll use is:   We need additional information to find . For example, if we have the half-life of Carbon-14 (which is standard information for a radioactive isotope), we can determine .    Sample Case  The half-life of Carbon-14 is approximately 5,730 years. Suppose remains have been found in which it is estimated that 30% of the original Carbon-14 is present. Estimate the age of the remains.   Step 1: Solve the IVP    Note: We can also set (for 100%) or (for 100% in decimal form).  By separation of variables, we see that the general solution is   Using the initial condition, , so    Step 2: Find   To find , we will use the half-life of Carbon-14. Since the half-life is the amount of time for half of the sample to decay, we know that Therefore,    Step 3: Determine the age of the remains.  At time (the age), we have 30%of the original amount of Carbon-14, or So, plugging this into our solution for will allow us to solve for the age of the remains.           Geometric Example  Find the curve with slope through the point (0, 1).   Solution: The differential equation modeling this problem has the implicit general solution   Substituting and into it, we arrive at so , and therefore, the desired curve is the unit circle .         Mixing Problem  A typical mixing problem is about the amount or concentration of a solute in a solution with certain flows of solutions with the same solute into and out of a container holding the solution.   Model: Let be the amount of solute in the container at any time . Then, we have that   rate of change in amount of solute = total solute inflow rate total solute outlow rate  (i.e., ).    Note: The total solute inflow rate is determined by summing the inflow rates from each source, and similarly for the total solute outflow rate.  Each solute inflow rate is found by multiplying the rate at which fluid flows into the container by the concentration of solute:     Each solute outflow rate is found by multiplying the rate at which fluid flows out of the container by the concentration of solute in the container:      The resulting DE is a first-order linear equation regardless of whether the rates, concentrations, and volume are constant or variable. When all of the rates, concentrations, and volume are constant, this equation is also separable (and even autonomous).    Mixing Problem with Constant Volume   A tank contains L of pure water. A brine containing kg\/L of salt enters the tank at a constant rate of L\/min. A brine containing kg\/L of salt enters the tank at a constant rate of L\/min. The solution is kept thoroughly mixed and drains from the tank at a constant rate of L\/min.     Set up an initial value problem describing how the amount of salt in the tank changes over time.    Find the amount of salt in the tank after min.      Mixing Problem with Constant Volume   Image of cylindrical tank with two input sources and one output drain.         Let be the amount of salt in the tank (kg) after min.  The rate of change of the amount of salt in the tank (kg\/min) consists of the two components:     the inflow rate of salt entering the tank, which consists of the sum of the rates coming from the two sources     the outflow rate of salt leaving the tank:      Since initially there was no salt in the tank ( ), we obtain at the following IVP model for the mixing problem:     The DE is separable, and more precisely, it is autonomous. Applying the method of separation of variables, we have:     The equilibrium solution is .    Separating the variables, we obtain   Now we solve for :     Find : Using the initial condition , we have so and the solution of the problem is Note that increasingly tends to the equilibrium kg as , but never attains it.         The Graph of ( )    Curve that starts at origin and increases towards a horizontal asymptote at .              Newton's Law of Cooling\/Heating  Newton's Law of Cooling\/Heating states that the rate of change of the temperature of an object, , is proportional to the difference between the ambient temperature of the surroundings, , and : where is the constant of proportionality.    Consider a tray of cookies removed from the oven at F and placed in a room with a temperature of F. If the cookies are at F after 10 minutes, how long will it take for them to cool to F?    The IVP modeling this situation is given by applying equation :   We will apply the method of separation of variables. Separating variables gives   Integrate both sides and solve for :   We next need to determine and . We first find using the initial condition:   So, we have   Now we use the fact (given in the problem) that to find .     Then take the natural log of both sides and solve for :   Let denote the time at which the temperature of the cookies is F. Then     Solving for gives us . So, the cookies will be at F after 70.45 minutes, or after 1 hour, 10 minutes, and 27 seconds.           Exercises for Section    Verify the solution to the Geometric Application problem in .      Find the equation of the curve with slope through the point . What type of curve is this?      Find the equation of the curve with slope through the point . What type of curve is this?     Drug Elimination   The amount of a certain drug in the bloodstream as a function of time declining at a rate proportional to the current excess amount relative to the natural level of the drug (typically 0) is modeled by the differential equation where . Suppose that after 2 hours, half of the initial amount of the drug is left in the patient's system (i.e., ). Find assuming that initially, the patient is given 250 mg of the drug (i.e., ).     Radiocarbon Dating   The half-life of Carbon-14 is approximately 5,730 years. Suppose remains have been found in which it is estimated that 65%of the original Carbon-14 has decayed. Estimate the age of the remains.     Population Model   A new species of animal has just been discovered. The rate of change in the size of its population was found to be proportional to the square root of its current size.     Formulate a mathematical model describing the population size of this new species over time.    If the initial population is animals and, after 2 months, the population has grown to 400 animals, determine the size of the population at any time .    How long before the population has grown to 1000 animals?        Logistic Population Model   A population model that takes into account the fact that, as a population grows in size its rate of change decreases, is the logistic model . Given a population of size , the logistic model is defined by     where is the intrinsic growth rate of the population in a given area (the growth rate in the absence of any restrictions) and is the carrying capacity of the area (the maximum population that can be supported).  If per year and , use the logistic equation to determine the population size at any time of a species with an initial population of 1000.   Hint: You will need to use partial fractions to evaluate the integral on the left-hand side.      "
},
{
  "id": "sepapp-4-10",
  "level": "2",
  "url": "sepapp.html#sepapp-4-10",
  "type": "Note",
  "number": "2.3.1",
  "title": "",
  "body": " The resulting DE is a first-order linear equation regardless of whether the rates, concentrations, and volume are constant or variable. When all of the rates, concentrations, and volume are constant, this equation is also separable (and even autonomous).  "
},
{
  "id": "sepapp-4-11",
  "level": "2",
  "url": "sepapp.html#sepapp-4-11",
  "type": "Example",
  "number": "2.3.2",
  "title": "Mixing Problem with Constant Volume.",
  "body": " Mixing Problem with Constant Volume   A tank contains L of pure water. A brine containing kg\/L of salt enters the tank at a constant rate of L\/min. A brine containing kg\/L of salt enters the tank at a constant rate of L\/min. The solution is kept thoroughly mixed and drains from the tank at a constant rate of L\/min.     Set up an initial value problem describing how the amount of salt in the tank changes over time.    Find the amount of salt in the tank after min.      Mixing Problem with Constant Volume   Image of cylindrical tank with two input sources and one output drain.         Let be the amount of salt in the tank (kg) after min.  The rate of change of the amount of salt in the tank (kg\/min) consists of the two components:     the inflow rate of salt entering the tank, which consists of the sum of the rates coming from the two sources     the outflow rate of salt leaving the tank:      Since initially there was no salt in the tank ( ), we obtain at the following IVP model for the mixing problem:     The DE is separable, and more precisely, it is autonomous. Applying the method of separation of variables, we have:     The equilibrium solution is .    Separating the variables, we obtain   Now we solve for :     Find : Using the initial condition , we have so and the solution of the problem is Note that increasingly tends to the equilibrium kg as , but never attains it.         The Graph of ( )    Curve that starts at origin and increases towards a horizontal asymptote at .      "
},
{
  "id": "ex-newt",
  "level": "2",
  "url": "sepapp.html#ex-newt",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": "  Consider a tray of cookies removed from the oven at F and placed in a room with a temperature of F. If the cookies are at F after 10 minutes, how long will it take for them to cool to F?    The IVP modeling this situation is given by applying equation :   We will apply the method of separation of variables. Separating variables gives   Integrate both sides and solve for :   We next need to determine and . We first find using the initial condition:   So, we have   Now we use the fact (given in the problem) that to find .     Then take the natural log of both sides and solve for :   Let denote the time at which the temperature of the cookies is F. Then     Solving for gives us . So, the cookies will be at F after 70.45 minutes, or after 1 hour, 10 minutes, and 27 seconds.   "
},
{
  "id": "exercises-Applications-of-separable-2",
  "level": "2",
  "url": "sepapp.html#exercises-Applications-of-separable-2",
  "type": "Exercise",
  "number": "2.3.5.1",
  "title": "",
  "body": "  Verify the solution to the Geometric Application problem in .   "
},
{
  "id": "exercises-Applications-of-separable-3",
  "level": "2",
  "url": "sepapp.html#exercises-Applications-of-separable-3",
  "type": "Exercise",
  "number": "2.3.5.2",
  "title": "",
  "body": "  Find the equation of the curve with slope through the point . What type of curve is this?   "
},
{
  "id": "exercises-Applications-of-separable-4",
  "level": "2",
  "url": "sepapp.html#exercises-Applications-of-separable-4",
  "type": "Exercise",
  "number": "2.3.5.3",
  "title": "",
  "body": "  Find the equation of the curve with slope through the point . What type of curve is this?   "
},
{
  "id": "exercises-Applications-of-separable-5",
  "level": "2",
  "url": "sepapp.html#exercises-Applications-of-separable-5",
  "type": "Exercise",
  "number": "2.3.5.4",
  "title": "Drug Elimination.",
  "body": " Drug Elimination   The amount of a certain drug in the bloodstream as a function of time declining at a rate proportional to the current excess amount relative to the natural level of the drug (typically 0) is modeled by the differential equation where . Suppose that after 2 hours, half of the initial amount of the drug is left in the patient's system (i.e., ). Find assuming that initially, the patient is given 250 mg of the drug (i.e., ).   "
},
{
  "id": "exercises-Applications-of-separable-6",
  "level": "2",
  "url": "sepapp.html#exercises-Applications-of-separable-6",
  "type": "Exercise",
  "number": "2.3.5.5",
  "title": "Radiocarbon Dating.",
  "body": " Radiocarbon Dating   The half-life of Carbon-14 is approximately 5,730 years. Suppose remains have been found in which it is estimated that 65%of the original Carbon-14 has decayed. Estimate the age of the remains.   "
},
{
  "id": "exercises-Applications-of-separable-7",
  "level": "2",
  "url": "sepapp.html#exercises-Applications-of-separable-7",
  "type": "Exercise",
  "number": "2.3.5.6",
  "title": "Population Model.",
  "body": " Population Model   A new species of animal has just been discovered. The rate of change in the size of its population was found to be proportional to the square root of its current size.     Formulate a mathematical model describing the population size of this new species over time.    If the initial population is animals and, after 2 months, the population has grown to 400 animals, determine the size of the population at any time .    How long before the population has grown to 1000 animals?      "
},
{
  "id": "exercises-Applications-of-separable-8",
  "level": "2",
  "url": "sepapp.html#exercises-Applications-of-separable-8",
  "type": "Exercise",
  "number": "2.3.5.7",
  "title": "Logistic Population Model.",
  "body": " Logistic Population Model   A population model that takes into account the fact that, as a population grows in size its rate of change decreases, is the logistic model . Given a population of size , the logistic model is defined by     where is the intrinsic growth rate of the population in a given area (the growth rate in the absence of any restrictions) and is the carrying capacity of the area (the maximum population that can be supported).  If per year and , use the logistic equation to determine the population size at any time of a species with an initial population of 1000.   Hint: You will need to use partial fractions to evaluate the integral on the left-hand side.    "
},
{
  "id": "linear",
  "level": "1",
  "url": "linear.html",
  "type": "Section",
  "number": "2.4",
  "title": "Linear Differential Equations and Applications",
  "body": " Linear Differential Equations and Applications        Motivating Example: Evaporating Raindrop   As a raindrop falls, it evaporates to some extent. We assume that as it evaporates, it still maintains its spherical shape. We make the following additional assumptions:     the evaporation rate of the raindrop is proportional to its surface area; and    air resistance does not impact the velocity of the raindrop.     With these assumptions, the velocity of the raindrop satisfies the model where is the acceleration due to gravity, is the density of the raindrop, is the initial radius of the drop, and is the constant of proportionality. We take the downward direction to be positive.  This equation is a linear differential equation . If we assume that     the initial radius of the drop is cm,     (or ), and     ,     then we have          Definition and Examples   Linear Differential Equation   A first-order differential equation of the form with the coefficient function and the right-hand-side function , both continuous on an open interval , is called a linear first-order differential equation.  If on , the differential equation is called homogeneous and nonhomogeneous otherwise.      ( ) is linear and separable (autonomous).     is linear and separable.     is linear, but not separable.     where , is nonlinear, separable (and autonomous).     is neither linear nor separable.          Method of Integrating Factor  This method is for solving a linear first-order differential equation   It works by multiplying both sides by a suitable function , called an integrating factor ,   to make the left-hand side of the resulting equation recognizable as the derivative of a product:   As we can see, the appropriate choice of is prescribed by the differential equation   Solving this DE by the method of separation of variables, we have    How It Works  The method works as follows:     Calculate the integrating factor      Multiply both sides of the differential equation by    and recognize the left-hand side of the resulting differential equation as the derivative of a product to obtain the equation     Integrate both sides of the equation with respect to to obtain     Solve for to obtain the general solution of the original equation:       You should not memorize formula . Rather, you should memorize the formula for the integrating factor and understand how to apply the integrating factor as in through .     Some Notes about Linear Equations     The general solution of a first-order linear differential equation on an interval contains all of its particular solutions, and thus, there are no singular ones.    It should be noted that the integrals we obtain in the described method may be difficult, or even impossible, to express in terms of elementary functions.    In the formula for the integrating factor , we can regard the integration constant in the integral to be .    Given an initial value problem   where is in an open interval , where the functions and are continuous, we can find its unique solution by first finding the general solution using the method of integrating factor and then finding the appropriate value of the constant by using the initial condition.  We can also find the solution of initial value problem by adjusting formula for the general solution of the differential equation as follows:         Find the general solution of     Since the equation is in the proper form, we first find the integrating factor:   Multiplying both sides of the DE by gives   which we can recognize as    Integrating both sides with respect to , we have: .  Solving for , we obtain the general solution of the DE   on .      Find a general solution of     First, we need to divide both sides of the equation by to get the equation in the proper form:   Find the integrating factor:   Multiply both sides by and solve:       Solve the initial value problem        First, find the general solution.     Find the integrating factor:       Multiply both sides of the equation by and solve.        Find , using :        Therefore,         Solve the initial value problem Note this is equation is both linear and separable (we solved it in the previous section). The equation can be separated as follows: However, since the equation was initially presented in the standard linear form, in this example we will solve the original equation using an integrating factor.       First, find the general solution.     Since the equation is in the proper form, we first find the integrating factor:       Multiplying both sides of the DE by gives   which we recognize as     Integrate both sides with respect to to obtain:     Solving for , we find the general solution of the DE:   on each of the intervals , .       We determine by plugging in the initial condition   so .  Therefore, the solution of the IVP is      We can also solve this problem by using the definite integral approach (see ):   and the desired solution on is obtained from so            Application: Mixing Problem with Variable Volume    A tank initially contains 1,000 gal of water in which is dissolved 20 lb of salt. A valve is opened and water containing 0.25 lb of salt per gallon flows into the tank at a rate of 4 gal\/min. Assume that the mixture is kept uniform and drains from the tank at a rate of 5 gal\/min.     Set up an initial value problem describing how the amount of salt in the tank changes over time.    At what time is the tank empty?    How much salt does the tank contain at any time before the tank is empty?     Recall the model for a mixing problem   rate of change in amount of solute = solute inflow rate - solute outflow rate  (i.e., ).   Recall the following.  Each solute inflow rate is found by multiplying the rate at which fluid flows into the container by the concentration of solute:     Each solute outflow rate is found by multiplying the rate at which fluid flows out of the container by the concentration of solute in the container:       Proceed as follows:     For our problem, since the rate of fluid flowing into the tank is not equal to the rate flowing out of the tank, the volume of solution at any time is not the same as the initial volume, 1000. Let volume of solution in the tank at time . The volume at any time is determined by     Therefore,   So, we have   Rewriting in the form for a linear equation, we obtain     To determine the time at which the tank is empty, we use     Find the integrating factor: .  Multiply by :   Find : Since y(0) = 20, .  So, we have that for ,               Exercises for Section    What is the integrating factor for the equation ?      Consider the problem      Is the equation separable? Why?    Is the equation linear? Why?    Find a general solution.         Give an example of an equation that is both separable and linear.     General Solutions   Find a general solution for each of the following equations.                                               Initial Value Problems   Solve the following initial value problems.                                 Mixing Problems   Solve the following mixing problems.     A 100 gallon tank initially contains 50 gal of brine containing 5 pounds of salt. Brine containing 1 pound of salt per gallon enters the tank at the rate of 4 gal\/s, and the well-mixed brine in the tank flows out at the rate of 3 gal\/s.   How much salt will the tank contain at the time when the tank is full of brine?    If the tank had an infinite capacity, what is the maximum amount of salt that it could contain?         A 50 L tank initially contains 40 L of brine in which is dissolved 1 kg of salt. Pure water enters the tank at the rate of 3 L\/s, and the well-mixed solution in the tank flows out at the rate of 4 L\/s.   How long before the tank is empty?    How much salt will be in the solution in the tank at any time before the tank is empty?         "
},
{
  "id": "linear-2-5",
  "level": "2",
  "url": "linear.html#linear-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear differential equation "
},
{
  "id": "linear-3-2",
  "level": "2",
  "url": "linear.html#linear-3-2",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Linear Differential Equation.",
  "body": " Linear Differential Equation   A first-order differential equation of the form with the coefficient function and the right-hand-side function , both continuous on an open interval , is called a linear first-order differential equation.  If on , the differential equation is called homogeneous and nonhomogeneous otherwise.   "
},
{
  "id": "linear-3-3",
  "level": "2",
  "url": "linear.html#linear-3-3",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "  ( ) is linear and separable (autonomous).  "
},
{
  "id": "linear-3-4",
  "level": "2",
  "url": "linear.html#linear-3-4",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": "  is linear and separable.  "
},
{
  "id": "linear-3-5",
  "level": "2",
  "url": "linear.html#linear-3-5",
  "type": "Example",
  "number": "2.4.4",
  "title": "",
  "body": "  is linear, but not separable.  "
},
{
  "id": "linear-3-6",
  "level": "2",
  "url": "linear.html#linear-3-6",
  "type": "Example",
  "number": "2.4.5",
  "title": "",
  "body": "  where , is nonlinear, separable (and autonomous).  "
},
{
  "id": "linear-3-7",
  "level": "2",
  "url": "linear.html#linear-3-7",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": "  is neither linear nor separable.  "
},
{
  "id": "linear-4-3",
  "level": "2",
  "url": "linear.html#linear-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "linear-4-7-4",
  "level": "2",
  "url": "linear.html#linear-4-7-4",
  "type": "Warning",
  "number": "2.4.7",
  "title": "",
  "body": " You should not memorize formula . Rather, you should memorize the formula for the integrating factor and understand how to apply the integrating factor as in through .  "
},
{
  "id": "linear-4-8",
  "level": "2",
  "url": "linear.html#linear-4-8",
  "type": "Note",
  "number": "2.4.8",
  "title": "Some Notes about Linear Equations.",
  "body": " Some Notes about Linear Equations     The general solution of a first-order linear differential equation on an interval contains all of its particular solutions, and thus, there are no singular ones.    It should be noted that the integrals we obtain in the described method may be difficult, or even impossible, to express in terms of elementary functions.    In the formula for the integrating factor , we can regard the integration constant in the integral to be .    Given an initial value problem   where is in an open interval , where the functions and are continuous, we can find its unique solution by first finding the general solution using the method of integrating factor and then finding the appropriate value of the constant by using the initial condition.  We can also find the solution of initial value problem by adjusting formula for the general solution of the differential equation as follows:      "
},
{
  "id": "example-Proper-linear",
  "level": "2",
  "url": "linear.html#example-Proper-linear",
  "type": "Example",
  "number": "2.4.9",
  "title": "",
  "body": "  Find the general solution of     Since the equation is in the proper form, we first find the integrating factor:   Multiplying both sides of the DE by gives   which we can recognize as    Integrating both sides with respect to , we have: .  Solving for , we obtain the general solution of the DE   on .   "
},
{
  "id": "linear-4-10",
  "level": "2",
  "url": "linear.html#linear-4-10",
  "type": "Example",
  "number": "2.4.10",
  "title": "",
  "body": "  Find a general solution of     First, we need to divide both sides of the equation by to get the equation in the proper form:   Find the integrating factor:   Multiply both sides by and solve:    "
},
{
  "id": "linear-4-11",
  "level": "2",
  "url": "linear.html#linear-4-11",
  "type": "Example",
  "number": "2.4.11",
  "title": "",
  "body": "  Solve the initial value problem        First, find the general solution.     Find the integrating factor:       Multiply both sides of the equation by and solve.        Find , using :        Therefore,      "
},
{
  "id": "example-Linear-and-seperable",
  "level": "2",
  "url": "linear.html#example-Linear-and-seperable",
  "type": "Example",
  "number": "2.4.12",
  "title": "",
  "body": "  Solve the initial value problem Note this is equation is both linear and separable (we solved it in the previous section). The equation can be separated as follows: However, since the equation was initially presented in the standard linear form, in this example we will solve the original equation using an integrating factor.       First, find the general solution.     Since the equation is in the proper form, we first find the integrating factor:       Multiplying both sides of the DE by gives   which we recognize as     Integrate both sides with respect to to obtain:     Solving for , we find the general solution of the DE:   on each of the intervals , .       We determine by plugging in the initial condition   so .  Therefore, the solution of the IVP is      We can also solve this problem by using the definite integral approach (see ):   and the desired solution on is obtained from so    "
},
{
  "id": "linear-5-2",
  "level": "2",
  "url": "linear.html#linear-5-2",
  "type": "Example",
  "number": "2.4.13",
  "title": "",
  "body": "  A tank initially contains 1,000 gal of water in which is dissolved 20 lb of salt. A valve is opened and water containing 0.25 lb of salt per gallon flows into the tank at a rate of 4 gal\/min. Assume that the mixture is kept uniform and drains from the tank at a rate of 5 gal\/min.     Set up an initial value problem describing how the amount of salt in the tank changes over time.    At what time is the tank empty?    How much salt does the tank contain at any time before the tank is empty?     Recall the model for a mixing problem   rate of change in amount of solute = solute inflow rate - solute outflow rate  (i.e., ).   Recall the following.  Each solute inflow rate is found by multiplying the rate at which fluid flows into the container by the concentration of solute:     Each solute outflow rate is found by multiplying the rate at which fluid flows out of the container by the concentration of solute in the container:       Proceed as follows:     For our problem, since the rate of fluid flowing into the tank is not equal to the rate flowing out of the tank, the volume of solution at any time is not the same as the initial volume, 1000. Let volume of solution in the tank at time . The volume at any time is determined by     Therefore,   So, we have   Rewriting in the form for a linear equation, we obtain     To determine the time at which the tank is empty, we use     Find the integrating factor: .  Multiply by :   Find : Since y(0) = 20, .  So, we have that for ,       "
},
{
  "id": "exercises-Linear-equations-2",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-2",
  "type": "Exercise",
  "number": "2.4.5.1",
  "title": "",
  "body": "  What is the integrating factor for the equation ?   "
},
{
  "id": "exercises-Linear-equations-3",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-3",
  "type": "Exercise",
  "number": "2.4.5.2",
  "title": "",
  "body": "  Consider the problem      Is the equation separable? Why?    Is the equation linear? Why?    Find a general solution.      "
},
{
  "id": "exercises-Linear-equations-4",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-4",
  "type": "Exercise",
  "number": "2.4.5.3",
  "title": "",
  "body": "  Give an example of an equation that is both separable and linear.   "
},
{
  "id": "exercises-Linear-equations-5-3",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-5-3",
  "type": "Exercise",
  "number": "2.4.5.4",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Linear-equations-5-4",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-5-4",
  "type": "Exercise",
  "number": "2.4.5.5",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Linear-equations-5-5",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-5-5",
  "type": "Exercise",
  "number": "2.4.5.6",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Linear-equations-5-6",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-5-6",
  "type": "Exercise",
  "number": "2.4.5.7",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Linear-equations-5-7",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-5-7",
  "type": "Exercise",
  "number": "2.4.5.8",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Linear-equations-5-8",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-5-8",
  "type": "Exercise",
  "number": "2.4.5.9",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Linear-equations-6-3",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-6-3",
  "type": "Exercise",
  "number": "2.4.5.10",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Linear-equations-6-4",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-6-4",
  "type": "Exercise",
  "number": "2.4.5.11",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Linear-equations-6-5",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-6-5",
  "type": "Exercise",
  "number": "2.4.5.12",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Linear-equations-6-6",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-6-6",
  "type": "Exercise",
  "number": "2.4.5.13",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-Linear-equations-7-3",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-7-3",
  "type": "Exercise",
  "number": "2.4.5.14",
  "title": "",
  "body": "  A 100 gallon tank initially contains 50 gal of brine containing 5 pounds of salt. Brine containing 1 pound of salt per gallon enters the tank at the rate of 4 gal\/s, and the well-mixed brine in the tank flows out at the rate of 3 gal\/s.   How much salt will the tank contain at the time when the tank is full of brine?    If the tank had an infinite capacity, what is the maximum amount of salt that it could contain?      "
},
{
  "id": "exercises-Linear-equations-7-4",
  "level": "2",
  "url": "linear.html#exercises-Linear-equations-7-4",
  "type": "Exercise",
  "number": "2.4.5.15",
  "title": "",
  "body": "  A 50 L tank initially contains 40 L of brine in which is dissolved 1 kg of salt. Pure water enters the tank at the rate of 3 L\/s, and the well-mixed solution in the tank flows out at the rate of 4 L\/s.   How long before the tank is empty?    How much salt will be in the solution in the tank at any time before the tank is empty?      "
},
{
  "id": "sec-subs",
  "level": "1",
  "url": "sec-subs.html",
  "type": "Section",
  "number": "2.5",
  "title": "Substitution Method",
  "body": " Substitution Method        General Idea  The general idea of the Substitution Method for a first order differential of the form     is to     introduce a new function     differentiate by the Chain Rule (considering that )   and    solve  and for (if necessary) and substitute into the original DE to obtain a new first-order DE for that would belong to one of the two classes of DE's that we know how to solve ( separable or linear );    solve the obtained DE for ; and    substitute back into the result to obtain an implicit solution of the original DE for .        A \"good\" substitution simplifies the DE, turning into one we can solve.    Obtaining an explicit solution for may be possible but is not always practical.       Find a general solution of     Observe that, assuming to be a function of , , by the chain rule, we have:   Hence via the substitution   the DE is transformed into   which we write in standard form is   The latter differential equation is linear, so we may solve it using the method of integrating factor. The integrating factor is   Multiplying both sides by and recognizing the left-hand side as the derivative of a product, we have:   Integrating both sides with respect to gives   Solving for , we obtain   and substituting back, we obtain an implicit general solution of the original equation,            Homogeneous Differential Equations   Motivating Example: Solar Collector   If we assume that when the curve shown below is revolved about the -axis, it produces a surface of revolution having the property that all light rays parallel to the -axis, upon striking the surface, are reflected to one point , which we label the origin.    Ray from the origin reflects parallel to -axis when ray hits the curve.    Using the fact that the angle of incidence is equal to the angle of reflection, we can determine a differential equation that describes the shape of the curve . This type of curve is important in applications, such as the construction of telescopes and satellite antennas, automobile headlights, and solar collectors. From geometry, we can see that the angle between the reflected line and the -axis, denoted , and the angle between and at the point of incidence, denoted are related by . Using this, we obtain the differential equation   This equation is nonlinear and homogeneous, where homogeneous will be defined below. The solution of this problem requires a bit more work than the examples which we will do, because it results in a complicated integral. A general solution is     which is a parabola that is symmetric with respect to the -axis. Try to see if you can obtain this solution.   This problem may also be solved by a different type of substitution, namely, . We will discuss such substitutions a bit later.     First-Order Homogeneous Differential Equations  A first-order homogeneous differential equation is a first-order differential equation that can be written as     To solve differential equation , make the substitution .  Therefore, .  Substituting into gives , which is a separable equation.    Find a general solution of     Dividing both sides by , we see that we obtain: Therefore, the DE is homogeneous.  Substituting we obtain the separable DE   The equilibrium solution is .  Separating the variables and integrating, we have: .  (Note that the singular equilibrium solution is not included.)  Multiplying by 2 and substituting back, we obtain an implicit general solution of the initial problem      In the previous example:   The singular equilibrium solution is not included.    Since the DE is nonlinear, singular solutions were to be expected.        Solve the initial value problem     Divide by to get the equation in standard form:   This is a homogeneous equation, so let     Plugging into our DE gives   So, we have   Then .  Integrating by using the substitution for the left-hand integral gives   Substituting back in gives   Find : Since , we have , so .  So we obtain the unique solution             Another Substitution  One example of another type of substitution is for equations of the form   where are constants and . This can be transformed into a separable differential equation by the substitution   Then,   so     Find a general solution of     Let .  Then Since , this gives   One can observe that this equation has no equilibrium solutions. (Can you see why not?) .  Substituting back in gives   Therefore, the unique solution is       Find a general solution of     Rewriting the DE as and substituting we arrive at the separable DE   The equilibrium solutions are .  Separating the variables and integrating, we have: .  Exponentiating both sides, we obtain   (Note that the singular equilibrium solution is not included).  Next, substituting back ( ), we obtain an implicit general solution of the initial problem .     Regarding     Note that the singular solution is not included.    Since the DE nonlinear, singular solutions were to be expected.             Bernoulli Equations   Motivating Example: A Falling Chain   A portion of a uniform chain that is 8 feet long is loosely coiled around a peg at the edge of a high horizontal platform, and the rest of the chain hangs at rest over the edge of the platform. Suppose the length of the overhanging chain is 3 feet, that the chain weighs 2 lb\/ft, and that the positive direction is downward. Starting at seconds, the weight of the overhanging portion causes the chain on the platform to smoothly uncoil and then fall to the ground. If denotes the length of the chain overhanging the table at time , then is its velocity. If the simplifying assumption of ignoring any resistance forces (e.g., friction), then a model relating to is given by   This differential equation is a Bernoulli equation (to be discussed immediately following). Also, interestingly enough, one can determine an ``integrating factor,'' which, when multiplied by the equation, turns it into an exact equation (the final type of equation to be discussed). If you solve this equation either way, you can determine that      satisfies and    the chain leaves the platform with a velocity of 12.7 ft\/s (found by evaluating , since the chain is 8 ft. long).       Bernoulli Differential Equation   A Bernoulli differential equation is a first-order differential equation of the form .     The Bernoulli equation will be nonlinear so long as .   Bernoulli equations can be solved by transforming them into linear equations. To reduce to linear form, do a change of variables: Differentiating both sides with respect to > gives   We therefore obtain the linear DE     Find a general solution of     Solved in the previous example as homogeneous, writing this equation in standard form gives   We can see that this equation is also Bernoulli (with ). Then or which is a linear equation.  The integrating factor is .  Multiplying both sides by and recognizing the left-hand side as the derivative of a product, we have:   Integrating gives   and substituting back, we obtain an implicit general solution of the initial DE .  Note that the singular equilibrium solution is not included.      Find a general solution of     Divide both sides by , giving:   This is Bernoulli with . Then or .  We now have a linear DE, so we find the integrating factor: .  Multiplying by gives: .  The general solution is then   or            Exercises for   Identify Type   Identify the type(s) of equation for each of the following:                                 Solve Generally   Find a general solution of each of the following differential equations.                                                      Initial Value Problems   Solve the following initial value problems.                          "
},
{
  "id": "sec-subs-2-2",
  "level": "2",
  "url": "sec-subs.html#sec-subs-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Substitution Method "
},
{
  "id": "sec-subs-2-7",
  "level": "2",
  "url": "sec-subs.html#sec-subs-2-7",
  "type": "Example",
  "number": "2.5.1",
  "title": "",
  "body": "  Find a general solution of     Observe that, assuming to be a function of , , by the chain rule, we have:   Hence via the substitution   the DE is transformed into   which we write in standard form is   The latter differential equation is linear, so we may solve it using the method of integrating factor. The integrating factor is   Multiplying both sides by and recognizing the left-hand side as the derivative of a product, we have:   Integrating both sides with respect to gives   Solving for , we obtain   and substituting back, we obtain an implicit general solution of the original equation,    "
},
{
  "id": "sec-subs-3-2-8",
  "level": "2",
  "url": "sec-subs.html#sec-subs-3-2-8",
  "type": "Note",
  "number": "2.5.2",
  "title": "",
  "body": " This problem may also be solved by a different type of substitution, namely, . We will discuss such substitutions a bit later.  "
},
{
  "id": "def-First-order-homogeneous",
  "level": "2",
  "url": "sec-subs.html#def-First-order-homogeneous",
  "type": "Definition",
  "number": "2.5.3",
  "title": "",
  "body": "  First-Order Homogeneous Differential Equations  A first-order homogeneous differential equation is a first-order differential equation that can be written as    "
},
{
  "id": "sec-subs-3-2-13",
  "level": "2",
  "url": "sec-subs.html#sec-subs-3-2-13",
  "type": "Example",
  "number": "2.5.4",
  "title": "",
  "body": "  Find a general solution of     Dividing both sides by , we see that we obtain: Therefore, the DE is homogeneous.  Substituting we obtain the separable DE   The equilibrium solution is .  Separating the variables and integrating, we have: .  (Note that the singular equilibrium solution is not included.)  Multiplying by 2 and substituting back, we obtain an implicit general solution of the initial problem    "
},
{
  "id": "sec-subs-3-2-14",
  "level": "2",
  "url": "sec-subs.html#sec-subs-3-2-14",
  "type": "Note",
  "number": "2.5.5",
  "title": "",
  "body": " In the previous example:   The singular equilibrium solution is not included.    Since the DE is nonlinear, singular solutions were to be expected.     "
},
{
  "id": "sec-subs-3-2-15",
  "level": "2",
  "url": "sec-subs.html#sec-subs-3-2-15",
  "type": "Example",
  "number": "2.5.6",
  "title": "",
  "body": "  Solve the initial value problem     Divide by to get the equation in standard form:   This is a homogeneous equation, so let     Plugging into our DE gives   So, we have   Then .  Integrating by using the substitution for the left-hand integral gives   Substituting back in gives   Find : Since , we have , so .  So we obtain the unique solution    "
},
{
  "id": "sec-subs-4-6",
  "level": "2",
  "url": "sec-subs.html#sec-subs-4-6",
  "type": "Example",
  "number": "2.5.7",
  "title": "",
  "body": "  Find a general solution of     Let .  Then Since , this gives   One can observe that this equation has no equilibrium solutions. (Can you see why not?) .  Substituting back in gives   Therefore, the unique solution is    "
},
{
  "id": "example-Subs-not-linear",
  "level": "2",
  "url": "sec-subs.html#example-Subs-not-linear",
  "type": "Example",
  "number": "2.5.8",
  "title": "",
  "body": "  Find a general solution of     Rewriting the DE as and substituting we arrive at the separable DE   The equilibrium solutions are .  Separating the variables and integrating, we have: .  Exponentiating both sides, we obtain   (Note that the singular equilibrium solution is not included).  Next, substituting back ( ), we obtain an implicit general solution of the initial problem .   "
},
{
  "id": "sec-subs-4-8",
  "level": "2",
  "url": "sec-subs.html#sec-subs-4-8",
  "type": "Remark",
  "number": "2.5.9",
  "title": "Regarding Example 2.5.8.",
  "body": " Regarding     Note that the singular solution is not included.    Since the DE nonlinear, singular solutions were to be expected.     "
},
{
  "id": "sec-subs-5-2-3",
  "level": "2",
  "url": "sec-subs.html#sec-subs-5-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bernoulli equation "
},
{
  "id": "sec-subs-5-3",
  "level": "2",
  "url": "sec-subs.html#sec-subs-5-3",
  "type": "Definition",
  "number": "2.5.10",
  "title": "Bernoulli Differential Equation.",
  "body": " Bernoulli Differential Equation   A Bernoulli differential equation is a first-order differential equation of the form .   "
},
{
  "id": "sec-subs-5-4",
  "level": "2",
  "url": "sec-subs.html#sec-subs-5-4",
  "type": "Remark",
  "number": "2.5.11",
  "title": "",
  "body": " The Bernoulli equation will be nonlinear so long as .  "
},
{
  "id": "sec-subs-5-7",
  "level": "2",
  "url": "sec-subs.html#sec-subs-5-7",
  "type": "Example",
  "number": "2.5.12",
  "title": "",
  "body": "  Find a general solution of     Solved in the previous example as homogeneous, writing this equation in standard form gives   We can see that this equation is also Bernoulli (with ). Then or which is a linear equation.  The integrating factor is .  Multiplying both sides by and recognizing the left-hand side as the derivative of a product, we have:   Integrating gives   and substituting back, we obtain an implicit general solution of the initial DE .  Note that the singular equilibrium solution is not included.   "
},
{
  "id": "sec-subs-5-8",
  "level": "2",
  "url": "sec-subs.html#sec-subs-5-8",
  "type": "Example",
  "number": "2.5.13",
  "title": "",
  "body": "  Find a general solution of     Divide both sides by , giving:   This is Bernoulli with . Then or .  We now have a linear DE, so we find the integrating factor: .  Multiplying by gives: .  The general solution is then   or    "
},
{
  "id": "sec-subs-6-2-3",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-2-3",
  "type": "Exercise",
  "number": "2.5.5.1",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-2-4",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-2-4",
  "type": "Exercise",
  "number": "2.5.5.2",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-2-5",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-2-5",
  "type": "Exercise",
  "number": "2.5.5.3",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-2-6",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-2-6",
  "type": "Exercise",
  "number": "2.5.5.4",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-3-3",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-3-3",
  "type": "Exercise",
  "number": "2.5.5.5",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-3-4",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-3-4",
  "type": "Exercise",
  "number": "2.5.5.6",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-3-5",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-3-5",
  "type": "Exercise",
  "number": "2.5.5.7",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-3-6",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-3-6",
  "type": "Exercise",
  "number": "2.5.5.8",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-3-7",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-3-7",
  "type": "Exercise",
  "number": "2.5.5.9",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-3-8",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-3-8",
  "type": "Exercise",
  "number": "2.5.5.10",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-3-9",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-3-9",
  "type": "Exercise",
  "number": "2.5.5.11",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-4-3",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-4-3",
  "type": "Exercise",
  "number": "2.5.5.12",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-4-4",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-4-4",
  "type": "Exercise",
  "number": "2.5.5.13",
  "title": "",
  "body": "      "
},
{
  "id": "sec-subs-6-4-5",
  "level": "2",
  "url": "sec-subs.html#sec-subs-6-4-5",
  "type": "Exercise",
  "number": "2.5.5.14",
  "title": "",
  "body": "      "
},
{
  "id": "sec-Exact",
  "level": "1",
  "url": "sec-Exact.html",
  "type": "Section",
  "number": "2.6",
  "title": "Exact Differential Equations",
  "body": " Exact Differential Equations   Introduction  Consider a first-order differential equation sometimes written in a more symmetric differential form    Observe that any first-order differential equation can be written as or with and .  However, if it happens that there is a function such that then differential equation turns into   Such a differential is called exact since its left-hand side is exactly the derivative of relative to , assuming to be a function of , , and applying the chain rule.  Thus, in this case, we have:   Consequently, the equation implicitly defines the general solution of the original differential equation.    How Do We Know If a Differential Equation Is Exact?  In (or, equivalently, ), if and are defined and have continuous first partial derivatives in an open region in the -plane, then   By the assumption of the continuity of the first partial derivatives of and , the second derivatives of are also continuous. Then, by equality of mixed partial derivatives (see, e.g., ), we obtain the following condition that must be satisfied for the differential equation to be exact:     How Do We Solve an Exact Differential Equation?  Provided condition holds, the equation is exact and, since we are looking for a function such that , we have   Recall that when integrating a function of and relative to , we obtain instead of the integration constant an arbitrary function of , .  Since, we also have the condition that , we differentiate the former expression relative to , obtaining a differential equation for , which we solve for and, thus, obtain .  Observe that the order of finding can be different: we can, first, use the condition , obtaining where, since we are integrating with respect to we obtain an arbitrary function of , , instead of the integration constant. Since , we differentiate the former expression with respect to , obtaining a differential equation for , which we solve for and, thus, obtain .    Find a general solution of     As is easily checked this DE is exact (also separable and linear!). Since , and the equation is exact.  Now we are looking for a function such that , where is a function to be determined.  Since , we have that or   This gives, , and thus, ( ).  Therefore, and the general solution is given by , so we have or       Find a general solution of     Since and the equation is exact.  Next, find . .  Now, since , find the partial derivative of with respect to and set it equal to to find .  Since , we have We then solve for . .  So, .  We do not need to include the in the above calculation, because our solution is of the form , and so the constants will be combined in the solution. The general solution is given by the equation       Solve the initial value problem     Since and the equation is exact.  Next, find . .  Now, since , find the partial derivative of with respect to and set it equal to to find . We have .  As noted at the end of , we can omit the in the calculation, so , and the general solution is given by , so we get the equation   Lastly we can find the value of : Use , which gives . Substituting into the general solution gives .  So, in conclusion, the solution to equation is    Note: The astute reader might have noticed that this equation is also separable. You should verify that solving as a separable equation gives the same results.           Exercises for    Determine if the following equations are exact. If not, then state that the equation is not exact. If it is exact, say so and find a general solution of the equation.                                   Find a general solution of the equation       Solve the initial value problem      "
},
{
  "id": "sec-Exact-2-2",
  "level": "2",
  "url": "sec-Exact.html#sec-Exact-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential form "
},
{
  "id": "sec-Exact-2-5",
  "level": "2",
  "url": "sec-Exact.html#sec-Exact-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exact "
},
{
  "id": "sec-Exact-4-6",
  "level": "2",
  "url": "sec-Exact.html#sec-Exact-4-6",
  "type": "Example",
  "number": "2.6.1",
  "title": "",
  "body": "  Find a general solution of     As is easily checked this DE is exact (also separable and linear!). Since , and the equation is exact.  Now we are looking for a function such that , where is a function to be determined.  Since , we have that or   This gives, , and thus, ( ).  Therefore, and the general solution is given by , so we have or    "
},
{
  "id": "example-Exact-no-need-for-c",
  "level": "2",
  "url": "sec-Exact.html#example-Exact-no-need-for-c",
  "type": "Example",
  "number": "2.6.2",
  "title": "",
  "body": "  Find a general solution of     Since and the equation is exact.  Next, find . .  Now, since , find the partial derivative of with respect to and set it equal to to find .  Since , we have We then solve for . .  So, .  We do not need to include the in the above calculation, because our solution is of the form , and so the constants will be combined in the solution. The general solution is given by the equation    "
},
{
  "id": "sec-Exact-4-8",
  "level": "2",
  "url": "sec-Exact.html#sec-Exact-4-8",
  "type": "Example",
  "number": "2.6.3",
  "title": "",
  "body": "  Solve the initial value problem     Since and the equation is exact.  Next, find . .  Now, since , find the partial derivative of with respect to and set it equal to to find . We have .  As noted at the end of , we can omit the in the calculation, so , and the general solution is given by , so we get the equation   Lastly we can find the value of : Use , which gives . Substituting into the general solution gives .  So, in conclusion, the solution to equation is    Note: The astute reader might have noticed that this equation is also separable. You should verify that solving as a separable equation gives the same results.   "
},
{
  "id": "exercises-For-exact-2",
  "level": "2",
  "url": "sec-Exact.html#exercises-For-exact-2",
  "type": "Exercise",
  "number": "2.6.3.1",
  "title": "",
  "body": "  Determine if the following equations are exact. If not, then state that the equation is not exact. If it is exact, say so and find a general solution of the equation.                                "
},
{
  "id": "exercises-For-exact-3",
  "level": "2",
  "url": "sec-Exact.html#exercises-For-exact-3",
  "type": "Exercise",
  "number": "2.6.3.2",
  "title": "",
  "body": "  Find a general solution of the equation    "
},
{
  "id": "exercises-For-exact-4",
  "level": "2",
  "url": "sec-Exact.html#exercises-For-exact-4",
  "type": "Exercise",
  "number": "2.6.3.3",
  "title": "",
  "body": "  Solve the initial value problem    "
},
{
  "id": "exercises-First-order-review",
  "level": "1",
  "url": "exercises-First-order-review.html",
  "type": "Exercises",
  "number": "2.7",
  "title": "Chapter 2 Review Problems",
  "body": " Review Problems   Identify   For each of the following, identify the type(s) of the equation:                                 General Solutions   Find a general solution of each of the following equations:                   Solve in three ways.      Initial Value Problems   Solve the following initial value problems:                  "
},
{
  "id": "exercises-First-order-review-2-3",
  "level": "2",
  "url": "exercises-First-order-review.html#exercises-First-order-review-2-3",
  "type": "Exercise",
  "number": "2.7.1",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-First-order-review-2-4",
  "level": "2",
  "url": "exercises-First-order-review.html#exercises-First-order-review-2-4",
  "type": "Exercise",
  "number": "2.7.2",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-First-order-review-2-5",
  "level": "2",
  "url": "exercises-First-order-review.html#exercises-First-order-review-2-5",
  "type": "Exercise",
  "number": "2.7.3",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-First-order-review-2-6",
  "level": "2",
  "url": "exercises-First-order-review.html#exercises-First-order-review-2-6",
  "type": "Exercise",
  "number": "2.7.4",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-First-order-review-3-3",
  "level": "2",
  "url": "exercises-First-order-review.html#exercises-First-order-review-3-3",
  "type": "Exercise",
  "number": "2.7.5",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-First-order-review-3-4",
  "level": "2",
  "url": "exercises-First-order-review.html#exercises-First-order-review-3-4",
  "type": "Exercise",
  "number": "2.7.6",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-First-order-review-3-5",
  "level": "2",
  "url": "exercises-First-order-review.html#exercises-First-order-review-3-5",
  "type": "Exercise",
  "number": "2.7.7",
  "title": "",
  "body": "  Solve in three ways.   "
},
{
  "id": "exercises-First-order-review-4-3",
  "level": "2",
  "url": "exercises-First-order-review.html#exercises-First-order-review-4-3",
  "type": "Exercise",
  "number": "2.7.8",
  "title": "",
  "body": "      "
},
{
  "id": "exercises-First-order-review-4-4",
  "level": "2",
  "url": "exercises-First-order-review.html#exercises-First-order-review-4-4",
  "type": "Exercise",
  "number": "2.7.9",
  "title": "",
  "body": "      "
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
