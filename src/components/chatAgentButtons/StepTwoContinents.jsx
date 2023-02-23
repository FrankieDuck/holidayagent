import React, { useState, useEffect } from "react";
import MaterialTable from '@material-table/core';
import styles from "../../styles";
import { Button } from "@mui/material";


export default function StepTwoContinents() {
    const [data, setData] = useState([])
    const [contName, setContName] = useState("")


    const columns = [
        {title: "Country", field: "attributes.country"},
        {title: "City", field: "attributes.city"},
        {title: "Hotel Name", field: "attributes.hotelName"},
        {title: "Star Rating", field: "attributes.starRating"},
        {title: "Price Per Night", field: "attributes.pricePerNight"},
    ]

    useEffect(() => {
        const url = `http://localhost:1337/api/${contName}?populate=*`
        const fetchData = async() => {
        try {
           const response = await fetch(url)
           const json = await response.json()
           const returnedData = json.data.attributes.holidays.data
           setData(returnedData)
        } catch (error) {
           console.log("error: ", error)
        }
       };
       fetchData()
     }, [contName])

  return (
    <div>
    <div style={styles.formStepOne}>
    <Button variant="contained" onClick={() => setContName("continent-europe")}>Europe</Button>
    <Button variant="contained" onClick={() => setContName("continent-africa")}>Africa</Button>
    <Button variant="contained" onClick={() => setContName("continent-north-america")}>North America</Button>
    <Button variant="contained" onClick={() => setContName("continent-australia")}>Australia</Button>
    <Button variant="contained" onClick={() => setContName("continent-asia")}>Asia</Button>
    <Button variant="contained" onClick={() => setContName("continent-antartica")}>Antartica</Button>
    <Button variant="contained" onClick={() => setContName("continent-arctic")}>Arctic</Button>
    </div>
        <MaterialTable 
        style={{ backgroundColor: "antiquewhite",  boxShadow: "3px 3px #6a4444"}}
        title="Holidays"
        data={data}
        columns={columns}
        />
    </div>
  );
}