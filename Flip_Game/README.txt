Playing Instruction :
	open the game browser. 
	click on the box and find out the matching one.
	if you find the matching boxes it will turn front and remaining will be closed.
	if you have matched all the boxes. pop up will open.
	if you need to play again please click on the restart game button.


created array list with the name of emojis using const datatype.

emojis array list contains the emojis for flip memory game.

created variable shuf_emojis using var datatype. It is used to suffle the emojis list order on every refresh or reset option using  math.random function.

create for loop. create variable i. Assign i as 0. Check condition whether i is lesser than the length of emojis array. Increase the value of i using i++.

create box using let datatype.

Assign box as document.createelement('div')

assign class item to box using .className

create click event and execute a function using .onclick event trigger.

add classlist as boxopen.

if boxopen length is greater than 1. Then it will check where the boxopen arraylist values as 0 and 1 are same or not.

if boxopen arraylist 0 and 1 is equal it will modify some list values. Like it will add the both 0 and 1 values in boxmatch list and remove both 0 and 1 values from boxopen.

if boxmatch array length is equal to the original emojis array length. Then it will pop up an alert like ('You have won the match. Please Click Restart Button to play again.')
