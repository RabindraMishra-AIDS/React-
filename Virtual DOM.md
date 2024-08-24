Currently Virtual DOM is not used as such in react.
.createRoot method is used to create a DOM LIKE structure same like browser.
It will compare mainDOM and apna khud ka DOM and updates only those DOM which is updated in UI.


//-------------------------- Page Reload--------------------------------------------

Thus Browser removes the whole DOM and creates a new DOM (This is called as Page Reload)

In virtual DOM we trace that tree like structure and then whatever changes has occured it will replace it with that DOM Element.

//--------------------------------Immediate Update ------------------------------------
Frequent updating and that too immediately can create unnecessary steps which can be reduced ie.skipping the intermediate steps
This Frequent updating can cause degrading the user experience.
Thus every UI need not to be updated immediately.
There are two types of updates 1)Pull Based 2)Push Based (React will smartly assign the update priority)

****************************************** React Fibre Architecture ******************************
Now, React is using Fibre as a core algorithm to update virtual DOM.
Fibre Architecture is difficult to understand and implement.
It gives us the ability to assign different types of updates.
It is a very well structured Algorithm.

***************************************** Hydration Process ***************************************
During first time when the web element is being painted it first loads the webpage.Then the javascript is injected such as onClick on Buttons & Other Functionalities 
This is called as Hydration Process


**************************************** Reconciliation *********************************************
The Algorithm the react uses to diff one tree with another to determine which Part to change.
(React Tree v/s DOM Tree).
The central idea of reacts API is to think of Updates as if they causue the entire app to re-render.


######################################## Key Components #################################################
a)Different components types are assumed to generate substantially different trees.react will not attempt to diff them,but rather 
replace the old trees completely.
b)Diffing of lists is performed using keys.keys should be "stable,predictable and unique".

