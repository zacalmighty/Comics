function start() {
    var len = comics.length;
    console.log("Before Filtering - Original Count - " + len);

    var pulllist = []; //store the comics that make it through the filtering. 

    /*
    Filters out comics that are more than $16 
    
    var bookcount - storing the count of how many comics are less than $16. 
    var cost - pulls the price from the data and takes out the "$" in front. 
    
    */
    var bookcount = 0;
    var costlimit = 16;
    for (var i = 0; i < len; i++) {
        var cost = comics[i].PRICE.substr(1);
        if (cost > costlimit) {
            continue;
        } else {
            //console.log(comics[i]);
            pulllist.push(comics[i]);
            bookcount++
        }
    }
    let test1 = "Comics less than $" + costlimit + " : " + bookcount;
    let test2 = "Test2: Array.length of comics less than $16 - " + pulllist.length;

    /*
    Filters out the words TP , HC , OMNIBUS

    bookcount - Will store the count of how many comics don't have the given words
    filteredout  - Will store all the comics with the words on line 31
    filteredin - Will store comics that pass the condition
    title_words_arr - pulls the title from the data and store the array of words
    */
    bookcount = 0; //reset bookcount back to 0 
    var filteredout = [];
    var filteredin = [];
    var title_words_arr;
    for (var i = 0; i < pulllist.length; i++) {

        title_words_arr = pulllist[i].TITLE.split(" ");

        var foundTP = title_words_arr.find(function (element) {
            return element == "TP";
        });

        var foundHC = title_words_arr.find(function (element) {
            return element == "HC";
        });

        var foundOMNIBUS = title_words_arr.find(function (element) {
            return element == "OMNIBUS";
        });

        if (foundTP || foundHC || foundOMNIBUS) {
            filteredout.push(pulllist[i]);
            // buildtr(pulllist[i]);
        } else {
            filteredin.push(pulllist[i]);
            buildtr(pulllist[i]);
            //console.log(pulllist[i].TITLE);
            bookcount++;
        }
    }

    pulllist = filteredin; //setting pulllist to the new filtered out results. 

    let test3 = "Comics' title that have TC, HC, OMNIBUS in it : " + filteredout.length;
    let test4 = "Comics' title that don't have TC, HC, OMNIBUS in it and cost less than $16 : " + pulllist.length;
    // console.log(pulllist);

    console.log(test1);
    console.log(test2);
    console.log(test3);
    console.log(test4);

}

// Creates data table  
function buildtr(x) {
    var table = document.getElementById("ctable");

    var trow = createElement("tr", );
    trow.appendChild(createElement("th", x.TITLE, "id", "title"));
    trow.appendChild(createElement("th", x.PRICE, "id", "price"));
    trow.appendChild(createElement("th", x.Vendor, "id", "vendor"));

    table.appendChild(trow);
}

//creating an Element
function createElement(tagname, text, attribute, attributeval) {
    var ele = document.createElement(tagname);
    if (text != null) {
        ele.appendChild(document.createTextNode(text));
    }
    if (attribute != null) {
        ele.setAttribute(attribute, attributeval);
    }
    return ele;
}