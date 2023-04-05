import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { ItemModel } from "../../models/ItemModel";
const cookies = new Cookies();

export default function Item() {
  const { isAuthenticated } = useAuth0();
  const [item, setItem] = useState<ItemModel>();

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/items/1`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: cookies.get('api_token'),
            },
          },
        );

        setItem(response.data);
      })();
    }
  }, [isAuthenticated]);

  return <div>{item?.item_id}</div>;
}
