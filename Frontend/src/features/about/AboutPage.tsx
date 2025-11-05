import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import { useLazyGet400ErrorQuery } from "./errorApi";

export default function AboutPage() {
const [trigger400Error] = useLazyGet400ErrorQuery();

  return (
    <Container maxWidth='lg'>
      <Typography gutterBottom variant="h3">Error for testing</Typography>
      <ButtonGroup fullWidth>
        <ButtonGroup>
          <Button variant="contained" onClick={() => trigger400Error()
              .catch(err => console.log(err))}>
            Test 400 Error
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </Container>
  )
};