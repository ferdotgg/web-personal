import { useMediaQuery, useTheme } from "@material-ui/core";
import { useEffect, useState } from "react";

const useLayout = () => {
  const [loading, setLoading] = useState(false);

  const [pageActive, setPageActive] = useState(0);

  const theme = useTheme();

  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleLoading = (value) => {
    setLoading(value);
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 1000);
    }
  }, [loading]);

  const handleChangePage = (number) => {
    setPageActive(number);
  };


  return {
    loading,
    desktop,
    pageActive,
    handleLoading,
    handleChangePage,
  };
};

export default useLayout;
