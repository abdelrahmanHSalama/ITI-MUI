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
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function App() {
    const menuItems01 = ["Mentorship", "Expert Help", "Freelancing", "More"];
    const menuItems02 = [
        { text: "Become a Mentor", color: "black" },
        { text: "Login", color: "black" },
        { text: "Signup", color: "white", bg: "black" },
    ];

    function NavBar() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="sticky"
                    sx={{ backgroundColor: "white" }}
                    elevation={0}
                >
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="162"
                            height="20"
                            viewBox="0 0 162 20"
                        >
                            <g fill="#000">
                                <path d="M38.712 11.778c0-.744.131-1.457.393-2.139a5.309 5.309 0 0 1 1.14-1.798 5.395 5.395 0 0 1 1.831-1.23c.725-.303 1.55-.455 2.475-.455 1.255 0 2.311.265 3.167.796.856.53 1.497 1.223 1.926 2.077l-3.23.972c-.428-.69-1.056-1.034-1.884-1.034a2.24 2.24 0 0 0-1.729.765c-.463.51-.693 1.192-.693 2.046 0 .428.062.816.186 1.168.124.351.297.651.517.9.221.247.48.44.777.578.297.138.61.207.942.207.414 0 .793-.1 1.139-.3.344-.2.6-.458.766-.775l3.23.992c-.401.84-1.04 1.53-1.916 2.067-.876.538-1.943.806-3.198.806-.912 0-1.729-.155-2.454-.465a5.625 5.625 0 0 1-1.842-1.24 5.231 5.231 0 0 1-1.15-1.799 5.902 5.902 0 0 1-.393-2.139zm17.515 5.643c-.924 0-1.749-.151-2.474-.455a5.382 5.382 0 0 1-1.832-1.23 5.192 5.192 0 0 1-1.129-1.798 6.057 6.057 0 0 1-.382-2.14c0-.743.127-1.456.382-2.138a5.19 5.19 0 0 1 1.13-1.799 5.516 5.516 0 0 1 1.831-1.24c.725-.31 1.55-.465 2.474-.465.925 0 1.746.155 2.464.465.718.31 1.325.724 1.822 1.24a5.333 5.333 0 0 1 1.139 1.799c.262.682.393 1.395.393 2.139 0 .744-.128 1.457-.383 2.14a5.19 5.19 0 0 1-1.128 1.798 5.388 5.388 0 0 1-1.832 1.23c-.725.303-1.55.454-2.475.454zm11.946 0a4.964 4.964 0 0 1-2.06-.423 4.783 4.783 0 0 1-1.625-1.19 5.599 5.599 0 0 1-1.066-1.787 6.34 6.34 0 0 1-.383-2.243c0-.785.116-1.522.352-2.211a5.421 5.421 0 0 1 .993-1.788c.428-.503.935-.9 1.522-1.189a4.31 4.31 0 0 1 1.936-.434c.746 0 1.428.18 2.05.538A3.69 3.69 0 0 1 71.32 8.14V2.125h3.313v11.369c0 .33.062.562.186.692.124.132.345.21.662.238v2.79a7.984 7.984 0 0 1-1.594.166c-1.159-.028-1.821-.49-1.987-1.385l-.062-.579c-.4.675-.925 1.178-1.574 1.51a4.538 4.538 0 0 1-2.09.495zm14.348 0c-.911 0-1.729-.148-2.454-.444a5.445 5.445 0 0 1-1.842-1.21A5.167 5.167 0 0 1 77.075 14a5.686 5.686 0 0 1-.393-2.098c0-.785.131-1.526.394-2.222a5.38 5.38 0 0 1 1.138-1.83 5.329 5.329 0 0 1 1.832-1.24c.725-.302 1.55-.454 2.475-.454.924 0 1.745.152 2.463.455a5.415 5.415 0 0 1 1.822 1.23 5.214 5.214 0 0 1 1.129 1.787c.255.676.383 1.386.383 2.13 0 .193-.008.382-.02.568a3.976 3.976 0 0 1-.063.486h-8.033c.055.73.32 1.285.797 1.664.476.379 1.018.568 1.625.568.483 0 .949-.117 1.398-.351.448-.235.748-.551.9-.951l2.816.785c-.428.855-1.09 1.55-1.988 2.088-.897.538-1.973.806-3.23.806zm24.471-.206h-3.312v-6.098c0-.717-.128-1.237-.384-1.56-.255-.324-.596-.487-1.024-.487-.442 0-.873.18-1.294.538a3.09 3.09 0 0 0-.922 1.385v6.222h-3.312v-6.098c0-.717-.128-1.237-.383-1.56-.255-.324-.597-.487-1.025-.487-.442 0-.873.176-1.294.528-.421.351-.728.816-.921 1.395v6.222h-3.312V6.362h2.98v1.82c.4-.662.946-1.165 1.636-1.51.69-.344 1.491-.516 2.402-.516.441 0 .834.055 1.18.166.345.11.638.261.88.454.241.193.442.417.6.672.16.255.272.527.342.816.4-.675.939-1.195 1.615-1.56s1.449-.548 2.318-.548c.69 0 1.246.128 1.667.382.42.256.749.586.983.992.235.407.39.852.466 1.334.076.482.114.95.114 1.405v6.946zm7.37.206c-.91 0-1.728-.148-2.453-.444a5.445 5.445 0 0 1-1.842-1.21 5.167 5.167 0 0 1-1.15-1.767 5.686 5.686 0 0 1-.393-2.098c0-.785.131-1.526.393-2.222a5.38 5.38 0 0 1 1.14-1.83 5.329 5.329 0 0 1 1.831-1.24c.725-.302 1.55-.454 2.475-.454.924 0 1.745.152 2.463.455a5.415 5.415 0 0 1 1.822 1.23 5.214 5.214 0 0 1 1.128 1.787c.256.676.384 1.386.384 2.13 0 .193-.008.382-.021.568a3.976 3.976 0 0 1-.062.486h-8.033c.055.73.32 1.285.797 1.664.476.379 1.017.568 1.625.568.483 0 .949-.117 1.398-.351.448-.235.748-.551.9-.951l2.816.785c-.428.855-1.09 1.55-1.988 2.088-.897.538-1.974.806-3.23.806zm17.785-.206h-3.312v-6.098c0-.717-.135-1.237-.404-1.56-.27-.324-.625-.487-1.067-.487-.234 0-.472.049-.714.145-.242.097-.47.231-.683.403a3.521 3.521 0 0 0-.59.61c-.18.235-.318.49-.414.765v6.222h-3.313V6.362h2.981v1.82c.4-.648.966-1.147 1.698-1.499.732-.351 1.574-.527 2.526-.527.704 0 1.274.128 1.708.382.435.256.77.586 1.004.992.234.407.39.852.466 1.334.076.482.114.95.114 1.405v6.946zm9.172-.58c-.456.194-.973.373-1.553.538a6.461 6.461 0 0 1-1.78.248c-.414 0-.805-.051-1.17-.155a2.614 2.614 0 0 1-.963-.496 2.32 2.32 0 0 1-.652-.899c-.159-.372-.238-.82-.238-1.344V8.864h-1.387V6.362h1.387V2.911h3.313v3.451h2.215v2.502h-2.215v4.526c0 .359.093.617.279.776.187.158.417.237.693.237.235 0 .483-.041.746-.123.262-.083.497-.173.704-.27l.62 2.626zm6.314.786c-.924 0-1.749-.151-2.474-.455a5.38 5.38 0 0 1-1.832-1.23 5.192 5.192 0 0 1-1.129-1.798 6.057 6.057 0 0 1-.382-2.14c0-.743.127-1.456.382-2.138a5.19 5.19 0 0 1 1.13-1.799 5.514 5.514 0 0 1 1.831-1.24c.725-.31 1.55-.465 2.474-.465.925 0 1.746.155 2.464.465.718.31 1.325.724 1.822 1.24a5.333 5.333 0 0 1 1.139 1.799c.262.682.393 1.395.393 2.139 0 .744-.128 1.457-.383 2.14a5.19 5.19 0 0 1-1.128 1.798 5.39 5.39 0 0 1-1.832 1.23c-.725.303-1.55.454-2.475.454zm14.306-8.226c-.8.014-1.521.144-2.163.392-.642.248-1.115.62-1.418 1.117v6.51h-3.313V6.363h3.044v2.192c.386-.73.873-1.3 1.46-1.706.586-.406 1.21-.623 1.873-.65.276 0 .448.006.517.02v2.977zm-16.728 2.604c0 .855.228 1.54.683 2.057.456.516 1.035.775 1.74.775.344 0 .662-.069.952-.207.29-.138.541-.33.755-.579.214-.248.383-.548.507-.899a3.41 3.41 0 0 0 .187-1.147c0-.854-.228-1.54-.683-2.057a2.194 2.194 0 0 0-1.719-.775 2.259 2.259 0 0 0-1.729.785 2.777 2.777 0 0 0-.507.9 3.424 3.424 0 0 0-.186 1.147zm-91.406 0c0 .855.228 1.54.684 2.057.455.516 1.034.775 1.738.775.345 0 .663-.069.953-.207.29-.138.541-.33.756-.579.213-.248.382-.548.506-.899a3.41 3.41 0 0 0 .187-1.147c0-.854-.228-1.54-.683-2.057a2.194 2.194 0 0 0-1.719-.775 2.259 2.259 0 0 0-1.729.785 2.777 2.777 0 0 0-.507.9 3.424 3.424 0 0 0-.186 1.147zm15.259 2.832c.455 0 .89-.135 1.304-.404.414-.268.738-.636.973-1.105v-2.274a2.987 2.987 0 0 0-1.004-1.354c-.463-.351-.942-.527-1.44-.527-.358 0-.686.08-.983.238a2.632 2.632 0 0 0-.776.63c-.22.262-.39.565-.507.91-.117.344-.176.71-.176 1.095 0 .814.241 1.482.725 2.005.482.524 1.11.786 1.884.786zm15.755-3.866c-.07-.689-.318-1.233-.745-1.633-.429-.4-.96-.599-1.595-.599-.649 0-1.184.204-1.605.61-.42.406-.665.947-.734 1.622h4.68zm31.842 0c-.07-.689-.318-1.233-.746-1.633-.428-.4-.959-.599-1.594-.599-.649 0-1.184.204-1.605.61-.42.406-.665.947-.734 1.622h4.679zM29.398 17.265v1.181c0 .748-.607 1.353-1.355 1.353H1.355A1.354 1.354 0 0 1 0 18.446v-1.18h1.73V1.705C1.73.764 2.495 0 3.438 0H25.96c.944 0 1.709.764 1.709 1.706v15.559h1.729zm-12.914.808a.808.808 0 0 0 .809-.808h8.647V1.726H3.459v15.539h8.646c0 .446.362.808.809.808h3.57zm-6.088-4.612a.864.864 0 1 1 0 1.727H6.897a.864.864 0 1 1 0-1.727h3.499zm.844-3.198a.864.864 0 1 1 0 1.727H6.917a.864.864 0 1 1 0-1.727h4.323zm7.328-1.678a2.592 2.592 0 0 1-2.594-2.59c0-1.43 1.162-2.59 2.594-2.59a2.592 2.592 0 0 1 2.594 2.59c0 1.43-1.161 2.59-2.594 2.59zm5.073 5.5a1.25 1.25 0 0 1-1.231 1.454h-7.683a1.25 1.25 0 0 1-1.231-1.454C13.88 11.69 15.2 9.757 16.92 8.99a3.367 3.367 0 0 0 3.295 0c1.72.766 3.04 2.7 3.425 5.094zm-9.807-6.156a.864.864 0 0 1-.864.864H8.646l-.043-.002H6.917a.864.864 0 1 1 0-1.727h2.594l.043.002h3.416c.477 0 .864.387.864.863zM6.917 5.594a.864.864 0 1 1 0-1.726h.403l.03-.002h5.618a.864.864 0 1 1 0 1.727H7.811l-.03.001h-.864z"></path>
                            </g>
                        </svg>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            {menuItems01.map((item) => (
                                <CustomMenu key={item} menuText={item} />
                            ))}
                        </Box>

                        <Box sx={{ marginLeft: "auto" }}>
                            {menuItems02.map(({ text, color, bg }) => (
                                <Button
                                    key={text}
                                    sx={{
                                        color: color,
                                        backgroundColor: bg || "transparent",
                                        textTransform: "capitalize",
                                        "&:hover": bg
                                            ? { backgroundColor: "#333" }
                                            : {},
                                    }}
                                >
                                    {text}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }

    function CustomMenu({ menuText }) {
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        return (
            <Box>
                <Button
                    onClick={handleClick}
                    sx={{ color: "black", textTransform: "capitalize" }}
                >
                    {menuText}
                </Button>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    {["Item 01", "Item 02", "Item 03"].map((item) => (
                        <MenuItem key={item} onClick={handleClose}>
                            {item}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        );
    }

    function MiddleSection() {
        return (
            <>
                <Box
                    sx={{
                        backgroundColor: "teal",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        paddingBottom: "200px",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: "700",
                            color: "white",
                            fontSize: "50px",
                            textAlign: "center",
                            marginBlock: "25px",
                        }}
                    >
                        Find a developer<br></br>for live mentorship & freelance
                        projects
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            width: "max-content",
                            backgroundColor: "darkorange",
                        }}
                    >
                        Get Help Now
                    </Button>
                    <img
                        style={{
                            width: "500px",
                            position: "absolute",
                            bottom: "-85px",
                        }}
                        src="/assets/hero-l.png"
                    ></img>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        paddingTop: "75px",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "400",
                            fontSize: "40px",
                            textAlign: "center",
                            marginBlock: "25px",
                        }}
                    >
                        Get Help from Vetted Software Developers
                    </Typography>
                    <Box sx={{ width: "75%" }}>
                        <Grid container>
                            <Grid
                                size={6}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: "400",
                                        color: "black",
                                        fontSize: "24px",
                                    }}
                                >
                                    One-on-One Live Mentorship
                                </Typography>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontWeight: "400",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <WavingHandIcon /> Debug with the Help
                                        of an expert!
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: "400",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <WavingHandIcon /> Personalize your
                                        learning experience!
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: "400",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <WavingHandIcon /> Get answers to
                                        complex problems!
                                    </Typography>
                                </Box>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: "max-content",
                                        backgroundColor: "darkorange",
                                    }}
                                >
                                    Find A Mentor
                                </Button>
                            </Grid>
                            <Grid
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                                size={6}
                            >
                                <img
                                    style={{
                                        width: "350px",
                                    }}
                                    src="/assets/mentorship.jpg"
                                ></img>
                            </Grid>
                            <Grid
                                size={6}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    style={{
                                        width: "250px",
                                    }}
                                    src="/assets/freelance-job.png"
                                ></img>
                            </Grid>
                            <Grid
                                size={6}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                    alignItems: "start",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: "400",
                                        color: "black",
                                        fontSize: "24px",
                                    }}
                                >
                                    Project-Based Freelance Work
                                </Typography>
                                <Box>
                                    <Typography
                                        sx={{
                                            fontWeight: "400",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <WavingHandIcon /> Find experts for
                                        on-demand code review!
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: "400",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <WavingHandIcon /> Build features for
                                        your existing product!
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: "400",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <WavingHandIcon /> Turn your ideas into
                                        an MVP!
                                    </Typography>
                                </Box>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: "max-content",
                                        backgroundColor: "darkorange",
                                    }}
                                >
                                    Find A Freelancer
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        paddingTop: "75px",
                    }}
                >
                    <Box sx={{ width: "75%" }}>
                        <Grid container>
                            <Grid
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                                size={6}
                            >
                                <img
                                    style={{
                                        width: "350px",
                                    }}
                                    src="/assets/visit-arc.png"
                                ></img>
                            </Grid>
                            <Grid
                                size={6}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "20px",
                                    alignItems: "start",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="113"
                                    height="36"
                                    viewBox="0 0 113 36"
                                >
                                    <path
                                        fill="#010F57"
                                        fill-rule="evenodd"
                                        d="M91.505 35.522c-2.96-2.255-5.258-4.926-6.823-7.934-1.57-3.023-2.364-6.257-2.364-9.604 0-3.374.785-6.613 2.341-9.617 1.548-2.99 3.854-5.647 6.846-7.911L92.129 0l.25.338 1.777 2.522-.278.248c-2.508 2.26-4.172 4.438-5.163 6.671-.996 2.228-1.499 4.975-1.499 8.17 0 3.305.52 6.107 1.552 8.33 1.037 2.238 2.683 4.394 4.89 6.397l.498.41-.215.343L92.129 36l-.624-.478zm12.308 0l-.624.478-1.812-2.571-.216-.343.498-.41c2.207-2.003 3.854-4.16 4.89-6.397 1.032-2.223 1.552-5.025 1.552-8.33 0-3.195-.502-5.942-1.498-8.17-.992-2.233-2.656-4.411-5.164-6.671l-.278-.248 1.777-2.522.251-.338.624.456c2.992 2.264 5.298 4.92 6.845 7.911A20.71 20.71 0 0 1 113 17.984c0 3.347-.794 6.581-2.364 9.604-1.566 3.008-3.863 5.679-6.823 7.934zM6.047 18.008c0 2.467.655 4.474 1.97 6.026 1.35 1.57 3.05 2.35 5.1 2.35 2.19 0 3.961-.758 5.312-2.269 1.35-1.57 2.023-3.563 2.023-5.977 0-2.413-.673-4.402-2.023-5.972-1.35-1.533-3.105-2.3-5.258-2.3-2.032 0-3.732.776-5.1 2.327-1.35 1.57-2.024 3.505-2.024 5.815zM20.084 5.215h5.94v25.743h-5.94V28.26c-2.436 2.29-5.056 3.437-7.86 3.437-3.539 0-6.464-1.286-8.779-3.857C1.148 25.216 0 21.936 0 18.008c0-3.857 1.148-7.073 3.445-9.649 2.297-2.57 5.168-3.856 8.623-3.856 2.978 0 5.652 1.231 8.016 3.698V5.215zm13.405.22h5.913v2.3c1.09-1.145 2.037-1.98 2.93-2.277 2.772-.934 6.168-.289 8.927 1.263l-2.4 4.83c-1.122-.807-2.876-1.334-3.944-1.334-3.225 0-5.513 2.715-5.513 7.614v13.347h-5.913V5.435zm40.548.89v5.688c-1.822-2.147-5.913-2.147-7.335-2.147-2.225 0-4.073.785-5.545 2.355-1.471 1.565-2.207 3.532-2.207 5.89 0 2.414.709 4.399 2.126 5.95 1.44 1.548 3.27 2.323 5.496 2.323 1.417 0 5.823-.45 7.465-1.935v5.373c-2.4 1.25-4.8 1.876-7.2 1.876-3.962 0-7.277-1.285-9.937-3.857-2.665-2.593-3.997-5.81-3.997-9.648 0-3.843 1.35-7.082 4.046-9.725 2.7-2.643 6.012-3.965 9.937-3.965 2.525 0 4.908.604 7.15 1.822z"
                                    ></path>
                                </svg>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: "400",
                                        color: "black",
                                        fontSize: "24px",
                                    }}
                                >
                                    Hiring for a bigger project?
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: "400",
                                        color: "black",
                                        fontSize: "16px",
                                    }}
                                >
                                    Arc helps you find senior developers for
                                    both permanent full-time roles and 40+ hour
                                    contract projects.
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: "400",
                                        color: "teal",
                                        fontSize: "16px",
                                    }}
                                >
                                    Visit Arc to learn more →
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </>
        );
    }

    const developers = [
        {
            name: "Jessamyn Smith",
            role: "Lead Software Developer",
            image: "https://next-cdn.codementor.io/images/landing-page/developers/jessamyn-smith.png",
        },
        {
            name: "Ionică Bizău",
            role: "Full Stack Developer",
            image: "https://next-cdn.codementor.io/images/landing-page/developers/ionica-bizau.png",
        },
        {
            name: "Daniel Hamilton",
            role: "Passionate Software Engineer",
            image: "https://next-cdn.codementor.io/images/landing-page/developers/dan-hamilton.png",
        },
        {
            name: "Miroslav Kuťák",
            role: "Senior iOS Developer",
            image: "https://next-cdn.codementor.io/images/landing-page/developers/miroslav-kutak.png",
        },
        {
            name: "Martijn Pieters",
            role: "#1 Stack Overflow Python Answerer",
            image: "https://next-cdn.codementor.io/images/landing-page/developers/martijn-pieters.png",
        },
        {
            name: "Ben Gottlieb",
            role: "Senior iOS Developer",
            image: "https://next-cdn.codementor.io/images/landing-page/developers/ben-gottlieb.png",
        },
    ];

    function DevelopersStack({ x, y, sx }) {
        return (
            <Stack spacing={2} sx={{ marginInline: "10px", ...sx }}>
                {developers.slice(x, y).map((developer, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: "300px",
                            height: "150px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Avatar
                            sx={{ width: 100, height: 100, margin: "10px" }}
                            src={developer.image}
                            alt={developer.name}
                        />
                        <CardContent>
                            <Typography sx={{ fontSize: "20px" }}>
                                {developer.name}
                            </Typography>
                            <Typography
                                sx={{ fontSize: "16px", color: "grey" }}
                            >
                                {developer.role}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        );
    }

    function DevelopersSection() {
        return (
            <Box sx={{ backgroundColor: "teal" }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "400",
                        fontSize: "40px",
                        textAlign: "center",
                        color: "white",
                        paddingBlock: "50px",
                    }}
                >
                    Connect with 12000+ Top Developers Anytime
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "50px",
                    }}
                >
                    <DevelopersStack x="0" y="2" />
                    <DevelopersStack
                        x="2"
                        y="4"
                        sx={{ position: "relative", top: "-20px" }}
                    />
                    <DevelopersStack x="4" y="6" />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "400",
                            color: "white",
                            fontSize: "24px",
                        }}
                    >
                        Start working with our developers
                    </Typography>
                    <Button
                        sx={{
                            color: "white",
                            backgroundColor: "darkorange",
                            marginBlock: "10px",
                            fontSize: "16px",
                            padding: "16px",
                            fontWeight: "400",
                        }}
                    >
                        Get Started
                    </Button>
                </Box>
            </Box>
        );
    }

    function Footer() {
        return (
            <Box
                sx={{
                    backgroundColor: "black",
                }}
            >
                <Grid
                    container
                    sx={{
                        backgroundColor: "black",
                        color: "white",
                        alignItems: "start",
                        width: "85%",
                        margin: "0 auto",
                    }}
                >
                    <Grid item size={4} sx={{ paddingBlock: "10px" }}>
                        <ul
                            style={{
                                listStyleType: "none",
                                marginBlock: "5px",
                            }}
                        >
                            <li style={{ marginBlock: "5px" }}>
                                <Typography sx={{ fontSize: "20px" }}>
                                    PRODUCTS
                                </Typography>
                            </li>
                            <li style={{ marginBlock: "5px" }}>
                                <Typography>
                                    <strong>Codementor</strong>
                                    <br></br>Find a mentor to help you in real
                                    time
                                </Typography>
                            </li>
                            <li style={{ marginBlock: "5px" }}>
                                <Typography>
                                    <strong>Codementor Events</strong>
                                    <br></br>Attend and host virtual events for
                                    developers
                                </Typography>
                            </li>
                            <li style={{ marginBlock: "5px" }}>
                                <Typography>
                                    <strong>DevProjects</strong>
                                    <br></br>Learn programming by building
                                    projects
                                </Typography>
                            </li>
                            <li style={{ marginBlock: "5px" }}>
                                <Typography>
                                    <strong>Arc</strong>
                                    <br></br>Helping employers find talent for
                                    remote jobs
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item size={8} sx={{ paddingBlock: "10px" }}>
                        <Typography sx={{ fontSize: "20px" }}>PAGES</Typography>
                        <Box sx={{ display: "flex", gap: "20px" }}>
                            <ul
                                style={{
                                    listStyleType: "none",
                                    marginBlock: "5px",
                                }}
                            >
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>Become a Codementor</Typography>
                                </li>
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>How It Works</Typography>
                                </li>
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>Find Mentors</Typography>
                                </li>
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>Find Freelancers</Typography>
                                </li>
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>Find a Tutor</Typography>
                                </li>
                            </ul>
                            <ul
                                style={{
                                    listStyleType: "none",
                                    marginBlock: "5px",
                                }}
                            >
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>Community</Typography>
                                </li>
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>Blog</Typography>
                                </li>
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>
                                        Codementor For Students
                                    </Typography>
                                </li>
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>
                                        Codementor For Teams
                                    </Typography>
                                </li>
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>Code Review</Typography>
                                </li>
                            </ul>
                            <ul
                                style={{
                                    listStyleType: "none",
                                    marginBlock: "5px",
                                }}
                            >
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>Pair Programming</Typography>
                                </li>
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>
                                        Best Web Design Software
                                    </Typography>
                                </li>
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>Coding Starter Kit</Typography>
                                </li>
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>Codementor Reviews</Typography>
                                </li>
                                <li style={{ marginBlock: "5px" }}>
                                    <Typography>
                                        Best Language to Learn
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                </Grid>
                <Divider
                    sx={{
                        borderColor: "gray",
                        borderWidth: "1px",
                        width: "85%",
                        margin: "0 auto",
                        marginBlock: "5px",
                    }}
                />
                <Box
                    sx={{
                        width: "85%",
                        margin: "0 auto", // Centering like the Grid
                        color: "white",
                        paddingBlock: "15px 20px",
                        display: "flex",
                    }}
                >
                    <Typography>
                        © Copyright {new Date().getFullYear()} Codementor
                    </Typography>
                    <Box
                        sx={{
                            marginLeft: "auto",
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                        }}
                    >
                        <Typography>Cookie Policy</Typography>
                        <Typography>Privacy Policy</Typography>
                        <Typography>Terms of Service</Typography>
                        <Typography>Careers</Typography>
                        <Typography>Help Center</Typography>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 40 40"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                id="For-Developer"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <g
                                    id="SocialFacebookSvg_Artboard"
                                    transform="translate(-432 -244)"
                                >
                                    <g
                                        id="SocialFacebookSvg_SocialIcaon_FB_Plain"
                                        transform="translate(428 240)"
                                    >
                                        <path
                                            id="SocialFacebookSvg_Rectangle"
                                            d="M0 0h48v48H0z"
                                        ></path>
                                        <path
                                            d="M44 24.122C44 13.01 35.046 4 24 4S4 13.009 4 24.122C4 34.166 11.314 42.49 20.875 44V29.939h-5.078v-5.817h5.078V19.69c0-5.043 2.986-7.829 7.554-7.829 2.188 0 4.477.393 4.477.393v4.952h-2.522c-2.484 0-3.259 1.551-3.259 3.143v3.774h5.547l-.887 5.817h-4.66V44C36.686 42.49 44 34.166 44 24.122"
                                            id="Fill-1"
                                            fill="white"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>

                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 40 40"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                id="For-Developer"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <g
                                    id="SocialTwitterSvg_Artboard"
                                    transform="translate(-972 -244)"
                                >
                                    <g
                                        id="SocialTwitterSvg_SocialIcon_Twitter_Plain"
                                        transform="translate(968 240)"
                                    >
                                        <path
                                            id="SocialTwitterSvg_Rectangle"
                                            d="M0 0h48v48H0z"
                                        ></path>
                                        <path
                                            d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4zm5.23 11.45c-2.66 0-4.82 2.16-4.82 4.82 0 .38.04.75.13 1.1a13.68 13.68 0 0 1-9.94-5.04c-.41.71-.65 1.54-.65 2.42a4.8 4.8 0 0 0 2.15 4.01c-.79-.02-1.53-.24-2.18-.6v.06c0 2.34 1.66 4.28 3.87 4.73a4.807 4.807 0 0 1-2.18.08 4.815 4.815 0 0 0 4.5 3.35 9.693 9.693 0 0 1-7.14 1.99c2.11 1.38 4.65 2.18 7.37 2.18 8.87 0 13.72-7.35 13.72-13.72 0-.21 0-.42-.01-.62.94-.68 1.76-1.53 2.41-2.5-.86.38-1.79.64-2.77.76 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17a4.799 4.799 0 0 0-3.52-1.52z"
                                            id="Combined-Shape"
                                            fill="white"
                                            fill-rule="nonzero"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>

                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0zM6.597 13.351H4.622V6.967h1.976v6.384zM5.6 6.131a1.178 1.178 0 1 1-.019-2.356 1.178 1.178 0 0 1 .02 2.356zm8.403 7.22h-1.966V10c0-.919-.35-1.432-1.076-1.432-.791 0-1.204.534-1.204 1.432v3.351H7.86V6.967h1.896v.86a2.226 2.226 0 0 1 1.923-1.055c1.354 0 2.323.827 2.323 2.537v4.042z"
                                fill="white"
                            ></path>
                        </svg>
                    </Box>
                </Box>
            </Box>
        );
    }

    return (
        <>
            <NavBar />
            <MiddleSection />
            <DevelopersSection />
            <Footer />
        </>
    );
}

export default App;
