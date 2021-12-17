import PostCard from './components/PostCard/index'
import { useCurrentLocation } from './hooks/useCurrentLocation';
import { checkCoordinatesDistance } from './utils/checkCoordinatesDistance';

// Create a custom hook to find user's location coordinates use the above `checkCoordinatesDistance` function in ./utils/checkCoordinatesDistance to find the distance between points;
// You will find the coordinates of each post in the location field of the api response in the format : coordinates : [longitude, latitude], type : 'point'
// These are hardcoded coordinates of Jaipur and Lucknow. GPS location should be stored as lat1,lon1 and the post's location(from api response) should be stored as lat2,lon2

export default function Post(props){
    const { location, error } = useCurrentLocation();
    const milk = props.data.highestMilk ? props.data.highestMilk : props.data.currentMilk;
    const tel = `tel:${props.data.contact}`;

    const calculateDistanceFromCurrentLocation = () => {
        if(location){
            const coordinatesPoints = JSON.parse(props.data.location)
            const lat1 = coordinatesPoints.coordinates[0], 
                  lon1 = coordinatesPoints.coordinates[1],
                  lat2 = location.latitude,
                  lon2 = location.longitude;
    
            return checkCoordinatesDistance(lat1,lon1,lat2,lon2)
        }

        return null
    }

    const generateGridStyles = () => {
        const totalImages = props.data.resources
        let styles = []
        if(totalImages.length === 1){
            styles.push({width: "calc(100% - 20px)", height: "calc(100% - 10px)"})
        } else if (totalImages.length === 2){
            styles.push({width: "calc(100% - 20px)", height: "calc(50% - 10px)"})
            styles.push({width: "calc(100% - 20px)", height: "calc(50% - 10px)"})
        } else if (totalImages.length === 3){
            styles.push({width: "calc(100% - 20px)", height: "calc(50% - 10px)"})
            styles.push({width: "calc(50% - 15px)", marginRight: "5px", height: "calc(50% - 10px)"})
            styles.push({width: "calc(50% - 15px)", marginLeft: "5px", height: "calc(50% - 10px)"})
        } else if (totalImages.length === 4){
            styles.push({width: "calc(50% - 15px)", marginRight: "5px", height: "calc(50% - 10px)"})
            styles.push({width: "calc(50% - 15px)", marginLeft: "5px", height: "calc(50% - 10px)"})
            styles.push({width: "calc(50% - 15px)", marginRight: "5px", height: "calc(50% - 10px)"})
            styles.push({width: "calc(50% - 15px)", marginLeft: "5px", height: "calc(50% - 10px)"})
        }
        return styles;
    }

    const checkIfImageUrl = (url) => {
        if(url.endsWith("mp4")){
            return false
        }
        return true
    }

    const distance = calculateDistanceFromCurrentLocation();

    return (
        <PostCard> 
            <PostCard.ImageGrid>
                {props.data.resources.map((resource, index) => <PostCard.Image
                    src={checkIfImageUrl(JSON.parse(resource).url) 
                        ? JSON.parse(resource).url
                            : "https://plchldr.co/i/500x250"}
                    resource={JSON.parse(resource).url}
                    style={generateGridStyles()[index]}
                />)}
            </PostCard.ImageGrid>
            <PostCard.Group>
                {distance && <PostCard.Date>
                    <span className = "bolded">
                        {`${parseInt(distance)} KM`}
                    </span> from your location
                </PostCard.Date>}
                <PostCard.Location>
                    {props.data.locationName.split(',')[0]}, {props.data.locationName.split(',')[1]}
                </PostCard.Location>
            </PostCard.Group>
            <PostCard.Group padding='20'>
                <PostCard.PostHeading>
                    {`${props.data.breed} ${props.data.animalType}`}
                </PostCard.PostHeading>
                <PostCard.Price>
                    {`Rs. ${props.data.price}`}
                </PostCard.Price>
            </PostCard.Group>
            <PostCard.PostDescription>{`This is a ${props.data.gender} ${props.data.breed} ${props.data.animalType} which can provide upto ${milk} litres of milk on a daily basis `}</PostCard.PostDescription>
            <PostCard.Group padding="30">
                <PostCard.PostHeading>
                    {props.data.seller}
                </PostCard.PostHeading>
                <PostCard.CallButton href={tel} src="https://static-assets.animall.in/static/images/call-card.png">
                </PostCard.CallButton>
            </PostCard.Group>
        </PostCard>
    )
}