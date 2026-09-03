 # EventLoop

 JS is synchronuous  and single threaded bydefault 
 ## There can be async behaviour
 -- with BrowerAPI --setTime, setInterval, setImmediate, nextTick

 --with promises

 --with event handlers

 --a function is not excuted immediatly but it must be excuted by run, it have some status
 at minor it may reslove 
## Call back
 --Call back function => that pass as argument or the paramenter to another function


## Modern java script is divided into 2 types...
1. Common JS (.cjs) -> supports OOPS -> require
   - priority (nextTick, Promise, setImmediate/setTimeout)
2. ModuleJS (.mjs)  -> follow modular approach -> import
   - priority (Promise, nextTick,setImmediate/setTimeout)

## FS Module
-- it is directly communicate with  operation on a file of folder are
1. File -> rightFile , readFile , abndFile
2. Folder -> md
3. File metadat
 ->sht
 ->lsht
 ->rsht
4. Watch -> watch
5. Stream

## File System (FS Module)

assume we are making a cart realted project
1. user can add any product (id, name , orice, qty) into cart 
2. user can see all the itmes from cart
3. user can remove item from cart 
4. user can also update quantity of product 
5. all the items should be stored after trmination of project