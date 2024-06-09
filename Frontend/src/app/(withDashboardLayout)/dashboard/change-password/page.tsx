"use client";
import RUForm from "@/components/RUForm/RUForm";
import RUInput from "@/components/RUForm/RUInput";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { logoutUser } from "@/services/action/logOutUser";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordIcon from "@mui/icons-material/Password";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
const validationSchema = z.object({
  oldPassword: z.string().min(6, "Must be at least 6 characters long"),
  newPassword: z.string().min(6, "Must be at least 6 characters long"),
});

const ChangePassword = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();
  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await changePassword(values);
      if (res?.data?.message) {
        logoutUser(router);
        toast.success(res?.data?.message);
      } else {
        throw new Error("Incorrect Old Password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      data-aos="fade-down"
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        border: 2,
        borderColor: "#EEEEEE",
        boxShadow: 0.99,
        borderRadius: 2,
        mx: "auto",
        mt: {
          xs: 2,
          md: 5,
        },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}
        >
          <PasswordIcon sx={{ color: "#FFA62F" }} />
        </Box>
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ mb: 2, mt: -1.5, fontFamily: "Kanit" }}
        >
          Change password
        </Typography>
      </Stack>
      <RUForm
        onSubmit={onSubmit}
        defaultValues={{ oldPassword: "", newPassword: "" }}
        resolver={zodResolver(validationSchema)}
      >
        <Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RUInput
              name="oldPassword"
              type="password"
              label="Old Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RUInput
              name="newPassword"
              type="password"
              label="New Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          sx={{
            width: "100%",
            my: 2,
            background: "#DC5F00",
            color: "#FFFF",
            ":hover": {
              background: "#FF9A00",
            },
          }}
        >
          change Password
        </Button>
      </RUForm>
    </Box>
  );
};

export default ChangePassword;
