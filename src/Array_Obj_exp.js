import React from 'react';

function Array_Obj_exp() {
    return (
        
        <div>
            {/* string concatenation */}
            let name = "Ansh";
            let age = 20;
            let str = "My name and age is";
            console.log("my name and age is " + name + " and " + age);

            <h5>$ way of writing string</h5>
            console.log(`my name and age is ${name} and ${age}`);

            <br/>

            {/* array creation */}
            <h4>array creation</h4>
            let student = ["rahul", 25, ["dance", "play"], 'm'];
            console.log("student-name", student[0]);
            console.log("student-age", student[1]);
            console.log("student hobbies", student[2][0], student[2][1]);
            console.log("student fvt letter", student[3]);
            <br/>

           // for (let i = 0; i < student.length; i++) {
            //    console.log[i];
           // }

            {/* object creation */}
            <h4>object creation</h4>
            let teacher = {"identity": "Ramansh", "age": 25, "hobbies": ["dance", "play"]};
            {teacher.identity};
            {teacher.age};
            {teacher.hobbies};
            {teacher["identity"]};
            {teacher["age"]};
        </div>
        
    );
}

export default Array_Obj_exp();
