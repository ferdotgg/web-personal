import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Experience from "./components/Experience";
import useLayout from "./hooks/useLayout";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import useDrawer from "./hooks/useDrawer";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";

const MainApp = () => {
  const {
    pageActive,
    loading,
    desktop,
    handleLoading,
    handleChangePage,
  } = useLayout();

  const {
    setDrawer,
    toggleDrawer,
    positionDrawer,
    typeDrawer,
    drawer,
  } = useDrawer();
  return (
    <>
      <BrowserRouter>
        <Layout
          pageActive={pageActive}
          loading={loading}
          desktop={desktop}
          handleLoading={handleLoading}
          handleChangePage={handleChangePage}
          toggleDrawer={toggleDrawer}
          positionDrawer={positionDrawer}
          typeDrawer={typeDrawer}
          drawer={drawer}
          setDrawer={setDrawer}
        >
          <Switch>
            <Route exact path="/">
              <Home desktop={desktop} />
            </Route>
            <Route exact path="/experience">
              <Experience
                desktop={desktop}
                handleChangePage={handleChangePage}
              />
            </Route>
            <Route exact path="/skills">
              <Skills desktop={desktop} handleChangePage={handleChangePage} />
            </Route>
            <Route exact path="/certificates">
              <Certificates
                desktop={desktop}
                handleChangePage={handleChangePage}
              />
            </Route>
            <Route exact path="/projects">
              <Projects
                desktop={desktop}
                handleChangePage={handleChangePage}
              />
            </Route>
            <Route>
              <NotFound desktop={desktop} handleChangePage={handleChangePage} />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default MainApp;
