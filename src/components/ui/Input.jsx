function Input({ type = "text", placeholder, value, onChange, onClear }) {
  return (
    <div className="relative w-full sm:w-64">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-white/40 bg-white/40 px-4 py-3 text-sm font-medium text-gray-700 placeholder:text-gray-500 shadow-md backdrop-blur-xl transition-all duration-300 focus:border-rose-300 focus:bg-white/60 focus:outline-none focus:ring-2 focus:ring-rose-200 dark:border-white/10 dark:bg-slate-900/40 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-rose-400 dark:focus:bg-slate-900/60 dark:focus:ring-rose-500/30"
      />

      {value && (
        <button
          onClick={onClear}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600 dark:text-slate-500 dark:hover:text-white"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default Input;