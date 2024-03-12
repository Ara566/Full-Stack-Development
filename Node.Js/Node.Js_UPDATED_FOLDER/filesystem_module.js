//open file
let fs=require('fs')

/*
let fs=require('fs');

fs.open('sample.txt','w+',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

*/





//readFile().....................................................................................................

/*
//asynchronous operation so   
fs.readFile('sample.txt','utf-8',(err,data)=>{
   if(err){
    console.log(err)
   }
   else{
    console.log(data.toString())
   }
})

console.log("before readFile its execute.....")

*/



//readFileSync()...................................................................................................

/*
//if want to read synchronously redFilesys()

let synfd=fs.readFileSync('sample.txt')
console.log(synfd)
console.log("before file opeartion")

*/




//writeFile()........................................................................................................
/*
//used for suppose i want to write something in file
//drawback: replace all the content in that file
//benifit: if file doesnt exit ,its create new file

let filedata='bits is the worst collage'

fs.writeFile('sample.txt',filedata,(err,updatedfile)=>{
    if(err){
        console.log("unable to write file")
    }
    else{
        console.log("writed successfully")
    }
})






//appendFile() .....................................................................................................

/*

//it is used to append the file content to exiting file without replaceing whole content
//its also create new file ,if file not exits

fs.appendFile('sample.txt',"\n appendFile() sussussfuly append the content to the file at end",(err)=>{
    if (err) console.log("unable to append")
    else console.log("append content to file")
})


*/







//unlink() for delete the file......................................................................................

/*

fs.unlink('dummyfordelete.txt',(err)=>{
    if(err) console.log('file not deleted ....')
    else console.log("file deleted succssfully.....")

})

*/


//mkdir().............................................................................................
/*
fs.mkdir('./test/test2',(err)=>{
    if(err) console.log("err")
})

*/

//readdir() show all folders..................................................................
/*

fs.readdir('./test',(err,data)=>{
    if(err) console.log("no folder availble error")
    else{
        console.log("readdir() operation working")
        console.log("the folders are: ",data)
}
})

*/
