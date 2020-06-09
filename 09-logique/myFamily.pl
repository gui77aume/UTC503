

/* facts from the family tree of the Stark family. */
/* parent(X, Y) is true when X is the parent of Y. */
parent(dominique,louis).
parent(dominique,paulette).
parent(jean_pierre,lucien).
parent(jean_pierre,irene).
parent(marie_chrisitine,lucien).
parent(marie_chrisitine,irene).
parent(guillaume,jean_pierre).
parent(guillaume,dominique).
parent(olivier,jean_pierre).
parent(olivier,dominique).

female(dominique).
female(paulette).
female(irene).

male(jean_pierre).
male(louis).
male(guillaume).
male(olivier).
male(lucien).

grandparent(X,Y) :- parent(Z,Y),parent(X,Z).
grandmother(X,Y) :- grandparent(X,Y), female(Y).
grandfather(X,Y) :- grandparent(X,Y), male(Y).
brothers(X,Y) :- parent(X,Z),parent(Y,Z),X\=Y,male(X),male(Y).
sister(X,Y) :- parent(X,Z),parent(Y,Z),X\=Y,female(X). /*X est la soeur de Y*/
mother(X,Y) :- parent(X,Y),female(Y). 
father(X,Y) :- parent(X,Y),male(Y). /*Y est le père */
son(X,Y) :- parent(Y,X),male(Y). /* Y est le fils */ 
siblings(X,Y):- parent(X,Z),parent(Y,Z),X\=Y.
aunt(X,Y) :- parent(X,Z),siblings(Y,Z),female(Y). /* Y tante de X */
