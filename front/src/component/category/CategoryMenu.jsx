export default function CategoryMenu({
  icon,
  title,
  category,
  setCategory,
  onClickCategoryMenu,
}) {
  const categoryBoolean = category === title;

  return (
    <button
      type="button"
      className={`${
        categoryBoolean
          ? "bg-white dark:bg-[#232426] text-[#232426] dark:text-white"
          : "bg-transparent text-white dark:text-[#232426]"
      } lg:w-[100px] lg:h-[100px] sm:w-[90px] sm:h-[90px] w-[90px] h-[90px] aspect-square border-[2px] border-solid border-white rounded-xl flex flex-col items-center justify-center hover:bg-white hover:dark:bg-[#232426] hover:text-[#232426] hover:dark:text-white transition-all duration-700`}
      onClick={() => {
        setCategory(title);

        if (typeof onClickCategoryMenu === "function") {
          onClickCategoryMenu();
        }
      }}
    >
      <img className="w-[70%] aspect-square" src={icon} alt="icon" />
      <p className="font-semibold xl:text-[1rem] lg:text-[1rem] sm:text-[0.9rem] text-[0.9rem] leading-tight">
        {title}
      </p>
    </button>
  );
}
