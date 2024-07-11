import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useClickOutside } from 'react-click-outside-hook';
import { AnimatePresence, motion } from 'framer-motion'
import { useDebounce } from '../../hooks/debounceHook';
import Loader from '../Loader/Loader';
import ChatterCard from '../ChatterCard/ChatterCard';
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export const SearchBar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef(null);

  const [isLoadingChatter, setIsLoadingChatterisLoadingChatter] = useState(true);

  const [chatterList, setchatterList] = useState([]);
  const [nochatters, setNochatters] = useState(false);

  const isEmpty = !chatterList || chatterList.length === 0;

  const clearInput = () => {
      if (inputRef.current)
          inputRef.current.value = "";
  }

  const collapse = () => {
      setExpanded(false);
      setSearchQuery("");
      setchatterList([]);
      setNochatters(false);
      clearInput();
  }

  const changeHandler = (e) => {
      e.preventDefault();
      setSearchQuery(e.target.value);
  }

  const searchchatter = async () => {
      setIsLoadingChatterisLoadingChatter(true);
      if (!searchQuery || searchQuery.trim() === "")
          return;
      console.log(isLoadingChatter);
      // const response = await fetchchatterByName(searchQuery);
      const response = { data: chatterData.filter(chatter => chatter.nickname.toLowerCase().includes(searchQuery.toLowerCase())) };
      console.log(response);
      if (response.data && response.data.length === 0) {
          setNochatters(true)
      }
      setchatterList(response.data);
      console.log(response.data);
      setIsLoadingChatterisLoadingChatter(false);
      console.log(isLoadingChatter);
  }

  useEffect(() => {
      if (isClickedOutside) {
          collapse();
      }
  }, [isClickedOutside]);

  useDebounce(searchQuery, 1500, searchchatter);

  return (
    <motion.div
            layout
            transition={{ type: "spring", damping: 22, stiffness: 150 }}
            // transition={{ type: "spring", stiffness: 100, damping: 15 }}
            style={{ height: isExpanded ? "15rem" : "2.2rem" }}/*position: isExpanded ? "absolute" : "relative" }*/
            // transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            onClick={() => {
                setExpanded(!isExpanded);
                setchatterList([]);
                setNochatters(false);
            }}
            ref={parentRef}
            className="hidden md:flex md:flex-col lg:w-[26rem] sm:w-full h-10 bg-[#3c193f] rounded-lg shadow-sm shadow-[#6d3a77] z-20">
            <div className="w-full min-h-10 flex items-center px-4">
                <span className="text-white align-middle mr-5 cursor-pointer">
                    <CiSearch size={20} />
                </span>
                <input
                    className="w-full outline-none border-none text-sm font-light text-white rounded-2xl bg-transparent placeholder-white placeholder:opacity-90 focus:placeholder-transparent focus:outline-none"
                    placeholder="Wyszukaj chattera..."
                    ref={inputRef}
                    value={searchQuery}
                    onChange={changeHandler}
                />
                <AnimatePresence>
                    {isExpanded && (
                        <motion.span
                            className="text-white align-middle cursor-pointer transition-all duration-300 hover:text-violet-300"
                            key="close-icn"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => collapse()}
                            transition={{ duration: 0.2 }}
                        >
                            <IoCloseOutline size={20} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
            {isExpanded && (<span className="flex min-w-full min-h-[2px] bg-[#6d3a77]" />)}
            {isExpanded && (<div className="flex flex-col h-full w-full overflow-hidden overflow-y-auto scrollbar-style">
                {/* <div className="flex border-2 w-full h-full items-center justify-center"> */}
                {isLoadingChatter && isExpanded && (<Loader />)}
                {!isLoadingChatter && isEmpty && !nochatters && <span className='flex h-full justify-center items-center text-sm opacity-60'>Start typing to search</span>}
                {!isLoadingChatter && nochatters && <span className='flex h-full justify-center items-center text-sm opacity-60'>No chatter found!</span>}
                {!isLoadingChatter && !isEmpty && chatterList.map((item, index) => (
                    <ChatterCard key={item.id} chatter={item} index={index} />
                ))}
            </div>
            )}
        </motion.div>
  )
}
