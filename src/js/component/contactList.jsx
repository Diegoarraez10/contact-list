import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export default function ContactList({contact}) {
  
  
  return (
    <div>
      {contact.fullname}{" "}
      {contact.email} {" "}
      {contact.phone}{" "}
      {contact.address}{" "}
    </div>
  );
}
