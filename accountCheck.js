let i = 0;
while (i < 1) {
  const uid = localStorage.getItem("uid");
  const name = localStorage.getItem("name");

  if (uid === null || name == null) {
  } else if (uid !== "" && name !== "") {
    window.open("/myAccount.html", "_self");
  }
  i++;
}
