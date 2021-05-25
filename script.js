function buttonclick(val)
{
    document.getElementById("screen").value+=val
}
function cleardisplay()
    {
        document.getElementById("screen").value=""
    }
    
    
function solve()
{
let x = document.getElementById("screen").value
let y = eval(x)
document.getElementById("screen").value = y
}