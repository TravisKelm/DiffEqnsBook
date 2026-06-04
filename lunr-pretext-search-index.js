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
  "body": " Introduction to First-Order Differential Equations        Particular, General, and Singular Solutions   Particular, General, and Singular Solutions   A function is said to be a solution of differential equation on an interval provided it is differentiable on and   A one-parameter family of solutions of differential equation containing an arbitrary constant is called a general solution .  Any particular choice of a specific value for yields a particular solution .  A first-order differential equation may have both a general solution involving an arbitrary constant and particular solutions that cannot be obtained from it by any choice of . Such exceptional solutions are called singular solutions (see Examples in Section ).  To solve is to find all of its solutions.     Since a differentiable function is necessarily continuous, every solution of on an interval must be continuous on .   For a first-order equation of the form   where is a continuous function on an interval , a general solution on is   where is an antiderivative of on . By the Fundamental Theorem of Calculus (see, e.g., ), we can set   where is a fixed point in .     The one-parameter family ( ) is a general solution of the equation.   on .    The one-parameter family ( ) is the general solution of the equation.   on each of the intervals and .            Initial Value Problems   Initial Value Problem   A first-order differential equation is often accompanied by a condition of the form:   where and are specified values. Such a condition is called an initial condition (IC) and such a problem   is called an initial value problem (IVP).  A solution of the initial value problem is a function satisfying both the differential equation on some interval containing and the initial condition.    One way to solve initial value problem is to     first find the general solution of the equation, which, provided the differential equation is of the form   can be done via indefinite integration   and    then, plug and into the general solution, and solve for .       Solve the initial value problem    Solution: Considering that the initial -value 1 is in the interval , where , we obtain the unique solution of the IVP from the general solution of the equation on by substituting the values and into it:   which yields .  Thus, the unique solution to the IVP on is       An alternative definite-integral approach to solving an initial value problem of the form   which bypasses finding the general solution of the differential equation, is based on the Fundamental Theorem of Calculus and, provided the function is continuous on an interval containing , gives the unique solution of the IVP by the formula   In the following two examples, we will compare the two approaches to solving initial value problem .   Indefinite Integral Approach   Solve the differential equation     First, we find the general solution of the equation   Using substitution ( , so ), we obtain   Next, we need to determine the value of for which the solution we have obtained will satisfy the IVP.  Substituting in the initial condition gives   which we solve to find . The unique solution is, therefore,   or      Definite Integral Approach   Solve the differential equation     The desired solution is given by the formula   Integrating by parts, with   we have:   Therefore, the solution is            Exercises for  Find a general solution of the following equations.                     Solve the following initial value problems.                      "
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
  "id": "subsec-IVP-11",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#subsec-IVP-11",
  "type": "Example",
  "number": "2.1.6",
  "title": "Indefinite Integral Approach.",
  "body": " Indefinite Integral Approach   Solve the differential equation     First, we find the general solution of the equation   Using substitution ( , so ), we obtain   Next, we need to determine the value of for which the solution we have obtained will satisfy the IVP.  Substituting in the initial condition gives   which we solve to find . The unique solution is, therefore,   or    "
},
{
  "id": "subsec-IVP-12",
  "level": "2",
  "url": "sec-Intro-to-first-order.html#subsec-IVP-12",
  "type": "Example",
  "number": "2.1.7",
  "title": "Definite Integral Approach.",
  "body": " Definite Integral Approach   Solve the differential equation     The desired solution is given by the formula   Integrating by parts, with   we have:   Therefore, the solution is    "
},
{
  "id": "sec-Separable",
  "level": "1",
  "url": "sec-Separable.html",
  "type": "Section",
  "number": "2.2",
  "title": "Separable Differential Equations",
  "body": " Separable Differential Equations        Motivating Example: Home Loan  Suppose you want to take out a 30-year loan to purchase a house. If interest rates are 4.75% and you know that you can afford at most $1,250 per month, you would like to determine the most expensive house that you can purchase in order pay off the loan on time. To do this, define as the amount that you owe after years. Since you can afford $1,250 per month, your annual payments will be . The balance due will gain 4.75% interest, so that amount added to the balance annually is . Thus, the rate of change in the amount of money due is given by the difference between the amount the loan increases and the amount that you pay on the loan, or . The initial condition is , because you want the entire loan to be paid off by the end of the 30 years. This gives the initial value problem   This is a separable equation, as we will see momentarily (also a linear equation, as we will see in Section ). The solution to is   The size of the loan you should take is the amount you owe at the beginning, or , which is $239,839.43.         Definition and Examples   Separable Differential Equation   A first-order differential equation   whose right-hand side can be factored into , i.e., it can written in the form   is called separable .  There are two special cases of separable equations:         is separable.     is separable.    The exponential differential equation where is separable (and autonomous).    The logistic differential equation where ( are constants) is separable (and autonomous).     is separable.     is not separable. As we will see in Section , this equation is also linear .     is not separable.            Method of Separation of Variables  Consider a separable differential equation   Observe that, if there is such a such that , then the constant function is a so-called equilibrium solution of the equation. The method of separation of variables is used for solving these differential equations.        How Separation of Variables Works  The method of separation of variables works as follows:    Find all equilibrium solutions from the equation     Separate the variables:     Integrate both sides:     Solve the resulting equation for , whenever possible, obtaining a general solution. The equilibrium solutions that are not included in this general solution give the singular solutions.      The separable differential equation has a general solution of ( ) and the singular equilibrium solution not included in the general solution.     If it is impossible (or impractical) to solve the resulting equation for , the general solution is said to be an implicit general solution .    Solving a Separable Differential Equation   Solve the differential equation     To solve this separable DE, we apply the method of separation of variables.    Find the equilibrium solutions from the equation   Clearly, there is only one: .    Separate the variables:     Integrate both sides:     Solve the resulting equation for :   Renaming to simply , we obtain the general solution    Question: What is the reason for the requirement that ?  Observe that the equilibrium solution is attained when .             Why Separation of Variables Works  The method of separation of variables is based on the substitution rule for indefinite integrals .  Indeed, let be a nonequilibrium solution of a separable equation on an interval .  Then, for all ,   Dividing both sides of differential equation by and integrating, we obtain   Using the substitution , we obtain   Thus, any nonequilibrium solution of differential equation satisfies integral equation .  Conversely, a function , implicitly defined by integral equation on the interval , solves on . Indeed, differentiating relative to by the chain rule (considering ), we arrive at for all .          Exercises for Section     Determine which of the following first order differential equations are separable.                                 Apply the method of separation of variables to verify .     Find a general solution for each of the following equations.                               Solve the following initial value problems.                                          "
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
  "body": "    is separable.     is separable.    The exponential differential equation where is separable (and autonomous).    The logistic differential equation where ( are constants) is separable (and autonomous).     is separable.     is not separable. As we will see in Section , this equation is also linear .     is not separable.    "
},
{
  "id": "subsec-Separation-of-variables-4",
  "level": "2",
  "url": "sec-Separable.html#subsec-Separation-of-variables-4",
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
  "number": "2.2.3",
  "title": "",
  "body": "  The separable differential equation has a general solution of ( ) and the singular equilibrium solution not included in the general solution.   "
},
{
  "id": "subsubsec-How-separation-works-5",
  "level": "2",
  "url": "sec-Separable.html#subsubsec-How-separation-works-5",
  "type": "Remark",
  "number": "2.2.4",
  "title": "",
  "body": " If it is impossible (or impractical) to solve the resulting equation for , the general solution is said to be an implicit general solution .  "
},
{
  "id": "example-Separable-worked-out",
  "level": "2",
  "url": "sec-Separable.html#example-Separable-worked-out",
  "type": "Example",
  "number": "2.2.5",
  "title": "Solving a Separable Differential Equation.",
  "body": " Solving a Separable Differential Equation   Solve the differential equation     To solve this separable DE, we apply the method of separation of variables.    Find the equilibrium solutions from the equation   Clearly, there is only one: .    Separate the variables:     Integrate both sides:     Solve the resulting equation for :   Renaming to simply , we obtain the general solution    Question: What is the reason for the requirement that ?  Observe that the equilibrium solution is attained when .     "
},
{
  "id": "sepapp",
  "level": "1",
  "url": "sepapp.html",
  "type": "Section",
  "number": "2.3",
  "title": "Applications of Separable Equations",
  "body": " Applications of Separable Equations        Radiocarbon Dating  Carbon-14 is a radioactive isotope of carbon produced in the upper atmosphere by radiation from the sun. Plants absorb carbon dioxide from the air, and living organisms eat plants. The ratio of normal carbon (Carbon-12) to Carbon-14 in the air and living things is nearly constant. When a living creature dies, the Carbon-14 begins to decrease due to radioactive decay. By comparing the amounts of Carbon-12 and Carbon-14, the amount of Carbon-14 that has decayed can be determined.        Mathematical Model  Let amount of Carbon-14 present at time after death.  The model of radioactive decay we'll use is:   We need additional information to find . For example, if we have the half-life of Carbon-14 (which is standard information for a radioactive isotope), we can determine .         Sample Case  The half-life of Carbon-14 is approximately 5,730 years. Suppose remains have been found in which it is estimated that 30% of the original Carbon-14 is present. Estimate the age of the remains.   Step 1: Solve the IVP    Note: We can also set (for 100%) or (for 100% in decimal form).  By separation of variables, we see that the general solution is   Using the initial condition, , so    Step 2: Find   To find , we will use the half-life of Carbon-14. Since the half-life is the amount of time for half of the sample to decay, we know that Therefore,    Step 3: Determine the age of the remains.  At time (the age), we have 30%of the original amount of Carbon-14, or So, plugging this into our solution for will allow us to solve for the age of the remains.           Geometric Example  Find the curve with slope through the point (0, 1).   Solution: The differential equation modeling this problem has the implicit general solution   Substituting and into it, we arrive at so , and therefore, the desired curve is the unit circle .         Mixing Problem  A typical mixing problem is about the amount or concentration of a solute in a solution with certain flows of solutions with the same solute into and out of a container holding the solution.   Model: Let be the amount of solute in the container at any time . Then, we have that   rate of change in amount of solute = total solute inflow rate total solute outlow rate  (i.e., ).    Note: The total solute inflow rate is determined by summing the inflow rates from each source, and similarly for the total solute outflow rate.  Each solute inflow rate is found by multiplying the rate at which fluid flows into the container by the concentration of solute:     Each solute outflow rate is found by multiplying the rate at which fluid flows out of the container by the concentration of solute in the container:      The resulting DE is a first-order linear equation regardless of whether the rates, concentrations, and volume are constant or variable. When all of the rates, concentrations, and volume are constant, this equation is also separable (and even autonomous).    Mixing Problem with Constant Volume  A tank contains L of pure water. A brine containing kg\/L of salt enters the tank at a constant rate of L\/min. A brine containing kg\/L of salt enters the tank at a constant rate of L\/min. The solution is kept thoroughly mixed and drains from the tank at a constant rate of L\/min.    Set up an initial value problem describing how the amount of salt in the tank changes over time.    Find the amount of salt in the tank after min.     Mixing Problem with Constant Volume   Image of cylindrical tank with two input sources and one output drain.        Let be the amount of salt in the tank (kg) after min.  The rate of change of the amount of salt in the tank (kg\/min) consists of the two components:     the inflow rate of salt entering the tank, which consists of the sum of the rates coming from the two sources     the outflow rate of salt leaving the tank:      Since initially there was no salt in the tank ( ), we obtain at the following IVP model for the mixing problem:     The DE is separable, and more precisely, it is autonomous. Applying the method of separation of variables, we have:     The equilibrium solution is .    Separating the variables, we obtain   Now we solve for :     Find : Using the initial condition , we have so and the solution of the problem is         The Graph of ( )   Curve that starts at origin and increases towards a horizontal asymptote at .  Note that increasingly tends to the equilibrium kg as , but never attains it.           Newton's Law of Cooling\/Heating  Newton's Law of Cooling\/Heating states that the rate of change of the temperature of an object, , is proportional to the difference between the ambient temperature of the surroundings, , and : where is the constant of proportionality.    Consider a tray of cookies removed from the oven at 350 F and placed in a room with a temperature of 72 F. If the cookies are at 240 F after 10 minutes, how long will it take for them to cool to 80 F?    The IVP modeling this situation is given by applying equation :   We will apply the method of separation of variables. Separating variables gives   Integrate both sides and solve for :   We next need to determine and . We first find using the initial condition:   So, we have   Now we use the fact (given in the problem) that to find .   Then take the natural log of both sides and solve for :   Let denote the time at which the temperature of the cookies is 80 F. Then     Solving for gives us . So, the cookies will be at 80 F after 70.45 minutes, or after 1 hour, 10 minutes, and 27 seconds.           Exercises for Section     Verify the solution to the Geometric Application problem.    Find the equation of the curve with slope through the point . What type of curve is this?    Find the equation of the curve with slope through the point . What type of curve is this?    (Drug Elimination) The amount of a certain drug in the bloodstream as a function of time declining at a rate proportional to the current excess amount relative to the natural level of the drug (typically 0) is modeled by the differential equation   where . Suppose that after 2 hours, half of the initial amount of the drug is left in the patient's system (i.e., ). Find assuming that initially, the patient is given 250 mg of the drug (i.e., ).    (Radiocarbon Dating) The half-life of Carbon-14 is approximately 5,730 years. Suppose remains have been found in which it is estimated that 65%of the original Carbon-14 has decayed. Estimate the age of the remains.    (Population Model) A new species of animal has just been discovered. The rate of change in the size of its population was found to be proportional to the square root of its current size.     Formulate a mathematical model describing the population size of this new species over time.    If the initial population is animals and, after 2 months, the population has grown to 400 animals, determine the size of the population at any time .    How long before the population has grown to 1000 animals?       (Logistic Population Model) A population model that takes into account the fact that, as a population grows in size its rate of change decreases, is the logistic model . Given a population of size , the logistic model is defined by     where is the intrinsic growth rate of the population in a given area (the growth rate in the absence of any restrictions) and is the carrying capacity of the area (the maximum population that can be supported).  If per year and , use the logistic equation to determine the population size at any time of a species with an initial population of 1000.   Hint: You will need to use partial fractions to evaluate the integral on the left-hand side.       "
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
  "body": " Mixing Problem with Constant Volume  A tank contains L of pure water. A brine containing kg\/L of salt enters the tank at a constant rate of L\/min. A brine containing kg\/L of salt enters the tank at a constant rate of L\/min. The solution is kept thoroughly mixed and drains from the tank at a constant rate of L\/min.    Set up an initial value problem describing how the amount of salt in the tank changes over time.    Find the amount of salt in the tank after min.     Mixing Problem with Constant Volume   Image of cylindrical tank with two input sources and one output drain.        Let be the amount of salt in the tank (kg) after min.  The rate of change of the amount of salt in the tank (kg\/min) consists of the two components:     the inflow rate of salt entering the tank, which consists of the sum of the rates coming from the two sources     the outflow rate of salt leaving the tank:      Since initially there was no salt in the tank ( ), we obtain at the following IVP model for the mixing problem:     The DE is separable, and more precisely, it is autonomous. Applying the method of separation of variables, we have:     The equilibrium solution is .    Separating the variables, we obtain   Now we solve for :     Find : Using the initial condition , we have so and the solution of the problem is         The Graph of ( )   Curve that starts at origin and increases towards a horizontal asymptote at .  Note that increasingly tends to the equilibrium kg as , but never attains it.   "
},
{
  "id": "ex-newt",
  "level": "2",
  "url": "sepapp.html#ex-newt",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": "  Consider a tray of cookies removed from the oven at 350 F and placed in a room with a temperature of 72 F. If the cookies are at 240 F after 10 minutes, how long will it take for them to cool to 80 F?    The IVP modeling this situation is given by applying equation :   We will apply the method of separation of variables. Separating variables gives   Integrate both sides and solve for :   We next need to determine and . We first find using the initial condition:   So, we have   Now we use the fact (given in the problem) that to find .   Then take the natural log of both sides and solve for :   Let denote the time at which the temperature of the cookies is 80 F. Then     Solving for gives us . So, the cookies will be at 80 F after 70.45 minutes, or after 1 hour, 10 minutes, and 27 seconds.   "
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
