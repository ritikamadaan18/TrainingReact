import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { avgRating, costForTwo, cloudinaryImageId, sla, cuisines, name } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        // src="https://www.dosafactorymenu.com/blog-admin/images/indian-food-items-apt-for-everyone041641.jpeg"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla?.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
