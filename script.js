let btn=document.getElementById('event');
btn.addEventListener('click',()=>{
//    PromiseAPI1().then((res)=>{
//     if (res) {
//         PromiseAPI3().then((res)=>{
//             if (res) {
//                 PromiseAPI3().then((res)=>{
//                     if (res) {
//                         console.log("All promises are completed!!");
//                     }
//                 });
//             }
//         })
//     }
//    });
   /// or by aysnc await
main();
});
async function main(){
    try{
        let res1,res2,res3;
       res1=await PromiseAPI1();
        if (res1) {
         res2= await PromiseAPI2();
        }
        if (res2) {
          res3=await PromiseAPI3();  
        }
        if (res3) {
        console.log('All promises are resolved!!');
        }
    }catch(error){
console.log("An error has occured!!",error);
    }
}
function PromiseAPI1(){
    return new Promise((resolve)=>{
setTimeout(()=>{
    fetch('https://dummyjson.com/posts').then((res)=>{
        return res.json();        
}).then((data)=>{
    console.log(data);
   data.posts.forEach((item) => {
    document.querySelector('body>main>#t1>tbody').innerHTML+=`
    <tr>
    <td>${item.id}</td><td>Title:<b>${item.title}</b></td><td>UserId:<b>${item.userId}</b></td>
    </tr>
    <tr>
    <td></td><td>${item.body}</td>
    </tr>
    <tr>
    <td></td> <td><b>Reactions:</b>likes: <b>${item.reactions.likes}</b>, dislikes:<b> ${item.reactions.dislikes}</b></td><td>Views:<b>${item.views}</b></td>
    </tr>
    <tr>
    <td></td><td colspan='2'>Tags:<b>${item.tags}</b></td>
    </tr>
    <tr><td style='padding:10px'></td></tr>`;
   });
   resolve(true);
}).catch(e=>{
    console.log('An error occured in API1!!',e);
    document.querySelector('body>main>#t1>tbody').innerHTML=`'An error occured!',${e}`;
});
},1000);
    });
}
function PromiseAPI2(){
    return new Promise((resolve)=>{
setTimeout(()=>{
fetch('https://dummyjson.com/products').then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
data.products.forEach((item)=>{
    document.querySelector('body>main>#t2>tbody').innerHTML+=`
    <tr>
    <td>${item.id}</td><td><b>${item.title}</b></td><td></td>
    </tr>
    <tr>
    <td></td><td><img src='${item.images}'></td><td></td>
    </tr>
    <tr>
    <td></td><td>Price:<b>$${item.price}</b> Discount:<b>${item.discountPercentage}% off</b> MRP:<em>${(item.price*(1+item.discountPercentage/100)).toFixed(2)}</em></td><td>Rating:<b>${item.rating}</b></td>
    </tr>
    <tr>
    <td></td><td>Brand:<b>${item.brand}</b></td><td>Category:<b>${item.category}</b></td>
    </tr>
    <tr>
    <td></td><td><b>Shipping info:</b></td><td></td>
    </tr>
    <tr>
    <td></td><td colspan='2'>${item.shippingInformation}</td>
    </tr>
    <tr>
    <td></td><td colspan='2'>Minimum order:<b>${item.minimumOrderQuantity}</b> Return policy:<b>${item.returnPolicy}</b></td>
    </tr>
    <tr><td></td><td colspan='2'>Weight:<b>${item.weight}pounds</b> stock:<b>${item.stock}</b></td></tr>
    <tr>
    <td></td><td>Warranty:<b>${item.warrantyInformation}</b></td><td></td>
    </tr>
    <tr>
    <td></td><td colspan='2'><b>Description:</b>${item.description}</td>
    </tr>
    <tr>
    <td></td><td colspan='2'>Dimension: Width=<b>${item.dimensions.width}</b> Height=<b>${item.dimensions.height}</b> Depth=<b>${item.dimensions.depth}</b></td>
    </tr>
    <tr><td></td><td colspan='2'>Tags:<b>${item.tags}</b></td></tr>
    <tr><td style='padding:10px'></td></tr>`;
});
resolve(true);
}).catch(e=>{
    console.log('An error occured in API2!',e);
    document.querySelector('body>main>#t2>tbody').innerHTML=`'An error occured!',${e}`;
});
},2000);
    });
}
//
function PromiseAPI3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
fetch(' https://dummyjson.com/todos').then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
    data.todos.forEach((item) => {
        document.querySelector('body>main>#t3>tbody').innerHTML+=`
        <tr>
        <td>${item.id}</td><td>Todo:<b>${item.todo}</b></td><td>UserId:<b>${item.userId}</b></td>
        </tr>
        <tr>
        <td></td><td>Completed:<b>${item.completed}</b></td>
        </tr>
        <tr><td style='padding:10px'></td></tr>`;
       });
       resolve(true);
}).catch(e=>{
    console.log('An error occured in API3!',e);
    document.querySelector('body>main>#t3>tbody').innerHTML=`'An error occured!',${e}`;
});
        },3000);
    })
}