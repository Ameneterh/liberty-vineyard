function TeamMembers(props) {
  return (
    <div className="w-full md:w-[48%] rounded-xl shadow-sm dark:shadow-xl flex items-center p-4">
      <img
        src={props.avatar}
        alt={props.memberName}
        className="w-36 h-36 rounded-full border border-white shadow-md z-10"
      />
      <div className="ml-[-20px] pl-[30px] py-3 h-28 flex-1 bg-gradient-to-r from-white to-slate-600 dark:from-slate-800 dark:to-slate-400 rounded-2xl">
        <h2 className="font-bold text-md md:text-lg">{props.memberName}</h2>
        <p className="text-sm italic">{props.memberPosition}</p>
        <div className="social-connect"></div>
      </div>
    </div>
  );
}

export default TeamMembers;
