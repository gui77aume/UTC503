#define N 5

void mapDouble(int e[], int r[]){
  int i,t;
  for (i=0;i<N;i++){
    t=e[i];
    r[i]=2*t;
    
  }
}

void mapTriple(int e[], int r[]){
  int i,t;
  for (i=0;i<N;i++){
    t=e[i];
    r[i]=3*t;
    
  }
}

void mapSquare(int e[], int r[]){
  int i,t;
  for (i=0;i<N;i++){
    t=e[i];
    r[i]=t*t;
    
  }
}

void mapMaximise3(int e[], int r[]){
  int i,t;
  for (i=0;i<N;i++){
    t=e[i];
    if (t>3) t=3;
    r[i]=t;
    
  }
}

int main() {

  
  int e[N] = {1,5,2,4,3};
  int r[N];
  
  mapDouble(e,r);
  
  mapTriple(e,r);
  
  mapSquare(e,r);
  
  mapMaximise3(e,r);

  return 0;
}