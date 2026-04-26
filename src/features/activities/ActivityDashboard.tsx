import { Grid, List, ListItem, ListItemText } from "@mui/material"
type Props = {
    activities: Activity[]
}
export default function ActivityDashboard(props : Props) {
    const { activities } = props;
    return (
        <Grid container>
            <Grid size={9}>
                <List>
                    {activities.map((activity) => (
                        <ListItem key={activity.id}>
                            <ListItemText>  {activity.title}  </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Grid>

        </Grid>
    )
}
