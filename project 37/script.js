function myFunction() {
    // Get value from the <title> tag
    let titleValue = document.getElementById("demo").innerHTML;

    // Display it in result
    document.getElementById("result").innerHTML =
        "Value from title tag: " + titleValue;

    // Copy value from result to result1
    document.getElementById("result1").innerHTML =
        "Copied value: " + document.getElementById("result").innerHTML;
}
