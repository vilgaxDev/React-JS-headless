import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent,
  LoginPage,
  Icons,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/styles.min.css";
import routerProvider from "@pankod/refine-react-router-v6";
import { DataProvider } from "@pankod/refine-strapi-v4";

import { authProvider, axiosInstance } from "./authProvider";
import { API_URL } from "./constants";
import { CustomersList } from "pages/customers/customersList";
import {TeamLeadList} from "./pages/team_lead/teamLeadList"





  function App() {
   // const API_URL = "Your_Strapi_Url";
    //const dataProvider = DataProvider(API_URL + "/api", axiosInstance);

    const {
      //FileAddOutlined,
       //UserAddOutlined,
     // TeamOutlined,
     InfoCircleOutlined,
    // SlidersOutlined,
   } = Icons;

  return (
    <Refine
      notificationProvider={notificationProvider}
      Layout={Layout}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      routerProvider={routerProvider}
      authProvider={authProvider}
      dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
      LoginPage={LoginPage}
      resources={[
        {
            name: "CustomerDetails",
            options: { label: "Customer Details" },
            list: CustomersList,
             icon: <InfoCircleOutlined />,
        },
     
        {
          name: "TeamLeadList",
          options: { label: "Team lead Details" },
          list: TeamLeadList,
           icon: <InfoCircleOutlined />,
      },

      ]}
    />
  );
}

export default App;
