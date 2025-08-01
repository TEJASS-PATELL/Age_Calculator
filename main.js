function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dobInput) {
    alert("Please enter your date of birth!");
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diffTime = nextBirthday - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let birthdayMsg = "";
  if (
    today.getDate() === dob.getDate() &&
    today.getMonth() === dob.getMonth()
  ) {
    birthdayMsg = "<span style='color:green;'>Happy Birthday!</span><br>";
  } else {
    birthdayMsg = `Your next birthday is in <strong>${diffDays}</strong> day's<br>`;
  }

  result.innerHTML = `
    ${birthdayMsg}
    You are <strong>${ageYears}</strong> years, 
    <strong>${ageMonths}</strong> months and 
    <strong>${ageDays}</strong> days old.
  `;
}
