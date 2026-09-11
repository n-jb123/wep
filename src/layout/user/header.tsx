import OutlineButton from "@/component/buttons/outlineButton";
import PrimaryButton from "@/component/buttons/primaryButton";
import Logo from "@/component/logo/logo";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {pages} from '@/data/page'
export default function Header ({user}:{user:boolean}){
    return(
        <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems:'center',
          p: 4,
          borderBottom: 1,
          boxShadow: "0 0 20px 1px",
          height:100
        }}
      >
        <Logo width={200} height={50} />
        <Stack direction={'row'} sx={{ display: { xs: "none", md: "flex" },gap:4 }}>
            {pages.map((page) => (
              <Link href={page.href} key={page.id}>
                <Button >
                    <Stack direction={'row'} sx={{ alignItems:'center' , justifyContent:'center', gap:1}}>
                        <Typography>{page.title}</Typography>
                        {page.icon}
                    </Stack>
                  
                  
                </Button>
              </Link>
            ))}
        </Stack>
        <Stack>
          {user ? (
            <Stack direction={"row"} sx={{ alignItems: "center", gap: 2 }}>
              <Typography>ناظم جبارة</Typography>
              <Avatar />
            </Stack>
          ) : (
            <Stack direction={"row"} sx={{ alignItems: "center", gap: 2 }}>
              <OutlineButton title="التسجيل" />
              <PrimaryButton title="تسجيل الدخول">
                <ArrowBackIcon sx={{ color: "primary.contrastText" }} />
              </PrimaryButton>
            </Stack>
          )}
        </Stack>
      </Stack>

    )
}