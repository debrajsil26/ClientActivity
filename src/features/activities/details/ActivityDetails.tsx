import { Button, Card,CardMedia, CardActions, CardContent,Typography, Chip } from '@mui/material'
type Props = {
    activity: Activity,
    cancelSelectActivity: () => void;
}

export default function ActivityDetails({ activity,cancelSelectActivity }: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
        <CardMedia
        component="img" 
        src={`/images/categoryImages/${activity.category}.jpg`}
         />
         <CardContent>
            <Typography variant='h5'>{activity.title}</Typography>
            <Typography variant='subtitle1'>{activity.date}</Typography>
            <Typography variant='body2'>{activity.description}</Typography>
             <Typography variant='subtitle1'>{activity.city}, {activity.venue}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb:2}}>
        <Chip label={activity.category} variant="outlined" />
        <Button size="small"  color="primary">Edit</Button>
         <Button size="small" color="primary" onClick={cancelSelectActivity}>Cancel</Button>
        </CardActions>
    </Card>
    
)
}

