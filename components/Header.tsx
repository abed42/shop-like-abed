export const Header = () => {
  return (
    <div className="flex ">
      <div className="flex-1 pt-5 px-16 ">logo</div>
      <div className=" flex-1 pt-5 px-16 w-2/6">
        <div className="mt-1 relative flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      <div className="pt-5 px-16 flex-1 ">favorites icon and shoping list icon </div>
    </div>
  );
};
