var Arr=[{
    num:5,
    str:"apple"
},
{
    num:6,
    str:"orange"
},
{
    num:3,
    str:"mango"
}]
Arr.sort(function(val1,val2)
{
    if(val1.str>val2.str)
    return -1;
    else 
    return 1;
});