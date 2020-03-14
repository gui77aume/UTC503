#define N 5

void mapDouble(int e[], int r[]){
  int i,t;
  for (i=0;i<N;i++){
    t=e[i];
    r[i]=2*t;
    
  }
}

int main() {

  
  int e[N] = {1,5,2,4,3};
  int r[N];
  
  mapDouble(e,r);

  return 0;
}