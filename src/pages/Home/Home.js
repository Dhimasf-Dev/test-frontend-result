import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5
  };


const Home = () => {
    const [dataUser, setDataUser] = useState([])
    const [expanded, setExpanded] = useState(false);
    const parallax = useRef(null)
    const [filter, setFilter] = useState("")
    const url = (name, wrap) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
    const [open, setOpen] = React.useState(false);
    const [id, setId] = useState(null)
    const handleOpen = (ids) => {
        setOpen(true)
        setId(ids)
    }
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const fetchData = () => {
            axios.get("https://my-json-server.typicode.com/glendmaatita/userjsondemo/db")
            .then(res => setDataUser(res.data.data))
            .catch(err => alert(err))
        }

       fetchData()
        
    }, [filter])

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    }));

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <>
            <div style={{ width: '100vw', height: '100vh', backgroundColor: "#253237" }}>
                <Parallax ref={parallax} pages={3}>
                    <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                    <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                    <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: url('stars', true),
                        backgroundSize: 'cover',
                    }}
                    />

                    <ParallaxLayer offset={0.1} speed={-0.3} style={{ pointerEvents: 'none', height: "1000px" }}>
                    <img src={url('satellite4')} style={{ width: '15%', marginLeft: '80%' }} />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '65%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '25%' }} />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '80%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '50%' }} />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                    </ParallaxLayer>

                    <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}>
                    <img src={url('earth')} style={{ width: '65%'}} />
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        // backgroundImage: url('clients', true),
                    }}
                    />

                    <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <div>
                        <h1 className='text-7xl text-white font-bold'>
                            LAND<span className='text-7xl text-green-400 font-bold'>X</span>
                        </h1>
                        <div className='text-2xl text-white font-bold'>Platform Equity Crowdfunding</div>
                    </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <div className='grid grid-cols-3 gap-4'>
                        <Card sx={{ maxWidth: 300}}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://thumbor.landx.id/unsafe/590x393/https://landx.id/images/ATSK/1.webp%3Fversion%3D2"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Ayam Tempong Ibu Sri adalah salah satu restoran ayam tempong bali dengan
                                    sajian menu nasi dan sambal tempong khas Banyuwangi. Restoran nasi tempong
                                    atau ayam tempong ini pertama kali diresmikan pada tahun 2009 di Legian, Bali.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography sx={{fontWeight: 'bold'}} paragraph>Total dana:  Rp 1.448.000.000</Typography>    
                                    <Typography sx={{fontWeight: 'bold'}} paragraph>Harga Per Lot dana:  Rp 1.000.000</Typography> 
                                    <Typography sx={{fontWeight: 'bold'}} paragraph>Periode Dividen: Per 3 bulan</Typography>   
                                </CardContent>
                            </Collapse>
                        </Card>

                        <Card sx={{ maxWidth: 300}}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://thumbor.landx.id/unsafe/590x393/https://landx.id/images/VLCP/1.webp%3Fversion%3D2"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Vodka n Latte merupakan pusat perawatan dan kesehatan hewan peliharaan yang memiliki fasilitas mewah 
                                    dan berlokasi di Kemang, Kelapa Gading Walk, dan Central Park Tribeca.
                                    Vodka n Latte yang berlokasi di Central Park Tribeca adalah Pusat Fauna.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography sx={{fontWeight: 'bold'}} paragraph>Total dana:  Rp 1.558.000.000</Typography>    
                                    <Typography sx={{fontWeight: 'bold'}} paragraph>Harga Per Lot dana:  Rp 1.000.000</Typography> 
                                    <Typography sx={{fontWeight: 'bold'}} paragraph>Periode Dividen: Per 3 bulan</Typography>   
                                </CardContent>
                            </Collapse>
                        </Card>

                        <Card sx={{ maxWidth: 300}}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://thumbor.landx.id/unsafe/590x393/https://landx.id/images/OWON/1.webp%3Fversion%3D2"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Okinawa Sushi merupakan restoran sushi premium yang menyajikan hidangan yang memiliki cita 
                                    rasa otentik khas Jepang. Menyuguhkan suasana restoran yang ikonik dengan nuansa Japanese Vibes yang dapat memanjakan mata pelanggan.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography sx={{fontWeight: 'bold'}} paragraph>Total dana:  Rp 6.150.000.000</Typography>    
                                    <Typography sx={{fontWeight: 'bold'}} paragraph>Harga Per Lot dana:  Rp 1.000.000</Typography> 
                                    <Typography sx={{fontWeight: 'bold'}} paragraph>Periode Dividen: Per 3 bulan</Typography>   
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        
                    <div>
                        <Box sx={{ display: 'flex', alignSelf: 'flex-end', mb: 1 }}>
                            <TextField
                            onChange={e => setFilter(e.target.value)}
                            label="Search" variant="outlined" size='small' 
                            />
                        </Box>
                        <TableContainer className='h-96'  component={Paper}>
                            <Table sx={{ minWidth: 550 }} aria-label="simple table">
                                <TableHead className='bg-cyan-600'>
                                    <TableRow>
                                        <TableCell style={{color: "white", fontWeight: "bold"}}>Name</TableCell>
                                        <TableCell style={{color: "white", fontWeight: "bold"}} align="center">Username</TableCell>
                                        <TableCell style={{color: "white", fontWeight: "bold"}} align="right">Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {dataUser
                                .filter(val => 
                                        val.name.toLowerCase().includes(filter.toLowerCase()) ||
                                        val.username.toLowerCase().includes(filter.toLowerCase()) ||
                                        val.email.toLowerCase().includes(filter.toLowerCase())
                                    )
                                .map((data, index) => (
                                    <TableRow
                                        onClick={() => handleOpen(index)}
                                        key={data.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                        <TableCell>{data.name}</TableCell>
                                        <TableCell align="center">{data.username}</TableCell>
                                        <TableCell align="right">{data.email}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    </ParallaxLayer>
                </Parallax>

            </div>
           {
            dataUser.length != 0 && id != null ?
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            {
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Detail User
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='font-bold'>Phone</div>
                        <div>{dataUser[id].phone}</div>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='font-bold'>Username</div>
                        <div>{dataUser[id].username}</div>
                    </Typography>
                </Box>
            }
            </Modal> :''
           }
        </>
    )
}

export default Home