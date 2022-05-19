import { createClient } from "@supabase/supabase-js";
//import "dotenv/config";
const client = createClient("https://bujppknmkncmnsnsxwno.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1anBwa25ta25jbW5zbnN4d25vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5Nzg4NTAsImV4cCI6MTk2ODU1NDg1MH0.XZgcqHbI0JmlmE33pnOYXodC3cRgV7f0aEKZFV1s2kE");
const name = document.querySelector(".name");
const mensaje = document.querySelector(".message");
const enviar = document.querySelector(".enviar");
const cont = document.querySelector(".content");
const chat = client.from("Users").on('*', payload => {
  console.log('Message recived', payload)
  addMessage(payload.new);
}).subscribe();
function addData(){
  const datos = {name: name.value, message: mensaje.value};
  client.from("Users").insert([
    datos
  ]).then(e => {
    console.log(e);
  });
}
function addMessage(data){
  const user = document.createElement("p");
  user.innerHTML = data.name;
  cont.appendChild(user);
  const msg = document.createElement("p");
  msg.innerHTML = data.message;
  cont.appendChild(msg);
}

enviar.addEventListener("click", addData);

  