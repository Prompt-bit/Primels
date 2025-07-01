#include <iostream>


void Protect() {
    std::cout << "Protected PC" << std::endl;
    std::cout << "No threats are found" << std::endl;
    std::cout << "Enter a new feature";
    std::cin;
}


int protect(int number, int id);


#ifndef Protect
#define Protect

#endif // Protect