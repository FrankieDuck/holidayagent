import React, { useState, useEffect } from "react";
import MaterialTable from '@material-table/core';


export default function AllHolidayTable() {
    const [data, setData] = useState([])

    const columns = [
        {title: "Country", field: "attributes.country"},
        {title: "City", field: "attributes.city"},
        {title: "Hotel Name", field: "attributes.hotelName"},
        {title: "Star Rating", field: "attributes.starRating"},
        {title: "Price Per Night", field: "attributes.pricePerNight"},
    ]

    useEffect(() => {
        const url = "http://localhost:1337/api/holidays/"
        const fetchData = async() => {
        try {
           const response = await fetch(url)
           const json = await response.json()
           const returnedData = json.data
           console.log(returnedData)
           setData(returnedData)
        } catch (error) {
           console.log("error: ", error)
        }
       };
       fetchData()
     }, [])

    console.log(data.attributes)

  return (
    <div style={{paddingTop: "80px"}}>
        <MaterialTable 
        title="Holidays"
        data={data}
        columns={columns}
        />
    </div>
  );
}