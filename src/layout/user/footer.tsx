import { Button, Stack, Typography } from "@mui/material";
import { pages } from "@/data/page";
import Link from "next/link";
export default function Footer() {
  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        pl: 4,
        pr: 4,
        pt: 2,
        pb: 2,
        borderTop: 1,
        boxShadow: "0 0 20px 1px",
        height: 50,
        width: "100%",
      }}
    >
      {pages.map((page) => (
        <Link href={page.href} key={page.id}>
          <Button sx={{ alignItems: "center", justifyContent: "center" }}>
            <Stack sx={{justifyContent:'center' , alignItems:'center'}}>
                {page.icon}
                <Typography>{page.title}</Typography>
            </Stack>
            
          </Button>
        </Link>
      ))}
    </Stack>
  );
}
