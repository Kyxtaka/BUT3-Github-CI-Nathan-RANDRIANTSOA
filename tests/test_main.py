import pytest 

from greeting.main import greet   
from greeting.utils import add, sub   

def test_greet(): 
    assert greet("World") == "Hello, World!"

def test_add(): 
    assert add(5,7) == 12  

def test_seb():
    assert sub(5 - 5) == 0


    