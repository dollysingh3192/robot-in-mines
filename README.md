# robot-in-mines

Step 1: I took advantage of the symmetry of the problem by calculating the area in the first quadrant and multiplying it with 4 to get the total area(all quadrant).

Step 2: First step I found out all the boundary points of the required region. I  started from the origin(0,0). I fixed x to 0 and incremented y by 1 repeatedly. Then I calculated the sum of digits of both x and y every time and checked whether the sum is equal to 23. I stopped incrementing y when the sum of digits became 23.

Step 3:After that, I set x to 1 and y to 0 and increment y repeatedly until the sum becomes 23. I did the same thing again and again until the final coordinate (599,0) is reached. After this coordinate, the robot cannot move ahead.

Step 4:After finding out all the boundary points in the first quadrant I found out the area in the following manner.

The robot moves on a grid so the area in first quadrant:
x:0 , y:599
x:1 , y:499
x:2 , y:399
x:3, y:299
x:4, y:199
....
x:590, y:0
area = 599*1+499*1+399*1+299*1+199*1 + ..... + 0*1 = 31020 which I  observe, is nothing but the sum of y coordinates of all the points. I used the above method for finding out the required area in the first quadrant.

Step 5: But the robot can move in all the quadrants. So I multiplied the area obtained in the first quadrant by 4 to get the total area in all the four quadrants in which the robot can move that is 124080.
