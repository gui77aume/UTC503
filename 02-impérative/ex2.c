int main() {

int n,mem,factorielle;
mem = n = factorielle = 5;

for (n=5;n>1;n--) {
factorielle = factorielle *( n-1);
}

printf("La factorielle de %d est égale à %d\n", mem, factorielle);
return 0;
}