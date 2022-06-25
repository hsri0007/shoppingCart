import { Grid } from "@mui/material";
import CardComponent from "../components/CardComponent";
import Storedata from "../data/items.json";

export function Store() {
  return (
    <Grid container spacing={2}>
      {Storedata.map((storeitem) => (
        <Grid item sm={4} xs={12} lg={3} >
          <CardComponent storeitem={storeitem} />
        </Grid>
      ))}
    </Grid>
  );
}
