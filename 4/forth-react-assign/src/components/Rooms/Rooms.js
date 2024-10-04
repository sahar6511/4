import React from "react";

import "../../style/sass/main.scss";
import { useGetRoomsQuery } from "../../redux/services/roomsApi";

const AdminComp = () => {
  const { data: selectedRoomsData, error, isLoding } = useGetRoomsQuery();
  return (
    <div>
      {error ? (
        <p>دانشجویی با این شماره دانشجویی وجود ندارد</p>
      ) : isLoding ? (
        <p>Loading...</p>
      ) : selectedRoomsData ? (
        <div>
          {selectedRoomsData.map((room) => (
            <ul key={room.id}>
              <li>{room.title}</li>
              <li>
                <img src={room.imgSrc} />
              </li>
              <li>{room.facilities}</li>
              <li>وضعیت :{room.status}</li>
              <li>ظرفیت : {room.capacity}</li>
              <li>تخت اضافه : {room.extrabed}</li>
              <li>{room.price}ریال </li>
              <li>
                {console.log(
                  new Date(
                    room.startdate.year/
                    room.startdate.month/
                    room.startdate.day
                  ).toLocaleDateString("fa-IR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                )}
              </li>

              {/* <li>{room.enddate - room.startdate}</li> */}
              <hr />
            </ul>
          ))}
        </div>
      ) : null}
    </div>
  );

  //   </div>
  // );
};

export default AdminComp;
