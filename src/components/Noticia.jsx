import {Typography, 
        Card,
        CardActions,
        CardContent,
        CardMedia,
        Link,
        Grid,
} from '@mui/material'


const Noticia = ({noticia}) => {

    const { urlToImage, url, title, descritpion, source } = noticia

    return (
        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && (
                    <CardMedia
                        component='img'
                        alt={`Imagen de la noticia ${title}`}
                        image={urlToImage}
                        height={'250'}
                    />
                )}
                <CardContent>
                    <Typography variant='body1' color='error'>
                        {source.name}
                    </Typography>
                    <Typography variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography variant='body2'>
                        {descritpion}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                        href={url}
                        target="_blank"
                        variant="button"
                        width={'100%'}
                        textAlign={'center'}
                        sx={{
                        }}
                    >
                        Leer Noticia
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Noticia