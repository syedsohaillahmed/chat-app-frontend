import { styled } from "@mui/material"
import { Link as LinkComponent } from "react-router-dom"

export const VisuallyHiddenInput = styled("input")({
    border:0,
    clip:"rect(0 0 0 0)",
    height:1,
    margin:-1,
    overflow:"hidden",
    padding:0,
    position:"absolute",
    whiteSpace:"nowrap",
    width:1
})

export const Link = styled(LinkComponent)
({
    textDecoration:"none",
    color:"black",
    padding:"1rem",
    
    ":hover":{
        backgroundColor: "wheat" 
    }
})

export const CustomInputBox = styled("input")({
    width:"100%",
    height:"100%",
    border:"none",
    outline:"none",
    padding: "20px",
    borderRadius:"1.5rem",
    backgroundColor:"ButtonHighlight"
})