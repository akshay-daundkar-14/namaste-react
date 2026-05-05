import { useEffect, useState } from "react";
import MenuData from "../utility/dummyMenuItem.json";
import { MENU_RESTAURANT_URL } from "../utility/constants";

const useMenuCard = (resId)=>{

    const [menuItems, setMenuItems] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        // const data1 = await fetch(MENU_RESTAURANT_URL);
        // const textData = await data1.text();
        // const jsonData = JSON.parse(textData);

        setMenuItems(MenuData?.data?.cards[2]?.card?.card?.info);
    };

    return menuItems;

}

export default useMenuCard;