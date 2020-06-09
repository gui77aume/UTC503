arc(1,2).
arc(1,3).
arc(2,4).
arc(2,5).
arc(3,5).
arc(5,6).
arc(4,5).
arc(4,6).
/*or = point-virgule*/
chemin(X,Y) :- arc(X,Y); arc(X,Z),chemin(Z,Y).
