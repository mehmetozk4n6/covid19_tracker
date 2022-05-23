import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { itemsSelector, countrySelector } from "../redux/covidSlice";
import moment from "moment";
import { lightBlue, teal, pink, amber } from "@mui/material/colors";

export default function OutlinedCard() {
  const items = useSelector(itemsSelector);
  const country = useSelector(countrySelector);

  let UpdatedDate =
    moment(items?.lastUpdate).format("MMMM Do YYYY, h:mm:ss a") || "";

  const cardValues = [
    {
      title: "Infected",
      val: items && items?.confirmed.value,
      date: UpdatedDate,
      color: lightBlue["200"],
      bgbox: lightBlue["800"],
    },
    {
      title: "Recovered",
      val: items && items?.recovered.value,
      date: UpdatedDate,
      color: teal["200"],
      bgbox: teal["800"],
    },
    {
      title: "Deaths",
      val: items && items?.deaths.value,
      date: UpdatedDate,
      color: pink["200"],
      bgbox: pink["800"],
    },
    {
      title: "Active",
      val:
        items &&
        items?.confirmed.value - items?.recovered.value - items?.deaths.value,
      date: UpdatedDate,
      color: amber["200"],
      bgbox: amber["800"],
    },
  ];

  return (
    <div className="cards">
      {cardValues?.map((el, index) => (
        <Box key={index} sx={{ bgcolor: el.bgbox }} borderRadius="5%">
          <Card variant="outlined" sx={{ bgcolor: el.color }}>
            <>
              <CardContent>
                <Typography
                  sx={{ fontSize: "1.5em" }}
                  color="text.secondary"
                  gutterBottom
                >
                  {el.title}
                </Typography>
                <Typography variant="h5" component="div">
                  <b>{el.val}</b>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <span>
                    <b>Last Updated at:</b>{" "}
                  </span>
                  <span>{el.date}</span>
                </Typography>
                <Typography variant="body2">
                  Number of {el.title.toLowerCase()} cases of COVID-19 in{" "}
                  {country ? country : "World"}
                </Typography>
              </CardContent>
            </>
          </Card>
        </Box>
      ))}
    </div>
  );
}
