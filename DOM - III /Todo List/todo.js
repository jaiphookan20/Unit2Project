// Remember the points for using form: 


document.querySelector("form").addEventListener("submit", todoList);

function todoList() {
    event.preventDefault();

    //Now catch the relevant html tags
    var itemName=document.querySelector("#name").value;
    var itemQty=document.querySelector('#qty').value;
    var itemPriority=document.querySelector("#priority").value;

        console.log(itemName, itemQty, itemPriority);

        // The HTML <tr> tag defines a row in an HTML table. 
        // Each <tr> tag can contain one or more <th> tags that 
        // define header cells in the table or one or more <td> tags 
        // that define standard cells in the table.

        var tr = document.createElement("tr");
        
        // The <td> tag defines a standard data cell in an HTML table
        var td1=document.createElement("td");
        td1.innerText=itemName;
        var td2=document.createElement("td");
        td2.innerText=itemQty;
        var td3=document.createElement("td");
        td3.innerText= itemPriority;

        tr.append(td1, td2, td3);
        document.querySelector("tbody").append(tr);  
        //Appending it to tbody element in html page


}