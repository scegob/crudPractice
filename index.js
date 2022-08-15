var mytodo_list=["Do Exercise","Take Bath","Have Breakfast"];
/*CREATE*/
/**
 * The function CreateTask() is called when the user clicks the button "Add Task". The function gets
 * the value of the textbox "add-task" and pushes it to the array "mytodo_list". Then the function
 * ReadAllTask() is called to display the updated list.
 */
function CreateTask()
{  
     var task=document.getElementById("add-task").value;
     mytodo_list.push(task);
     ReadAllTask();
}
/*READ*/
/**
 * The function ReadAllTask() is used to read all the tasks from the array and display them in the
 * table.
 */
function ReadAllTask()
{
    var data='';
for(var i=0;i<mytodo_list.length;i++)
{
    data+='<tr>';
    data+='<td>' + mytodo_list[i] + '</td>';
    data+='<td><button onclick=UpdateTask(' +i+ ')>Update</button></td>';
    data+='<td><button onclick=DeleteTask('+i+')>Delete</button></td>';
    data+='</tr>';
}
/*counter*/
document.getElementById("counter").innerHTML=mytodo_list.length +" Task";
document.getElementById("mytodo-tasks").innerHTML=data;
}
ReadAllTask();
/*UPDATE*/
/**
 * It takes the value of the item that was clicked on and displays it in the input field.
 * @param item - The index of the item in the array.
 */
function UpdateTask(item)
{
document.getElementById("UpdateForm").style.display='block';
document.getElementById("update-task").value=mytodo_list[item];
document.getElementById("UpdateForm").onsubmit=function()
{
    var task=document.getElementById("update-task").value;
    mytodo_list.splice(item,1,task.trim());

    ReadAllTask();
    CloseInput();
}

}
/*DELETE*/
/**
 * The DeleteTask function takes in an item and removes it from the mytodo_list array.
 * @param item - The index of the item to be deleted.
 */
function DeleteTask(item)
{   
    mytodo_list.splice(item,1);
    ReadAllTask();
}

/**
 * When the user clicks the button with the id of 'CloseInput', the form with the id of 'UpdateForm'
 * will be hidden.
 */
function CloseInput()
{
    document.getElementById("UpdateForm").style.display='none';
}