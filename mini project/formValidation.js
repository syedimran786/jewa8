function valid()
{
    let username=document.getElementById("user");
    let inputValue=username.value;
    
    // let reg=/^[A-Za-z]+$/g; //! Pattern to Validate Alphabets
    let reg=/^[6-9][0-9]{9}$/g; //! Pattern to validate indian Mobile Number
    let res=reg.test(inputValue);

    if(res==true)
    {
        // alert("Mobile number Accepted");
        return true;

    }
    else
    {
        // alert("Mobile Number Invalid");
        let errorMessage=document.getElementById("errorMessage");
        errorMessage.style.display="block";
        username.style.border="1px solid red"
        return false;
    }
}
