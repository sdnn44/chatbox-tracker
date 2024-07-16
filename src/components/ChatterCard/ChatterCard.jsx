import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContextProvider";

const ChatterCard = ({ chatter }) => {
  // const router = useRouter();
  const { setSenderName, setCurrentPage } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div
      className="w-full flex flex-row m-1 hover:bg-violet-700/15 cursor-pointer gap-3 items-center p-2"
      onClick={() => {
        navigate(`/chatter/${chatter}`);
        localStorage.setItem("senderName", JSON.stringify(chatter));
        setCurrentPage(1);
        // router.push(`/admin/lipiec/${encodeURIComponent(admin.nickname)}`);
        // getSpecificAdmin(admin.nickname);
        // getSpecificAdminPlaytime(admin.nickname);
        // setSearchedAdmin(admin);
        // setIsLoading(true);
        // collapseMenu();
      }}
    >
      <img
        src="/assets/user.png"
        className="w-[50px] h-[50px] flex rounded-full"
        alt={chatter + `_img`}
      />
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="font-semibold">{chatter}</span>
        </div>
        <div className="flex text-[12px] font-semibold text-[#8884d8]">
          Użytkownik
        </div>
      </div>
    </div>
  );
};

export default ChatterCard;
