let j = 0;
while (j < 1) {
  const darkmode = localStorage.getItem("darkmode");
  if (darkmode === null) {
    localStorage.setItem("darkmode", "off");
  }
  j++;
}
