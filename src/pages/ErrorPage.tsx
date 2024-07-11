import { Box, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar";


const ErrorPage = () => {
    const error = useRouteError();

  return (
    <>
        <NavBar />
        <Box padding={5}>
            <h1>Ooops!</h1>
            <Text>{isRouteErrorResponse(error) ? "The page does not exist" : "An error occurred"}</Text>
        </Box>
    </>
  )
}

export default ErrorPage