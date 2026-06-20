import {
    Box,
    Skeleton
} from "@mui/material";

function PageSkeleton() {

    return (

        <Box>

            <Skeleton
                variant="text"
                height={60}
                width="30%"
            />

            <Skeleton
                variant="rectangular"
                height={120}
                sx={{
                    mt: 2,
                    borderRadius: 2
                }}
            />

            <Skeleton
                variant="rectangular"
                height={120}
                sx={{
                    mt: 2,
                    borderRadius: 2
                }}
            />

            <Skeleton
                variant="rectangular"
                height={120}
                sx={{
                    mt: 2,
                    borderRadius: 2
                }}
            />

        </Box>

    );
}

export default PageSkeleton;