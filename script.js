function submitOrder() {
  const q = document.getElementById("question").value;
  fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: q })
  }).then(() => alert("Submitted!"));
}

function checkRashi() {
  const dob = new Date(document.getElementById("dob").value);
  const m = dob.getMonth() + 1;
  const d = dob.getDate();
  let rashi = "";

  if ((m==3&&d>=21)||(m==4&&d<=19)) rashi="Mesha (Aries)";
  else if ((m==4&&d>=20)||(m==5&&d<=20)) rashi="Vrishabha (Taurus)";
  else if ((m==5&&d>=21)||(m==6&&d<=20)) rashi="Mithuna (Gemini)";
  else if ((m==6&&d>=21)||(m==7&&d<=22)) rashi="Karka (Cancer)";
  else if ((m==7&&d>=23)||(m==8&&d<=22)) rashi="Simha (Leo)";
  else if ((m==8&&d>=23)||(m==9&&d<=22)) rashi="Kanya (Virgo)";
  else if ((m==9&&d>=23)||(m==10&&d<=22)) rashi="Tula (Libra)";
  else if ((m==10&&d>=23)||(m==11&&d<=21)) rashi="Vrishchika (Scorpio)";
  else if ((m==11&&d>=22)||(m==12&&d<=21)) rashi="Dhanu (Sagittarius)";
  else if ((m==12&&d>=22)||(m==1&&d<=19)) rashi="Makara (Capricorn)";
  else if ((m==1&&d>=20)||(m==2&&d<=18)) rashi="Kumbha (Aquarius)";
  else if ((m==2&&d>=19)||(m==3&&d<=20)) rashi="Meena (Pisces)";

  document.getElementById("result").innerText = "?? Your Rashi: " + rashi;