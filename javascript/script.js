const inputFieldsId = ["firstName", "lastName", "email", "password"];

function validFields(inputArray = inputFieldsId) {
    
  inputArray.map((item) => {
    let inpObj = document.getElementById(item);

    if (!inpObj.checkValidity()) {
      document.getElementById(item + "Error").style.display = "inline-block";
      document.getElementById(item + "ErrorIcon").style.display =
        "inline-block";
    } else {
      document.getElementById(item + "Error").style.display = "none";
      document.getElementById(item + "ErrorIcon").style.display = "none";
    }
  });
}
