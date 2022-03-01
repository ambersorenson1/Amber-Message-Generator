import React, { useState } from "react";
import './HotelApp.css'
import Guests from "../../JsonFiles/Guests.json";
import Companies from "../../JsonFiles/Companies.json";
import Messages from "../../JsonFiles/Messages.json";
import { Button, NativeSelect, Grid, Typography, Input, TextField } from '@mui/material'

//turn these json into objects

const HotelApp = () => {
  //THESE ARE STATE VARIABLES TO HOLD THE STATE OF THE APP

  //WE INITIALIZE THE STATE VARIABLES HERE
  const [companies, setCompanies] = useState(Companies);
  const [guests, setGuests] = useState(Guests);
  const [message, setMessage] = useState("");
  const [guest, setGuest] = useState("");
  const [company, setCompany] = useState("");
  const [initialMessages, setInitialMessages] = useState(Messages);
  const [templatedMessage, setTemplatedMessage] = useState("");
  const [showCustom, setShowCustom] = useState(false);
  const [room, setRoom] = useState("");

  //THIS IS THE FUNCTION TO HANDLE THE CHANGE OF THE SELECTED MESSSAGE
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  //THIS IS THE FUNCTION TO HANDLE THE CHANGE OF THE SELECTED GUEST
  const handleGuest = (e) => {
    setGuest(e.target.value);
  };

  //THIS IS THE FUNCTION TO HANDLE THE CHANGE OF THE SELECTED COMPANY
  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  //THIS FUNCTION RETURNS THE GREETING ACCORDING TO THE TIME OF DAY
  const timeOfDayMessage = () => {
    const today = new Date();
    const hours = today.getHours();
    let greeting;
    if (hours < 12) {
      greeting = "Good Morning";
    } else if (hours >= 12 && hours <= 17) {
      greeting = "Good Afternoon";
    } else if (hours >= 17 && hours <= 24) {
      greeting = "Good Evening";
    }

    return greeting;
  };

    //THIS IS A FUNCTION WHICH CREATES THE TEMPLATED MESSAGE FROM THE STATE VARIABLES WHICH THE SELECTED MESSAGE
    const createMsg = () => {
      if (showCustom && message.length > 0) {
        setTemplatedMessage(message);
        return;
      }
      //IF ANY 3 OF THE STATE VARIABLES ARE EMPTY THEN WE ALERT THE USER AND SIMPLY RETURN FROM THE FUNCTION
      if (guest === "" || company === "" || message === "") {
        alert("Please fill in all fields");
        return;
      }

    //parse the message to replace the variables
    //HERE WE CREATE THE TEMPLATED MESSAGE BY REPLACING THE PLACEHOLDERS WITH THE VALUES OF THE STATE VARIABLES
    let newMessage = message.replace("{{name}}", guest.split("-")[0]);
    newMessage = newMessage.replace(
      "{{roomNumber}}",
      guest.split("-")[1] ? guest.split("-")[1] : room
    );
    newMessage = newMessage.replace("{{dayTime}}", timeOfDayMessage());
    newMessage = newMessage.replace("{{hotelName}}", company);
    //console.log(newMessage);

    //set the templated message to the state variable
    setTemplatedMessage(newMessage);
  };

  return (
      <><Typography backgroundColor ={"blue"} color={"white"} textAlign={"center"} variant="h3">Message Generator</Typography>
      <Grid
      container
      direction="row"
      alignItems="center"
    >
      <NativeSelect sx={{m: 2 }}label="Message Type" onChange={handleMessage}>
        <option value="">Select Message Type</option>
        {initialMessages.map((message) => (
          <option key={message.id} value={message.message}>
            {message.type}
          </option>
        ))}
      </NativeSelect>
      {/* {THESE ARE ONLY SHOWN IF CUSTOM MESSAGE IS FALSE} */}
      {!showCustom && (
        <span>
          <NativeSelect sx={{m: 2 }} label="Guest" onChange={handleGuest}>
            <option value="">Select Guest</option>
            {guests.map((guest) => (
              <option
                key={guest.id}
                value={guest.firstName +
                  " " +
                  guest.lastName +
                  "-" +
                  guest.reservation.roomNumber}
              >
                {guest.firstName + " " + guest.lastName}
              </option>
            ))}
          </NativeSelect>
          <NativeSelect sx={{m: 2 }} label="Company" onChange={handleCompany}>
            <option>Select Company</option>
            {companies.map((company) => (
              <option key={company.id} value={company.company}>
                {company.company}
              </option>
            ))}
          </NativeSelect>
        </span>)}

      {/* THIS IS THE BUTTON TO SHOW THE CUSTOM MESSAGE INPUT IT WILL EITHER GIVE YOU A 
      SHOW CUSTOM BUTTON OR IF SHOW BUTTON IS CLICKED IT WILL THEN SHOW YOU HIDE CUSTOM BUTTON */}
      <Button sx={{m: 2 }} variant = "contained" color="primary" type="submit" onClick={() => setShowCustom(!showCustom)}>
        {showCustom ? "Hide Custom" : "Show Custom"}
      </Button>

      {/* THIS IS THE INPUT FIELD FOR THE CUSTOM MESSAGE */}
      {/* ONLY DISPLAYED WHEN THE CUSTOM MESSAGE BUTTON IS CLICKED */}
      {showCustom && (
        <div>
          <Input
            type="text"
            placeholder="Type your message here"
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              minWidth: 220,
              m: 1
            }}
          />
        </div>
      )}

      {/* THIS IS THE BUTTON TO CREATE THE TEMPLATED MESSAGE */}
      <Button variant = "contained" color="primary" type="submit" onClick={createMsg}>Submit</Button>
      {/* THIS IS THE OUTPUT OF THE TEMPLATED MESSAGE */}
      <div>{templatedMessage.length > 0 && templatedMessage}</div>
      </Grid>
      </>
  );
};

export default HotelApp;