import React, { useState, useEffect } from "react";
import MaterialTable from '@material-table/core';
import styles from "../../styles";
import { Button } from "@mui/material";
import LandscapeIcon from '@mui/icons-material/Landscape';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function StepTwoLocation() {
    const [data, setData] = useState([])
    const [locationName, setlocationName] = useState("")

    

    const columns = [
        {title: "Country", field: "attributes.country"},
        {title: "City", field: "attributes.city"},
        {title: "Hotel Name", field: "attributes.hotelName"},
        {title: "Star Rating", field: "attributes.starRating"},
        {title: "Price Per Night", field: "attributes.pricePerNight"},
    ]

    useEffect(() => {
        const url = `http://localhost:1337/api/location-${locationName}?populate=*`
        const fetchData = async() => {
        try {
           const response = await fetch(url)
           const json = await response.json()
           const returnedData = json.data.attributes.holidays.data
           console.log(returnedData)
           setData(returnedData)
        } catch (error) {
           console.log("error: ", error)
        }
       };
       fetchData()
     }, [locationName])

    // console.log(returnedData)

  return (
    <div style={{paddingTop: "80px"}}>
          <div style={styles.formStepOne}>
      <Button variant="contained" onClick={() => setlocationName("mountain")} >Mountains <LandscapeIcon/> </Button>
      <Button variant="contained" onClick={() => setlocationName("city")} >City <LocationCityIcon/> </Button>
      <Button variant="contained" onClick={() => setlocationName("sea")} >Sea <BeachAccessIcon/> </Button>
    </div>
        <MaterialTable 
        title="Holidays"
        data={data}
        columns={columns}
        />
    </div>
  );
}