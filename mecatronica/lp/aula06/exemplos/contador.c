#include <stdio.h>

int main()
{
    int i = 10;
    i = i + 1;
    printf("%d\n", i);
    i++;
    printf("%d\n", i);
    i = i + 5;
    printf("%d\n", i);
    i += 7;
    printf("%d\n", i);
    i = i - 1;
    printf("%d\n", i);
    i--;
    printf("%d\n", i);
    i = i - 8;
    printf("%d\n", i);
    i -= 8;
    printf("%d\n", i);
    i = i * 3;
    printf("%d\n", i);
    i *= 3;
    printf("%d\n", i);
    i = i / 3;
    printf("%d\n", i);
    i /= 3;
    printf("%d\n", i);
    return 0;
}