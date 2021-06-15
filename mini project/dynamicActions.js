// function hideAndShow()
// {
//     let img=document.getElementById("myImg");
//     let button=document.getElementById("btn");
    
  
//     if(button.innerText==="Hide")
//     {
//         img.style.visibility="hidden";
//         button.innerText="Show";
//     }
//     else
//     {
//         img.style.visibility="visible";
//         button.innerText="Hide";
//     }

// }

// function changeImage()
// {
//     let img=document.getElementById("myImg");
//     let button=document.getElementById("btn");

//     let girl="https://cdn.pixabay.com/photo/2021/01/28/08/51/girl-5957398__340.jpg";
//     let cheetah="https://cdn.pixabay.com/photo/2020/10/27/07/40/cheetahs-5689873__340.jpg";

//     if(img.src===girl)
//     {
//         img.src=cheetah;
//     }
//     else 
//     {
//         img.src=girl;
//     }

  

  
// }

// function move()
// {
//     let img=document.getElementById("myImg")
//    img.style.cssText=`
//    transform:rotateY(180deg);
//     transition:transform 4s;
//    border:2px solid red; `
// }

function color()
{
    let button=document.getElementById("btn");
    let body=document.body;
    if(button.innerText==='Dark')
    {
        body.style.background="Black";
        button.innerText='Light'
    }
    else
    {
        body.style.background="White";
        button.innerText='Dark'
    }
}