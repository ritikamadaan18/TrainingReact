import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { avgRating, costForTwo, cloudinaryImageId, sla, cuisines, name } =
    resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        // src="https://www.dosafactorymenu.com/blog-admin/images/indian-food-items-apt-for-everyone041641.jpeg"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla?.deliveryTime} minutes</h5>
    </div>
  );
};

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
