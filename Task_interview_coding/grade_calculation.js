let grade;
score = 0;

if (score != 100 && score < 0)
    {
    grade =  (" enter valid score");
}
if (score >= 90) 
{
    grade = "A";
}
else if(score >= 80)
{ 
    grade = "B";
}
else if(score >= 70)
{ 
    grade = "C";
}
else if(score >= 60)
{ 
    grade = "D";
}
else if(score >= 50)
{ 
    grade = "Fail";
}
else if(score >= 40)
{ 
    grade = "Better luck next time";
}
console.log("your score is " + score + " and grade is " + grade);
