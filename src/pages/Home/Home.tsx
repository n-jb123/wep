import PrimaryButton from "@/component/buttons/primaryButton";
import SearchBar from "@/component/searchbar/searchBar";
import { AnticipatedAdventures } from "@/data/AnticipatedAdventures";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SecondaryButton from "@/component/buttons/secondaryButton";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Chips from "@/component/chips/chips";
import Surface from "@/component/cards/surface";
import { Category } from "@/data/Category";
import { ChallengeLevel } from "@/data/ChallengeLevel";
import { TourOperators } from "@/data/TourOperators";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function HomePage() {
  return (
    <Stack>
      {/* searchBar */}
      <SearchBar />
      {/*-- searchBar --*/}
      {/* banner */}
      <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography>أقوى المغامرات المرتقبة</Typography>
        <Box
          sx={{
            display: "flex",
            overflow: "auto",
            gap: 2,
            scrollbarWidth: "none",
          }}
        >
          {AnticipatedAdventures.map((trip) => {
            return (
              <Stack
                direction={"row"}
                sx={{
                  gap: 3,

                  bgcolor: "background.paper",
                  borderRadius: 4,

                  pb: 2,
                }}
              >
                <Stack direction={"column"} sx={{ position: "relative" }}>
                  <Box sx={{ maxHeight: "50vh" }}>
                    <img
                      src={trip.image}
                      alt={trip.alt}
                      style={{
                        maxHeight: "50vh",
                        objectFit: "cover",
                        maxWidth: "85vw",
                      }}
                    />
                  </Box>
                  <Stack sx={{ pl: 4, pr: 4, gap: 2 }}>
                    <Typography>{trip.title}</Typography>
                    <Stack
                      direction={"row"}
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography>
                        {trip.TripDuration} - {trip.details}
                      </Typography>
                      <Typography sx={{ color: "primary.main" }}>
                        {trip.price} ل.س/شخص
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} sx={{ gap: 2 }}>
                      <PrimaryButton title="تفاصيل المسار">
                        <VisibilityIcon
                          sx={{ color: "primary.contrastText" }}
                        />
                      </PrimaryButton>
                      <SecondaryButton>
                        <BookmarkBorderIcon />
                      </SecondaryButton>
                    </Stack>
                  </Stack>
                  <Box sx={{ position: "absolute", top: 0, right: 0 }}>
                    <Chips
                      label={trip.Category}
                      icons={trip.CategoryIcons}
                      color="background.paper"
                    />
                  </Box>
                </Stack>
              </Stack>
            );
          })}
        </Box>
      </Box>
      {/*-- banner--*/}
      {/* category */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 4,
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>استكشف حسب الطبيعة</Typography>
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 999,
              pl: 4,
              pr: 4,
            }}
          >
            <Typography>{Category.length} انواع</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            overflow: "auto",
            gap: 2,
            scrollbarWidth: "none",
          }}
        >
          {Category.map((c) => {
            return (
              <Box
                key={c.id}
                sx={{
                  cursor: "pointer",
                  transition: "all 0.5s",
                  "&:hover": { scale: "1.05" },
                }}
              >
                <Surface>
                  <Stack
                    sx={{
                      gap: 2,
                      width: "100px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: 999,
                        width: "50px",
                        height: "50px",
                        bgcolor: c.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {c.icon}
                    </Box>
                    <Typography>{c.title}</Typography>
                    <Typography>{c.AvailableTrips}</Typography>
                  </Stack>
                </Surface>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/*-- category -- */}
      {/* Challenge level */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 4,
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>مستوى التحدي والخطورة</Typography>
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 999,
              pl: 4,
              pr: 4,
            }}
          >
            <Typography>{ChallengeLevel.length} تصنيفات معتمدة</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            scrollbarWidth: "none",
          }}
        >
          {ChallengeLevel.map((c) => {
            return (
              <Box
                key={c.id}
                sx={{
                  cursor: "pointer",
                  transition: "all 0.5s",
                  width: "550px",
                  "&:hover": { scale: "1.05" },
                }}
              >
                <Surface>
                  <Stack
                  direction={'row'}
                    sx={{
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: 999,
                        width: "50px",
                        height: "50px",
                        bgcolor: c.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {c.icon}
                    </Box>
                    <Typography>{c.level}</Typography>
                  </Stack>
                </Surface>
              </Box>
            );
          })}
        </Box>
      </Box>
      {/*-- Challenge level --  */}
      {/* Tour Operators */}
       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 4,
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>أبرز منظمي الرحلات</Typography>
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 999,
              pl: 4,
              pr: 4,
            }}
          >
            <Typography>{ChallengeLevel.length} منظمي الرحلات</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            overflowX:'auto',
            gap: 2,
            scrollbarWidth: "none",
          }}
        >
          {TourOperators.map((c) => {
            return (
              <Box
                key={c.id}
                sx={{
                  cursor: "pointer",
                  transition: "all 0.5s",
                  width: "400px",
                  height:'max-content',
                  "&:hover": { scale: "1.05" },
                }}
              >
                <Surface>
                  <Stack
                  direction={'column'}
                    sx={{
                      gap: 2,
                      alignItems: "center",
                      width:'300px'
                    }}
                  >
                    <Stack direction={'row'} sx={{alignItems:'center' , gap:2}}>
                         <Avatar src={c.image} sx={{width:'100px' , height:'100px'}}/>
                   <Stack>
                    <Typography>{c.name}</Typography>
                    <Stack direction={'row'} sx={{gap:2}}>
                        <Typography>{c.rating}</Typography>
                        <Typography>{c.NumberOfTrips}</Typography>
                    </Stack>
                   </Stack>
                    </Stack>
                  
                    <PrimaryButton title="استكشف رحلاته">
                        <ArrowBackIcon sx={{color:'primary.contrastText'}}/>
                    </PrimaryButton>
                  </Stack>
                </Surface>
              </Box>
            );
          })}
        </Box>
      </Box>
      {/* -- Tour Operators-- */}

    </Stack>
  );
}
