#include <stdio.h>


int main() {

int n,mem,factorielle;
mem = n = factorielle = 5;

debut :
if ( n == 1 ) goto fin ;

factorielle = factorielle *( n-1);
n--;
goto debut ;

fin :
printf("La factorielle de %d est égale à %d\n", mem, factorielle);
return 0;
}