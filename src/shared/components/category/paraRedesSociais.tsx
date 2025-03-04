import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { Canva } from "../card/Canva";
import { Flick } from "../card/Flick";
import { Lately } from "../card/Lately";
import { Ocoya} from "../card/Ocoya"
import {Predis} from "../card/Predis"
import {Vista} from "../card/Vista"
const cards = [Canva, Lately, Flick, Ocoya, Predis, Vista];
const ParaRedesSociais = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Função para avançar o card
    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    // Função para voltar ao card anterior
    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    // Efeito para avançar automaticamente a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(nextCard, 15000);
        return () => clearInterval(interval);
    }, []);

    const CurrentCard = cards[currentIndex];

    return (
        <>

            <Box sx = {{
                marginTop: "2rem"
            }}>
                <Typography
                    component="span"
                    variant="h2"
                    fontWeight="bold"
                    sx={{
                        fontFamily: "'Lora', sans-serif ",
                        fontSize: "2rem",
                        color: "text.primary", // Cor diferente para APPA
                        paddingLeft: "2rem",
                       
                    }}
                >
                    Para Redes Sociais:
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    marginTop: "1rem"
                }}
            >

                {/* Botão para voltar */}
                <IconButton
                    onClick={prevCard}
                    sx={{
                        position: "absolute",
                        left: 10,
                        zIndex: 2,
                        backgroundColor: "rgba(0,0,0,0.3)",
                        color: "white",
                        "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
                    }}
                >
                    <ArrowBackIos />
                </IconButton>

                {/* Card visível */}
                <Box
                    sx={{
                        opacity: 0,
                        transform: "scale(0.9)",
                        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                        "&.active": { opacity: 1, transform: "scale(1)" },
                    }}
                    className="active"
                >
                    <CurrentCard />
                </Box>

                {/* Botão para avançar */}
                <IconButton
                    onClick={nextCard}
                    sx={{
                        position: "absolute",
                        right: 10,
                        zIndex: 2,
                        backgroundColor: "rgba(0,0,0,0.3)",
                        color: "white",
                        "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
                    }}
                >
                    <ArrowForwardIos />
                </IconButton>
            </Box>
        </>
    );
};

export default ParaRedesSociais;