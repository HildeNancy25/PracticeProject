let task = {
    theTask : [],

    addTask : function (taskNames, taskId){
        let thatTask = {
            taskNames : taskNames,
            taskId : taskId,
            status : true,
        };

        this.theTaskask.push(thatTask);
        console.log('task added successful !');
    },

    displayTask : function (){
        console.log('Your tasks are:');
        this.theTask.forEach( function (thatTask){
            console.log(`${thatTask.taskNames} having the (Task ID: ${thatTask.taskId}) - is: ${thatTask.status ? 'completed' : 'failed to complete'}`);
        });
    }
};

task.addTask('Work out', 1);
task.addTask('Pray', 2);
task.addTask('Learn JavaScript objects', 3);
task.addTask('push my work on github repository', 4);
task.addTask('Cook', 5);


let categories ={
    catTitle : '',
};

console.log(task);