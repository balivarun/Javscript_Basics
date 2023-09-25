var students=[
        {name:"a1",roll:"1"},
        {name:"a2",roll:"2"},
        {name:"a3",roll:"3"}
    ]
    var marks=[
        {roll:"2",marks:[10,10,10]},
        {roll:"3",marks:[10,20,30]},
        {roll:"1",marks:[20,20,20]},
        {roll:"4",marks:[10,20,40]}
    ]
    students.forEach(function(student){
        marks.forEach(function(x){
        if(student.roll==x.roll){
            let sum=0;
            for(let j=0;j<x.marks.length;j++){
                sum+=x.marks[j];
            }
            console.log(`${student.name} got ${sum}`);
            sum=0;
        }
        })  
 })
 function name(...abc){
console.log(typeof abc);
 }
 name(12)