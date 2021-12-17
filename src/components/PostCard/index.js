
import {
    Container,
    PostHeading,
    Image,
    ImageGrid,
    PostDescription,
    Group,
    Price,
    CallButton,
    CallButtonImage,
    Date,
    Location
} from './styles/post';

export default function PostCard({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

PostCard.PostHeading = function PostCardPostHeading({children, ...restProps}){
    return <PostHeading {...restProps}>{children}</PostHeading>
}
PostCard.ImageGrid = function PostCardImageGrid({children, ...restProps}){
    return <ImageGrid {...restProps}>{children}</ImageGrid>
}
PostCard.Image = function PostCardImage({children, resource, ...restProps}){
    return <Image {...restProps}>{children}</Image>
}
PostCard.PostDescription = function PostCardPostDescription({children, ...restProps}){
    return <PostDescription {...restProps}>{children}</PostDescription>
}
PostCard.Group = function PostCardGroup({children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}
PostCard.Price = function PostCardPrice({children, ...restProps}){
    return <Price {...restProps}>{children}</Price>
}
PostCard.CallButtonImage = function PostCardCallButtonImage({children, ...restProps}){
    return <CallButtonImage {...restProps}>{children}</CallButtonImage>
}
PostCard.CallButton = function PostCardCallButton({children, src, ...restProps}){
    return <CallButton {...restProps}><CallButtonImage src={src} /></CallButton>
}
PostCard.Date = function PostCardDate({children, ...restProps}){
    return <Date {...restProps}>{children}</Date>
}
PostCard.Location = function PostCardLocation({children, ...restProps}){
    return <Location {...restProps}>{children}</Location>
}