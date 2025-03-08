import "./App.css";
import { useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    Menu,
    MenuItem,
    Typography,
    Avatar,
    Stack,
    Divider,
    Card,
    CardContent,
    Breadcrumbs,
    TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpIcon from "@mui/icons-material/Help";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

function App() {
    function NavBar() {
        return (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <AppBar
                    sx={{ backgroundColor: "white", width: "90%" }}
                    position="static"
                    elevation={0}
                >
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src="/assets/eq3.png"
                            style={{ width: "100px" }}
                        ></img>
                        <Box
                            sx={{
                                display: "flex",
                                marginLeft: "auto",
                                gap: "10px",
                            }}
                        >
                            <Breadcrumbs
                                aria-label="breadcrumb"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "black",
                                }}
                            >
                                <Button
                                    variant="text"
                                    sx={{
                                        color: "black",
                                        minWidth: "auto",
                                    }}
                                >
                                    <LocationOnIcon />
                                </Button>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: "black",
                                        minWidth: "auto",
                                    }}
                                >
                                    <HelpIcon />
                                </Button>
                                <Button
                                    variant="text"
                                    sx={{
                                        color: "black",
                                        minWidth: "auto",
                                    }}
                                >
                                    <FavoriteIcon />
                                </Button>
                                <Button
                                    variant="text"
                                    sx={{
                                        display: "flex",
                                        gap: "10px",
                                        color: "black",
                                    }}
                                >
                                    <PersonIcon />
                                    Join/Login to EQ3
                                </Button>
                                <Button
                                    variant="text"
                                    sx={{
                                        display: "flex",
                                        gap: "10px",
                                        color: "black",
                                    }}
                                >
                                    <LanguageIcon />
                                    EN / USD
                                </Button>
                            </Breadcrumbs>
                            <Button
                                variant="outlined"
                                sx={{
                                    display: "flex",
                                    gap: "10px",
                                    color: "black",
                                    borderColor: "black",
                                }}
                            >
                                <ShoppingCartIcon />
                                Cart
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }

    function SecondNavBar() {
        const secondNavBarItems = [
            "Living",
            "Dining",
            "Bedroom",
            "Outdoor",
            "Office",
            "Lighting",
            "Rugs",
            "Accessories",
            "Brands",
            "Inspiration",
            "Gifts",
        ];

        return (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <AppBar
                    sx={{ backgroundColor: "white", width: "90%" }}
                    position="static"
                    elevation={0}
                >
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <ul
                            style={{
                                color: "black",
                                listStyleType: "none",
                                display: "flex",
                                gap: "10px",
                            }}
                        >
                            {secondNavBarItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Typography>{item}</Typography>
                                    </li>
                                );
                            })}
                        </ul>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "end",
                                marginLeft: "auto",
                            }}
                        >
                            <SearchIcon
                                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                            />
                            <TextField
                                id="input-with-sx"
                                label="Search"
                                variant="standard"
                            />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }

    function HeroSection() {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBlockEnd: "25px",
                }}
            >
                <img style={{ width: "80%" }} src="/assets/hero.jpg"></img>
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "20px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "50px",
                            textAlign: "center",
                            color: "white",
                        }}
                    >
                        INTRODUCING EQ3 BUNDLES
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "25px",
                            textAlign: "center",
                            color: "white",
                        }}
                    >
                        Enjoy exclusive savings when you purchase design
                        pairings, curated by EQ3.
                    </Typography>
                </Box>
            </Box>
        );
    }

    function CategoriesSection() {
        const categories = [
            {
                name: "Ready to Ship Upholstery",
                image: "/assets/categories/01.png",
            },
            { name: "Dining", image: "/assets/categories/02.png" },
            { name: "Storage Beds", image: "/assets/categories/03.png" },
            { name: "Lighting", image: "/assets/categories/04.png" },
            { name: "Accent Tables", image: "/assets/categories/05.png" },
            { name: "Rugs", image: "/assets/categories/06.png" },
            {
                name: "Bar & Counter Stools",
                image: "/assets/categories/07.png",
            },
            { name: "Accent Stools", image: "/assets/categories/08.png" },
            { name: "Accessories", image: "/assets/categories/09.png" },
            { name: "Accent Chairs", image: "/assets/categories/10.png" },
            { name: "Outdoor", image: "/assets/categories/11.png" },
            { name: "Media & Storage", image: "/assets/categories/12.png" },
        ];

        return (
            <>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        marginBlockEnd: "25px",
                    }}
                >
                    <Box sx={{ width: "80%" }}>
                        <Grid container spacing={2}>
                            {categories.map((category) => (
                                <Grid
                                    size={3}
                                    sx={{
                                        backgroundColor: "rgb(250, 250, 250)",
                                        aspectRatio: "1/1",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <img
                                        src={category.image}
                                        style={{ width: "80%" }}
                                    ></img>
                                    <Typography>{category.name}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </>
        );
    }

    function FeaturesBox({ x, y, z }) {
        return (
            <Grid
                size={6}
                sx={{
                    backgroundColor: "rgb(250, 250, 250)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "80%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <Typography sx={{ fontSize: "25px" }}>{x}</Typography>
                    <Typography sx={{ fontSize: "15px", color: "grey" }}>
                        {y}
                    </Typography>
                    <Button
                        variant="text"
                        sx={{
                            color: "white",
                            backgroundColor: "black",
                            width: "max-content",
                            textTransform: "capitalize",
                        }}
                    >
                        {z}
                    </Button>
                </Box>
            </Grid>
        );
    }

    function FeaturesSection() {
        return (
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginBlockEnd: "25px",
                }}
            >
                <Box sx={{ width: "80%" }}>
                    <Grid container rowSpacing={2}>
                        <FeaturesBox
                            x="AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM"
                            y="Affirm provides flexible payment solutions, allowing you to buy better and pay over time."
                            z="Learn More"
                        />
                        <Grid
                            size={6}
                            sx={{
                                backgroundColor: "rgb(250, 250, 250)",
                            }}
                        >
                            <img
                                style={{ width: "100%" }}
                                src="/assets/features/01.jpg"
                            ></img>
                        </Grid>
                        <Grid
                            size={6}
                            sx={{
                                backgroundColor: "rgb(250, 250, 250)",
                            }}
                        >
                            <img
                                style={{ width: "100%" }}
                                src="/assets/features/02.jpg"
                            ></img>
                        </Grid>
                        <FeaturesBox
                            x="CHOOSE WITH CONFIDENCE"
                            y="Remove the guesswork in choosing your upholstery design by ordering complimentary swatches."
                            z="Order Swatches"
                        />
                        <FeaturesBox
                            x="COMPLIMENTARY DESIGN SERVICES"
                            y="Let's create your dream space together."
                            z="Book a Consultation"
                        />
                        <Grid
                            size={6}
                            sx={{
                                backgroundColor: "rgb(250, 250, 250)",
                            }}
                        >
                            <img
                                style={{ width: "100%" }}
                                src="/assets/features/03.jpg"
                            ></img>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        );
    }

    return (
        <>
            <NavBar />
            <SecondNavBar />
            <HeroSection />
            <CategoriesSection />
            <FeaturesSection />
        </>
    );
}

export default App;
