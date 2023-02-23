import React, { useState, useEffect, useContext } from "react";
import MaterialTable from '@material-table/core';
import { Context } from '../../Context'
import { ClimateVarContext } from "../../pages/Home";
import styles from "../../styles";
import { Button } from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThermostatIcon from '@mui/icons-material/Thermostat';

export default function ClimateTable() {
   const [context, setContext] = useContext(Context)
   const [data, setData] = useState([])

    const columns = [
        {title: "Country", field: "attributes.country"},
        {title: "City", field: "attributes.city"},
        {title: "Hotel Name", field: "attributes.hotelName"},
        {title: "Star Rating", field: "attributes.starRating"},
        {title: "Price Per Night", field: "attributes.pricePerNight"},
    ]

    useEffect(() => {
        const url = `http://localhost:1337/api/${context}?populate=*`
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
     }, [])

  return (
        <MaterialTable 
        style={{ marginTop: "20px", backgroundColor: "antiquewhite",  boxShadow: "3px 3px #6a4444"}}
        title="Holidays"
        data={data}
        columns={columns}        
        />
  );
}